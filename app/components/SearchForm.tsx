"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default function SearchForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [ctpvNm, setCtpvNm] = useState("");
  const [sggNm, setSggNm] = useState("");
  const [umdNm, setUmdNm] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({ ctpvNm, sggNm, umdNm });
    startTransition(() => {
      router.push(`/?${params}`);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleReset = () => {
    setCtpvNm("");
    setSggNm("");
    setUmdNm("");
    startTransition(() => {
      router.push("/");
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto">
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
        <Button text={isPending ? "검색 중..." : "검색"} onClick={handleSearch} disabled={isPending} />
        <Button text="초기화" onClick={handleReset} variant="secondary" disabled={isPending} />
      </div>
    </div>
  );
}
