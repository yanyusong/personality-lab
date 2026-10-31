"use client";

import Script from "next/script";

const ID = process.env.NEXT_PUBLIC_51LA_ID ?? "";

/**
 * 51.LA 统计（国内可直接访问，免费）。
 * 在 .env.local / 构建时设置 NEXT_PUBLIC_51LA_ID 才会启用；不设置则完全不加载，零开销。
 */
export function Analytics() {
  if (!ID) return null;
  return (
    <Script id="la-collect" strategy="afterInteractive" charset="UTF-8" src="https://sdk.51.la/js-sdk-pro.min.js">
      {`window.LA && LA.init({ id: "${ID}", ck: "${ID}", autoTrack: true, hashMode: false });`}
    </Script>
  );
}
