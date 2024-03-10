import Companies from "@/components/Companies";
import Filterjob from "@/components/Filterjob";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-6xl m-auto px-3">
      <div className="py-8 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl pb-2 font-bold">Companies</h1>
        <div className="flex flex-col gap-3 md:flex-row justify-between">
          <div>
            <p className="text-gray-700 dark:text-gray-100 capitalize">
              Bangladeshi tech company directory listings.
            </p>
          </div>
          <div>
            <Button className="btn btn-primary" asChild>
              <Link href="/companies/add-new-job">Add New Company</Link>
            </Button>
          </div>
        </div>
        <div className="border-b pt-4"></div>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <Filterjob />
        <Companies />
      </section>
    </main>
  );
};

export default page;
