import { base_url } from "../lib/config";
import Companies from "./Companies";
async function getCompanies(
  job_type,
  tech_stack,
  hiring_type,
  skipData,
  jobParpage
) {
  let url = `${base_url}/jobs?skipData=${skipData}&jobParpage=${jobParpage}`;
  if (job_type || tech_stack || hiring_type) {
    url += `?job_type=${job_type || ""}&tech_stack=${
      tech_stack || ""
    }&hiring_type=${hiring_type || ""}`;
  }
  const res = await fetch(url, {
    next: { revalidate: 10 },
  });
  const companies = await res.json();
  return { companies: companies["data"], totalCount: companies["totalCount"] };
}

const JobResults = async ({
  filterValues: { job_type, tech_stack, hiring_type },
  page = 1,
}) => {
  const jobParpage = 4;
  const skipData = (page - 1) * jobParpage;
  const companies = await getCompanies(
    job_type,
    tech_stack,
    hiring_type,
    skipData,
    jobParpage
  );

  return (
    <Companies
      companies={companies["companies"]}
      currentpage={page}
      totalPages={companies["totalCount"]}
      jobParpage={jobParpage}
      filterValues={{ job_type, tech_stack, hiring_type }}
    />
  );
};

export default JobResults;
