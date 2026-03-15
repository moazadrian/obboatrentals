import { SEO } from "@/content/seo";
import { getRentalBySlug } from "@/content/rentals";
import RentalDetailContent from "@/components/sections/RentalDetailContent";

export const metadata = SEO.halfDay;

export default function HalfDayPage() {
  const rental = getRentalBySlug("half-day")!;
  return <RentalDetailContent rental={rental} />;
}
