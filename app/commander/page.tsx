import { redirect } from "next/navigation";
import { getPlanBySlug } from "@/lib/mock-data";

interface CommanderIndexProps {
  searchParams: Promise<{ plan?: string }>;
}

/**
 * Transactional checkout entry redirect.
 * Directs visitors and queries (?plan=slug) to the preselected distraction-free checkout page.
 */
export default async function CommanderIndexPage({
  searchParams,
}: CommanderIndexProps): Promise<never> {
  const { plan: planSlug } = await searchParams;

  if (planSlug && getPlanBySlug(planSlug)) {
    redirect(`/commander/${planSlug}`);
  }

  // Best practice: direct 1-click transfer to the flagship 12-month plan
  redirect("/commander/atlas-pro-12-mois");
}

