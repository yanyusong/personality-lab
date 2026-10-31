"use client";

import Script from "next/script";

const ID = process.env.NEXT_PUBLIC_51LA_ID ?? "";

type LaWindow = Window & { LA?: { init: (o: Record<string, unknown>) => void } };

/**
 * 51.LA 统计（国内可直接访问，免费）。
 * 构建时设置 NEXT_PUBLIC_51LA_ID 才启用；不设置则完全不加载，零开销。
 */
export function Analytics() {
  if (!ID) return null;
  return (
    <Script
      id="la-collect"
      src="https://sdk.51.la/js-sdk-pro.min.js"
      strategy="afterInteractive"
      charSet="UTF-8"
      onLoad={() => {
        const w = window as unknown as LaWindow;
        w.LA?.init({ id: ID, ck: ID, autoTrack: true, hashMode: false });
      }}
    />
  );
}
