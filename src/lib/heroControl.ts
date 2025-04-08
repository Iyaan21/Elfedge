import { cache } from "react";
import clientPromise from "@/lib/mongodb";

// Define the type for hero control settings
interface HeroControlSettings {
  id?: string;
  primaryHeroVisible: boolean;
  secondaryHeroVisible: boolean;
  primaryHeroOrder: number;
  secondaryHeroOrder: number;
}

export const getHeroControlSettings = cache(async (): Promise<HeroControlSettings> => {
  try {
    const client = await clientPromise;
    const db = client.db("elfedgedb");
    const heroControl = await db.collection("heroControl").findOne({ id: "main" });

    return (
      (heroControl as unknown as HeroControlSettings) || {
        primaryHeroVisible: true,
        secondaryHeroVisible: true,
        primaryHeroOrder: 1,
        secondaryHeroOrder: 2,
      }
    );
  } catch (error) {
    console.error("Error fetching hero control settings:", error);
    return {
      primaryHeroVisible: true,
      secondaryHeroVisible: true,
      primaryHeroOrder: 1,
      secondaryHeroOrder: 2,
    };
  }
});