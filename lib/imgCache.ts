import { asset, cdnAsset } from "./asset";
import { ROLES } from "@/core/roles";

const KEY = "pp_img_";
const mem = new Map<string, string>();

function readStore(path: string): string {
  if (mem.has(path)) return mem.get(path)!;
  try {
    const v = sessionStorage.getItem(KEY + path);
    if (v) {
      mem.set(path, v);
      return v;
    }
  } catch {
    /* 隐私模式等情况忽略 */
  }
  return "";
}

function writeStore(path: string, dataUrl: string) {
  mem.set(path, dataUrl);
  try {
    sessionStorage.setItem(KEY + path, dataUrl);
  } catch {
    /* 超配额就只留内存 */
  }
}

async function toDataUrl(src: string): Promise<string> {
  const r = await fetch(src, { mode: "cors", cache: "force-cache" });
  if (!r.ok) throw new Error(`http ${r.status}`);
  const blob = await r.blob();
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(String(fr.result));
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

/** 取已缓存的角色图（dataURL），没有返回空串 */
export function getCachedImage(path: string): string {
  return readStore(path);
}

/** 单张：先查缓存，再依次尝试 CDN / 本地 */
export async function loadImage(path: string): Promise<string> {
  const hit = readStore(path);
  if (hit) return hit;
  for (const src of [cdnAsset(path), asset(path)]) {
    try {
      const d = await toDataUrl(src);
      writeStore(path, d);
      return d;
    } catch {
      /* 换下一个源 */
    }
  }
  return "";
}

/**
 * 答题期间后台把 12 张角色图全部预取成 dataURL，
 * 这样出结果时不需要再等网络。
 */
export async function prefetchAllRoles(): Promise<void> {
  for (const role of ROLES) {
    const path = role.image;
    if (readStore(path)) continue;
    await loadImage(path);
  }
}
