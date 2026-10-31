export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 给 public 下的静态资源加上部署子路径前缀 */
export function asset(p: string) {
  return `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;
}
