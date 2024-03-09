import Companies from "@/components/Companies";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="py-8 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl pb-2 font-bold">Companies</h1>
        <div className="flex flex-col gap-3 md:flex-row justify-between">
          <div>
            <p className="text-gray-700 dark:text-gray-100">
              Here are the companies that are currently using our services.
            </p>
          </div>
          <div>
            <Button className="btn btn-primary">
              <Link href="/companies/new">Add New Company</Link>
            </Button>
          </div>
        </div>
        <div className="border-b pt-4"></div>
      </div>
      <Companies />
    </section>
  );
};

export default page;
