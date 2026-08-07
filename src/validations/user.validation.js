import { z } from "zod";

export const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),

  categories: z
    .array(
      z.enum([
        "general",
        "world",
        "nation",
        "business",
        "technology",
        "entertainment",
        "sports",
        "science",
        "health",
      ])
    )
    .min(1, "Select at least one category"),

  frequency: z.enum(["daily", "weekly"]),
});