import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="space-y-5 px-4 md:px-8 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl text-muted-foreground dark:text-gray-100 font-semibold">
              Dev Jobs Bd
            </h3>
            <p className="text-sm text-muted-foreground dark:text-gray-100">
              Connecting talents with opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground dark:text-gray-100">
            <Link href={"#"} className="hover:underline">
              About Us
            </Link>
            <Link href={"#"} className="hover:underline">
              Contact Us
            </Link>
            <Link href={"#"} className="hover:underline">
              Terms of Service
            </Link>
            <Link href={"#"} className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground dark:text-gray-100">
          &copy; {new Date().getFullYear()} Dev Jobs Bd, Inc. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
