export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * 图片走 jsDelivr CDN（GitHub Pages 在国内首字节常要 4-5 秒）。
 * 部署后若 CDN 未刷新，onError 会回退到站点本地路径。
 */
export const CDN_BASE =
  process.env.NEXT_PUBLIC_CDN_BASE ?? "https://cdn.jsdelivr.net/gh/yanyusong/personality-lab@gh-pages";

export function asset(p: string) {
  const path = p.startsWith("/") ? p : `/${p}`;
  return `${BASE_PATH}${path}`;
}

/** 大图走 CDN */
export function cdnAsset(p: string) {
  const path = p.startsWith("/") ? p : `/${p}`;
  return CDN_BASE ? `${CDN_BASE}${path}` : `${BASE_PATH}${path}`;
}
