"use client";

import Script from "next/script";

export default function KakaoMapScript() {
  return (
    <Script
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=services&autoload=false`}
      strategy="afterInteractive"
      onLoad={() => {
        window.kakao.maps.load(() => {
          window.dispatchEvent(new Event("kakaoMapsReady"));
        });
      }}
    />
  );
}
