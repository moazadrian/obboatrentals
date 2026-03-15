import { SEO } from "@/content/seo";
import ContactContent from "@/components/sections/ContactContent";

export const metadata = SEO.contact;

export default function ContactPage() {
  return <ContactContent />;
}
