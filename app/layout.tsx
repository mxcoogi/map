import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import KakaoMapScript from "./components/KakaoMapScript";
export const metadata: Metadata = {
  title: "ansim-map",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-full">
        <KakaoMapScript />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
