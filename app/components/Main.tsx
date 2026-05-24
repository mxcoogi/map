export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col flex-1 w-full bg-gray-50 overflow-hidden">
      {children}
    </main>
  );
}
