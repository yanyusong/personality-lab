/** 轻量埋点：没接统计时自动静默 */
export function track(event: string, props?: Record<string, string | number | boolean>) {
  try {
    const w = window as unknown as { LA?: { track?: (e: string, p?: Record<string, unknown>) => void } };
    w.LA?.track?.(event, props ?? {});
  } catch {
    /* 统计挂了不影响功能 */
  }
}
