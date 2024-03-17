import { redirect } from "next/navigation";
import { base_url } from "../lib/config";
import { jobfilterSchema } from "../lib/utils";
import ClearFilter from "./ClearFilter";
import FilterButton from "./FilterButton";
import { Label } from "./ui/label";
async function getTechStack() {
  let url = `${base_url}/jobs/techStack`;
  const response = await fetch(url, {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  return data["data"];
}

async function filterJobs(formData) {
  "use server";
  const values = Object.fromEntries(formData.entries());
  const { job_type, tech_stack, hiring_type } = jobfilterSchema.parse(values);
  const searchParams = new URLSearchParams({
    ...(job_type && { job_type: encodeURIComponent(job_type) }),
    ...(tech_stack && { tech_stack: encodeURIComponent(tech_stack) }),
    ...(hiring_type && { hiring_type: encodeURIComponent(hiring_type) }),
  });

  redirect(`/companies?${searchParams.toString()}`);
}

const Filterjob = async ({ filterValues }) => {
  const techStack = await getTechStack();

  return (
    <aside className="md:w-[260px] p-4 sticky top-0 bg-background border rounded-lg h-fit">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="job_type"
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Job Type
            </Label>
            <select
              id="job_type"
              name="job_type"
              className="h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={filterValues.job_type || ""}
            >
              <option value={""}>Select Job Type</option>
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <Label
              htmlFor="tech_stack"
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Tech Stack
            </Label>

            <select
              id="tech_stack"
              name="tech_stack"
              className="h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={filterValues.tech_stack || ""}
            >
              <option value={""}>Select Tech Stack</option>
              {techStack?.map((stack) => (
                <option key={stack.techStack} value={stack.techStack}>
                  {stack.techStack}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label
              htmlFor="hiring_type"
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Hiring Type
            </Label>

            <select
              id="hiring_type"
              name="hiring_type"
              className="h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue={filterValues.hiring_type || ""}
            >
              <option value={""}>Select Hiring Type</option>
              <option value="intern">Hire Interns</option>
              <option value="fresher">Hire Freshers</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <FilterButton className="w-full">Filter Jobs</FilterButton>
            <ClearFilter />
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filterjob;
