import LenisProvider from "@/providers/lenis-provider";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <LenisProvider>{children}</LenisProvider>
      <Footer />
    </>
  );
}
