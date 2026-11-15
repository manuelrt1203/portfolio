import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Site d'une seule page : une seule URL, la même que la canonique (avec la barre finale). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      // Pas de lastModified : « maintenant » à chaque compilation serait faux, et Google ignore alors le champ.
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
