import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "./ui/button";

const Companies = ({
  companies,
  currentpage,
  jobParpage,
  totalPages,
  filterValues: { job_type, tech_stack, hiring_type },
}) => {
  return (
    <div className="space-y-4 grow mb-5">
      {companies?.length === 0 && (
        <div className="flex items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-gray-700 font-heading leading-snug dark:text-slate-100">
            No companies found!
          </h1>
        </div>
      )}
      {companies?.map((company, i) => (
        <article
          key={i}
          className="md:max-w-[53.5rem] gap-3 border rounded-lg p-5 hover:bg-muted/60"
        >
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex flex-col text-center md:text-left gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-700 font-heading leading-snug dark:text-slate-100">
                {company?.companyName}
              </h3>
              <div className="flex gap-2 justify-center md:justify-start text-xs">
                {company?.workType?.map((work, i) => (
                  <div
                    key={i}
                    className={`px-2 py-1 border rounded-xl bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-100
                       ${
                         (work?.workType === "onsite" &&
                           "bg-red-300 dark:bg-red-700") ||
                         (work?.workType === "remote" &&
                           "bg-green-300 dark:bg-green-700") ||
                         (work?.workType === "hybrid" &&
                           "bg-blue-300 dark:bg-blue-700")
                       }
                    `}
                  >
                    {work?.workType === "onsite" && (
                      <span className="inline-block font-semibold text-xs text-gray-900 dark:text-gray-100">
                        {work?.workType}
                      </span>
                    )}
                    {work?.workType === "remote" && (
                      <span className="inline-block font-semibold text-xs text-gray-900 dark:text-gray-100">
                        {work?.workType}
                      </span>
                    )}
                    {work?.workType === "hybrid" && (
                      <span className="inline-block font-semibold text-xs text-gray-900 dark:text-gray-100">
                        {work?.workType}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-center gap-2">
              {company?.hireInternsandFreshers?.map((hire, i) => (
                <Fragment key={i}>
                  <div className="w-auto">
                    {hire?.hireType === "intern" && (
                      <div className="flex justify-center gap-1 px-2 py-1 rounded-xl items-center text-white bg-gray-500 dark:bg-gray-700 dark:text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg>
                        <span className="text-xs">{hire?.hireType}</span>
                      </div>
                    )}
                  </div>
                  <div className="w-auto">
                    {hire?.hireType === "fresher" && (
                      <div className="flex justify-center gap-1 bg-green-700 text-white px-2 py-1 rounded-xl items-center dark:bg-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg>
                        <span className="text-xs">{hire?.hireType}</span>
                      </div>
                    )}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="md:grid md:grid-cols-5 justify-between gap-2 pt-8">
            <div className="w-full flex flex-col gap-2">
              {company?.salaryRange && (
                <div className="flex my-1 gap-1 text-gray-700 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="min-w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    ></path>
                  </svg>

                  <span className="inline-block text-xs">
                    {"\u09F3"} {company?.salaryRange} {"K"} BDT
                  </span>
                </div>
              )}
              {company?.established && (
                <div className="flex my-1 gap-1 text-gray-700 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="min-w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    ></path>
                  </svg>

                  <span className="inline-block text-xs">
                    {company?.established}
                  </span>
                </div>
              )}

              {company?.totalEmployees && (
                <div className="flex my-1 gap-1 text-gray-700 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="min-w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    ></path>
                  </svg>
                  <span className="inline-block text-xs">
                    {company?.totalEmployees} employees
                  </span>
                </div>
              )}

              {company?.officeLocation && (
                <div className="flex my-1 gap-1 text-gray-700 dark:text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="min-w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    ></path>
                  </svg>

                  <span className="inline-block text-xs break-words">
                    {company?.officeLocation}
                  </span>
                </div>
              )}

              <div className="flex flex-row justify-start gap-1 text-sm text-gray-700 dark:text-gray-100">
                {company?.companyUrl && (
                  <Link
                    href={company?.companyUrl}
                    target="_blank"
                    className="flex flex-wrap justify-center items-center w-auto p-1 hover:text-blue-500 transition-all duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      ></path>
                    </svg>
                  </Link>
                )}

                {company?.companyFacebook && (
                  <Link
                    href={company?.companyFacebook}
                    target="_blank"
                    className="flex flex-wrap justify-center items-center w-auto p-1 hover:text-blue-500 transition-all duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"></path>
                    </svg>
                  </Link>
                )}

                {company?.companyLinkedin && (
                  <Link
                    href={company?.companyLinkedin}
                    target="_blank"
                    className="flex flex-wrap justify-center items-center w-auto p-1 hover:text-blue-500 transition-all duration-300 ease-in-out"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="LinkedIn">
                        <g>
                          <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z"></path>
                          <g>
                            <path d="M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z"></path>
                            <circle cx="7.376" cy="6.744" r="1"></circle>
                            <path d="M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full h-full col-span-4 mt-10 md:mt-0 flex flex-col border-l border-gray-300 px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
              <div className="md:max-w-[38rem]">
                <p>{company?.companyDescription}</p>
              </div>
              {company?.currentHiringRole?.length > 0 && (
                <div className="md:max-w-[38rem]">
                  <div className="w-full flex flex-col md:flex-row break-words text-center md:text-left gap-2 items-center my-4 text-gray-700 dark:text-gray-100 font-semibold border border-gray-300 rounded p-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="min-w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      ></path>
                    </svg>

                    {company?.currentHiringRole?.map((role, i) => (
                      <span key={i} className="inline-block">
                        {role?.hiringRole}
                        {i !== company?.currentHiringRole?.length - 1 && (
                          <span className="inline-block"> , </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {company?.primaryTechStack?.length > 0 && (
                <div className="md:max-w-[38rem]">
                  <div className="w-full flex flex-col md:flex-row break-words text-center md:text-left gap-2 items-center my-4 text-gray-700 dark:text-gray-100 font-semibold border border-gray-300 rounded p-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      ></path>
                    </svg>

                    {company?.primaryTechStack?.map((tech, i) => (
                      <span key={i} className="inline-block">
                        {tech?.techStack}
                        {i !== company?.primaryTechStack?.length - 1 && (
                          <span className="inline-block"> , </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {company?.companyCareersUrl && (
                      <Button asChild className="w-full md:w-auto">
                        <Link href={company?.companyCareersUrl} target="_blank">
                          Apply Link
                        </Link>
                      </Button>
                    )}
                    {company?.companyEmail && (
                      <Button asChild className="w-full md:w-auto">
                        <Link href={`mailto:${company?.companyEmail}`}>
                          Apply Email
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
      {companies?.length > 0 && (
        <Pagination
          currentPage={currentpage}
          totalPages={Math.ceil(totalPages / jobParpage)}
          filterValues={{ job_type, tech_stack, hiring_type }}
        />
      )}
    </div>
  );
};

export default Companies;
function Pagination({
  currentPage,
  totalPages,
  filterValues: { job_type, tech_stack, hiring_type },
}) {
  function generatePageLink(page) {
    const searchParams = new URLSearchParams({
      ...(job_type && { job_type: job_type }),
      ...(tech_stack && { tech_stack: tech_stack }),
      ...(hiring_type && { hiring_type: hiring_type }),
      ...(page > 1 && { page: page }),
    });
    return `/companies?${searchParams.toString()}`;
  }
  return (
    <div className="flex justify-between gap-2">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={`flex items-center gap-2 font-semibold ${
          currentPage <= 1 && "invisible"
        }`}
      >
        <ArrowLeft size={16} />
        Previous
      </Link>
      <span className="flex items-center gap-2 font-semibold">
        page {currentPage} of {totalPages}
      </span>
      <Link
        href={generatePageLink(currentPage + 1)}
        className={`flex items-center gap-2 font-semibold ${
          currentPage >= totalPages && "invisible"
        }`}
      >
        Next <ArrowRight size={16} />
      </Link>
    </div>
  );
}
