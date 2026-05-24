"use client";

import { useEffect, useRef } from "react";
import { AddressItem } from "../types";

const Map = ({ addrItems }: { addrItems: AddressItem[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = (lat = 36.5, lng = 127.38, isCurrentPos = false) => {
      const container = mapRef.current!;
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 5,
      };
      const map = new window.kakao.maps.Map(container, options);
      kakaoMapRef.current = map;
      const geocoder = new window.kakao.maps.services.Geocoder();

      if (isCurrentPos) {
        const currentCoords = new window.kakao.maps.LatLng(lat, lng);
        const content = `
          <div style="
            width: 16px; height: 16px;
            background: #3b82f6;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 3px rgba(59,130,246,0.4);
          "></div>
        `;
        new window.kakao.maps.CustomOverlay({
          map,
          position: currentCoords,
          content,
          yAnchor: 0.5,
          xAnchor: 0.5,
        });
      }

      addrItems.forEach((addrItem, index) => {
        const address = `${addrItem.ctpvNm} ${addrItem.sggNm} ${addrItem.umdNm} ${addrItem.mno}-${addrItem.sno}`;
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            new window.kakao.maps.Marker({ map, position: coords });
            if (index === 0) map.setCenter(coords);
          }
        });
      });
    };

    const startMap = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => initMap(pos.coords.latitude, pos.coords.longitude, true),
        () => initMap(),
      );
    };

    if (window.kakao?.maps?.LatLng) {
      startMap();
      return;
    }

    window.addEventListener("kakaoMapsReady", startMap);
    return () => window.removeEventListener("kakaoMapsReady", startMap);
  }, [addrItems]);

  const handleGoToMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = new window.kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        kakaoMapRef.current?.setCenter(coords);
      },
      () => alert("위치 권한을 허용해 주세요."),
    );
  };

  return (
    <div className="relative w-full flex-1 min-h-0">
      <div ref={mapRef} className="absolute inset-0" />
      <button
        onClick={handleGoToMyLocation}
        className="absolute bottom-6 right-4 z-10 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 cursor-pointer"
      >
        📍 내 위치로
      </button>
    </div>
  );
};

export default Map;
