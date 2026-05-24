"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default function SearchForm() {
  const router = useRouter();
  const [ctpvNm, setCtpvNm] = useState("");
  const [sggNm, setSggNm] = useState("");
  const [umdNm, setUmdNm] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({ ctpvNm, sggNm, umdNm });
    router.push(`/?${params}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleReset = () => {
    setCtpvNm("");
    setSggNm("");
    setUmdNm("");
    router.push("/");
  };

  return (
    <div className="flex items-center gap-2 w-full px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      <SearchBar
        placeholder="시도 (예: 서울특별시)"
        value={ctpvNm}
        onChange={(e) => setCtpvNm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchBar
        placeholder="시군구 (예: 강남구)"
        value={sggNm}
        onChange={(e) => setSggNm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchBar
        placeholder="읍면동 (예: 역삼동)"
        value={umdNm}
        onChange={(e) => setUmdNm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button text="검색" onClick={handleSearch} />
      <Button text="초기화" onClick={handleReset} variant="secondary" />
    </div>
  );
}
