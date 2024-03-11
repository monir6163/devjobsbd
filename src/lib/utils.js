import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "Companies" },
  { href: "/events", label: "Events" },
  { href: "/devjobs", label: "Jobs" },
];
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const companiesShema = z.object({
  companyName: z
    .string()
    .min(3, "companyName must be at least 3 characters")
    .max(20, "companyName must be at most 20 characters"),
  companyLogo: z
    .custom()
    .refine((files) => {
      if (!files) return true;
      return files[0]?.size <= MAX_FILE_SIZE;
    }, "File size should be less than 5MB")
    .refine((files) => {
      if (!files) return true;
      return ACCEPTED_IMAGE_MIME_TYPES.includes(files[0]?.type);
    }, "Only .jpg, .jpeg, .png and .webp formats are supported.")
    .optional(),
  companyUrl: z.string().url("Invalid URL"),
  //worktype select field value
  workType: z.string(),
});
