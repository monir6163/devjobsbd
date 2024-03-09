import { companies } from "@/lib/fakeCompanies";
import Link from "next/link";
import { Button } from "./ui/button";

const Companies = () => {
  return (
    <div className="py-4 space-y-4 grow">
      {companies.map((company, i) => (
        <article
          className="gap-3 border rounded-lg p-5 hover:bg-muted/60"
          key={i}
        >
          <div className="w-full flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex flex-col text-center md:text-left gap-2 mb-2">
              <h3 className="text-2xl font-bold text-gray-700 font-heading leading-snug dark:text-slate-100">
                6amTech
              </h3>
              <div className="flex gap-2 justify-center md:justify-start text-xs">
                <div className="px-2 py-1 border rounded-xl bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                  <span className="inline-block font-semibold text-xs text-gray-900 dark:text-gray-100">
                    On site
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <div className="w-auto">
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
                  <span className="text-xs">Hires Intern</span>
                </div>
              </div>

              <div>
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
                  <span className="text-xs">Hires Fresher</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:grid md:grid-cols-5 justify-between gap-8 pt-8">
            <div className="w-full flex flex-col gap-2">
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

                <span className="inline-block text-xs">Since 2020</span>
              </div>

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
                <span className="inline-block text-xs">51-100 employees</span>
              </div>

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
                  Mirpur Dohs, Dhaka
                </span>
              </div>

              <div className="flex flex-row justify-start gap-1 text-sm text-gray-700 dark:text-gray-100">
                <Link
                  href="https://6amtech.com"
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

                <Link
                  href="https://www.facebook.com/6amtech?mibextid=ZbWKwL"
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

                <Link
                  href="https://www.linkedin.com/company/6amtech/"
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

                {/* <Link
                href="https://6amtech.com/career"
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  ></path>
                </svg>
              </Link> */}
              </div>
            </div>

            <div className="w-full h-full col-span-4 mt-10 md:mt-0 flex flex-col border-l border-gray-300 px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
              <div>
                6amTech is a Bangladeshi software company that develops web and
                mobile applications for its IT partner and entrepreneurs, We are
                selling software in partnership with Envato, the world&apos;s
                Largest software marketplace, bamTech is one of the
                fastest-growing software providers in Codecanyon. Our mission is
                to help our clients succeed by providing customizable software
                solutions and expert support. We believe in putting our clients
                first, and our core values include innovation, integrity, and
                excellence. We also take pride in our positive and productive
                work environment and are committed to fostering a culture of
                innovation and excellence.
              </div>
              <div className="w-auto p-2">
                <div className="w-full flex flex-col md:flex-row break-words text-center md:text-left gap-2 items-center my-4 text-gray-700 dark:text-gray-100 font-semibold border border-gray-300 rounded p-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    ></path>
                  </svg>

                  <span className="inline-block">Flutter, Laravel</span>
                </div>
                <Button className="w-full md:w-auto">
                  <Link href="/companies/6amtech">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Companies;
