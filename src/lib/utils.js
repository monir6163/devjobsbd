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

export const items = [
  { value: "onsite", label: "Onsite" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Remote" },
];

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const logo = z
  .custom()
  .refine((files) => {
    // files length is 0 when no file is uploaded
    if (files.length === 0) return true;
    return files[0]?.size <= MAX_FILE_SIZE;
  }, "File size should be less than 5MB")
  .refine((files) => {
    if (files.length === 0) return true;
    return ACCEPTED_IMAGE_MIME_TYPES.includes(files[0]?.type);
  }, "Only .jpg, .jpeg, .png and .webp formats are supported.");

const workarray = z.custom().refine((workType) => {
  if (workType?.length === 0) return false;
  return true;
}, "Please select at least one work type");

const hires = z.custom().refine((hireInternsandFreshers) => {
  if (hireInternsandFreshers?.length === 0) return false;

  return true;
}, "Please select at least one work type");

export const companiesShema = z.object({
  companyName: z
    .string()
    .min(3, "companyName must be at least 3 characters")
    .max(20, "companyName must be at most 20 characters"),
  companyLogo: logo,
  companyUrl: z.union([z.literal(""), z.string().trim().url()]),
  companyLinkedin: z.union([z.literal(""), z.string().trim().url()]),
  companyFacebook: z.union([z.literal(""), z.string().trim().url()]),
  companyCareersUrl: z.union([z.literal(""), z.string().trim().url()]),
  primaryTechStack: z
    .string()
    .min(3, "primaryTechStack must be at least 3 characters"),
  // hireInterns: z.boolean().default(false),
  // hireFreshers: z.boolean().default(false),

  officeLocation: z.string().optional(),
  established: z.string().optional(),
  totalEmployees: z.string().optional(),

  currentHiringRole: z.union([
    z.literal(""),
    z.string().min(3, "currentHiringRole must be at least 3 characters"),
  ]),
  companyDescription: z.union([
    z.literal(""),
    z
      .string()
      .min(10, "companyDescription must be at least 10 characters")
      .max(500, "companyDescription must be at most 500 characters"),
  ]),
  companyEmail: z.union([z.literal(""), z.string().email()]),
  salaryRange: z.string().optional(),
  workType: workarray,
  hireInternsandFreshers: hires,
});

export const jobfilterSchema = z.object({
  job_type: z.string().optional(),
  tech_stack: z.string().optional(),
  hiring_type: z.string().optional(),
});

export const workTypeData = [
  { value: "onsite", label: "OnSite" },
  { value: "hybrid", label: "Hybrid" },
  { value: "remote", label: "Remote" },
];

export const hireInternsandFreshersData = [
  { value: "intern", label: "Interns" },
  { value: "fresher", label: "Freshers" },
  // { value: "experienced", label: "Experienced" },
  // { value: "contract", label: "Contract" },
  // { value: "fulltime", label: "Full Time" },
  // { value: "parttime", label: "Part Time" },
  // { value: "freelance", label: "Freelance" },
];
