/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const BabulImg = "/images/babul.jpg";
const MonirImg = "/images/monird.jpg";
const MehediImg = "/images/mehedi.jpg";
const EmonImg = "/images/emon.jpg";

const Hero = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="overflow-hidden py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <h1 className="text-5xl py-2 text-center md:text-left md:text-[82px] font-bold text-gray-900 mb-4 md:mb-6 leading-tight bg-gradient-to-r from-green-600 to-red-700 inline-block text-transparent bg-clip-text">
              Developer Jobs In Bangladesh
            </h1>
            <p className="text-gray-800 text-center md:text-left leading-loose mb-6 md:mb-8 dark:text-gray-100">
              We help you find the best job opportunities in the most innovative
              companies.
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <Link href="/companies" className="text-center md:text-left">
                <Button variant="outline">Browse Companies</Button>
              </Link>
              <Link
                href="https://www.facebook.com/btebresultshub"
                target="_blank"
                className="text-center md:text-left animate-pulse"
              >
                <Button variant="secondary">
                  <span className="mr-1">👍</span>
                  Join the Community
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="relative h-48 md:h-72 flex self-center">
              <Image
                src={BabulImg}
                width={300}
                height={300}
                alt="Babul"
                className="w-full h-auto rounded-lg object-cover transform hover:-translate-y-2 transition ease-in-out duration-1000"
              />
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="h-24 md:h-48">
                <img
                  src={MehediImg}
                  alt="Mehedi"
                  className="w-full h-full rounded-lg object-cover transform hover:-translate-y-2 transition ease-in-out duration-1000"
                />
              </div>
              <div className="h-24 md:h-48">
                <img
                  src={EmonImg}
                  alt="Emon"
                  className="w-full h-full rounded-lg object-cover transform hover:-translate-y-2 transition ease-in-out duration-1000"
                />
              </div>
            </div>
            <div className="relative h-48 md:h-72 flex self-center">
              <Image
                src={MonirImg}
                width={300}
                height={300}
                alt="Monir"
                className="w-full h-auto rounded-lg object-cover transform hover:-translate-y-2 transition ease-in-out duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
