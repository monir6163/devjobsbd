import { FacebookIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Feature = () => {
  return (
    <section className="">
      <div className="overflow-hidden py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mb-5 text-blue-900 text-3xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight dark:text-gray-100">
            A lot of interesting features are coming soon...
          </h2>
          <p className="mb-7 text-lg text-gray-600 dark:text-gray-100 font-medium">
            Want to get the instant updates?
          </p>
          <Button variant="secondary" asChild>
            <Link
              target="_blank"
              className="mr-1"
              href="https://www.facebook.com/btebresultshub"
            >
              <FacebookIcon size={18} />
              Join the Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
