import { SEO } from "@/content/seo";
import { getRentalBySlug } from "@/content/rentals";
import RentalDetailContent from "@/components/sections/RentalDetailContent";

export const metadata = SEO.fullDay;

export default function FullDayPage() {
  const rental = getRentalBySlug("full-day")!;
  return <RentalDetailContent rental={rental} />;
}
