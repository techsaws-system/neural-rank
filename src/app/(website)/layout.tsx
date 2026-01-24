import LenisProvider from "@/providers/lenis-provider";
import { SeoFormProvider } from "@/providers/seo-form-provider";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { SeoFormModal } from "@/components/partials/seo-form-modal";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SeoFormProvider>
      <Header />
      <LenisProvider>{children}</LenisProvider>
      <Footer />

      <SeoFormModal />
    </SeoFormProvider>
  );
}
