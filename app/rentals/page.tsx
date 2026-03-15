import { SEO } from "@/content/seo";
import RentalsContent from "@/components/sections/RentalsContent";

export const metadata = SEO.rentals;

export default function RentalsPage() {
  return <RentalsContent />;
}