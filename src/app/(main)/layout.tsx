import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AOSProvider from "@/components/shared/AOSProvider";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AOSProvider>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </AOSProvider>
  );
}
