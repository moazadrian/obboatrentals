import type { Metadata } from "next";
import { SITE } from "@/content/site-config";
import { BookingProvider } from "@/lib/booking-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/ui/BookingModal";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.name, description: SITE.description, url: SITE.url,
    siteName: SITE.name, images: [{ url: SITE.ogImage, width: 1200, height: 630 }],
    locale: "en_US", type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description, images: [SITE.ogImage] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}