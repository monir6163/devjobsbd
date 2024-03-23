import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ThemeProvider } from "../../components/theme-provider";
import "../globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Devjobsbd - Developer Jobs in Bangladesh",
  description:
    "Find developer jobs in Bangladesh and work from home opportunities. Post a job for free. Find your next software engineering job. Devjobsbd is a job board for developers in Bangladesh.",
  keywords:
    "devjobsbd, devhubsbd, devjobs, devhubs, jobs, job, bd, bangladesh, developer, software, engineer, remote, work, work from home, wfh, job board, job portal, job site, job search, job listing, job posting, job vacancy, job opportunity, job opening, job application",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devjobsbd.vercel.app/",
    site_name: "Devjobsbd",
    title: "Devjobsbd - Developer Jobs in Bangladesh",
    description:
      "Find developer jobs in Bangladesh and work from home opportunities. Post a job for free. Find your next software engineering job. Devjobsbd is a job board for developers in Bangladesh.",
    images: [
      {
        url: "https://devjobsbd.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devjobsbd - Developer Jobs in Bangladesh",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} min-w[350px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <NextTopLoader
            color="#1E3A8A"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
          />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
