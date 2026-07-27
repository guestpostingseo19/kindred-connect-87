import growthChart from "@/assets/growth-chart.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import smartHome from "@/assets/smart-home.jpg";
import workspace from "@/assets/workspace.jpg";

export const BLOG_IMAGES = {
  hero: heroBg,
  smartHome,
  growth: growthChart,
  workspace,
} as const;

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
