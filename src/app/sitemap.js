export default async function sitemap() {
  return [
    {
      url: "https://devjobsbd.vercel.app/",
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: "https://devjobsbd.vercel.app/companies",
      lastModified: new Date().toISOString(),
      priority: 0.95,
    },
    {
      url: "https://devjobsbd.vercel.app/events",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: "https://devjobsbd.vercel.app/devjobs",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: "https://devjobsbd.vercel.app/companies/add-new-job",
      lastModified: new Date().toISOString(),
      priority: 0.9,
    },
  ];
}
