import { z } from "zod";

export const openaiFaqSchema = z.object({
  url: z
    .string()
    .url("A valid public website URL is required.")
    .refine((url) => /^https?:\/\/(?!localhost|127\.0\.0\.1|0\.0\.0\.0)/.test(url), {
      message: "Please enter a public, non-localhost URL (starting with http(s)://)",
    }),
});