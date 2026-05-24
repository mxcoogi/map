export default function Loading() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center gap-4 bg-gray-50">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
      </div>
      <p className="text-sm text-gray-400 tracking-wide">지도를 불러오는 중...</p>
    </div>
  );
}
