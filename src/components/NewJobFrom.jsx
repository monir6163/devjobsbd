"use client";

import {
  companiesShema,
  hireInternsandFreshersData,
  workTypeData,
} from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import Select from "react-dropdown-select";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import LoadingButton from "./LoadingButton";

const NewJobFrom = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   workType: [],
    //   hireInternsandFreshers: [],
    // },
    resolver: zodResolver(companiesShema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    for (const key in data) {
      if (key === "companyLogo") {
        formData.append(key, data[key][0]);
      } else if (key === "workType") {
        formData.append(key, JSON.stringify(data[key]));
      } else if (key === "hireInternsandFreshers") {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }
    try {
      const res = await axios.post(`http://localhost:5000/api/jobs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        const newResolve = new Promise((resolve) => {
          setTimeout(() => {
            resolve(res);
            setIsSubmitting(false);
            reset();
          }, 2000);
        });
        toast.promise(newResolve, {
          loading: "Submitting...",
          success: "Job added successfully",
          error: "Something went wrong, try again",
        });
      }
    } catch (error) {
      setIsSubmitting(false);

      toast.error(
        error.response?.data?.message || "Something went wrong, try again",
        {
          style: {
            minWidth: "250px",
          },
        }
      );
    }
  };

  return (
    <main className="max-w-3xl m-auto my-10 space-y-10">
      <Toaster />
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Find your perfect developer
        </h1>
        <p className="text-muted-foreground">
          Get your job posting seen by thousands of job seekers.
        </p>
      </div>
      <div className="space-y-4 border rounded-lg p-4">
        <div>
          <h2 className="font-semibold">Job Details</h2>
          <p className="text-muted-foreground">
            Provide a job description and details
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyName"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                {...register("companyName")}
                placeholder="Enter company name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm">
                  {errors.companyName.message}
                </span>
              )}
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyLogo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Logo
              </label>
              <input
                type="file"
                name="companyLogo"
                id="companyLogo"
                {...register("companyLogo")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyLogo && (
                <span className="text-red-500 text-sm">
                  {errors.companyLogo.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyUrl"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Website
              </label>
              <input
                type="text"
                name="companyUrl"
                id="companyUrl"
                {...register("companyUrl")}
                placeholder="Enter company website"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyUrl && (
                <span className="text-red-500 text-sm">
                  {errors.companyUrl.message}
                </span>
              )}
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyEmail"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Email
              </label>
              <input
                type="email"
                name="companyEmail"
                id="companyEmail"
                {...register("companyEmail")}
                placeholder="Enter company email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyLinkedin"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company LinkedIn
              </label>
              <input
                type="text"
                name="companyLinkedin"
                id="companyLinkedin"
                {...register("companyLinkedin")}
                placeholder="Enter company LinkedIn"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyFacebook"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Facebook
              </label>
              <input
                type="text"
                name="companyFacebook"
                id="companyFacebook"
                {...register("companyFacebook")}
                placeholder="Enter company Facebook"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyFacebook && (
                <span className="text-red-500 text-sm">
                  {errors.companyFacebook.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="companyCareersUrl"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Company Careers URL
              </label>
              <input
                type="text"
                name="companyCareersUrl"
                id="companyCareersUrl"
                {...register("companyCareersUrl")}
                placeholder="Enter company careers URL"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.companyCareersUrl && (
                <span className="text-red-500 text-sm">
                  {errors.companyCareersUrl.message}
                </span>
              )}
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="workType"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Work Type
              </label>

              <Controller
                name="workType"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={workTypeData}
                    multi
                    placeholder="Select work type"
                  />
                )}
              />
              {/* <select
                name="workType"
                id="workType"
                {...register("workType")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select work type</option>
                <option value="onsite">OnSite</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select> */}
              {errors.workType && (
                <span className="text-red-500 text-sm">
                  {errors.workType.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="officeLocation"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Office Location
              </label>
              <input
                type="text"
                name="officeLocation"
                id="officeLocation"
                {...register("officeLocation")}
                placeholder="eg: Dhaka, Bangladesh"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="established"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Established
              </label>
              <input
                type="text"
                name="established"
                id="established"
                {...register("established")}
                placeholder="eg: 2004"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="totalEmployees"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Total Employees
              </label>
              <input
                type="text"
                name="totalEmployees"
                id="totalEmployees"
                {...register("totalEmployees")}
                placeholder="Eg: 100-200"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="hireInternsandFreshers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Hire Interns and Freshers
              </label>
              <Controller
                name="hireInternsandFreshers"
                id="hireInternsandFreshers"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={hireInternsandFreshersData}
                    multi
                    placeholder="Select hire interns and freshers"
                  />
                )}
              />

              {errors.hireInternsandFreshers && (
                <span className="text-red-500 text-sm">
                  {errors.hireInternsandFreshers.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="salaryRange"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Salary Range
              </label>
              <input
                type="text"
                name="salaryRange"
                id="salaryRange"
                {...register("salaryRange")}
                placeholder="Eg: 10000-20000 BDT"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                htmlFor="currentHiringRole"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Current Hiring Role
              </label>
              <input
                type="text"
                name="currentHiringRole"
                id="currentHiringRole"
                {...register("currentHiringRole")}
                placeholder="Eg: Software Engineer, Frontend Developer, etc."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="space-y-2 w-full">
              <label
                htmlFor="primaryTechStack"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Primary Tech Stack <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="primaryTechStack"
                id="primaryTechStack"
                {...register("primaryTechStack")}
                placeholder="Eg: React, Node, Express, MongoDB, etc."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              {errors.primaryTechStack && (
                <span className="text-red-500 text-sm">
                  {errors.primaryTechStack.message}
                </span>
              )}
            </div>
            {/* <div className="space-y-2 w-full">
              <div className="flex items-center">
                <input
                  {...register("hireInterns")}
                  id="hireInterns"
                  type="checkbox"
                  // value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 focus:outline-none"
                />
                <label
                  htmlFor="hireInterns"
                  className="ms-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hire Interns
                </label>
              </div>
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center">
                <input
                  {...register("hireFreshers")}
                  id="hireFreshers"
                  type="checkbox"
                  // value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 focus:outline-none"
                />
                <label
                  htmlFor="hireFreshers"
                  className="ms-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hire Freshers
                </label>
              </div>
            </div> */}
          </div>
          <div className="space-y-2 w-full">
            <label
              htmlFor="companyDescription"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Company Description
            </label>
            <textarea
              name="companyDescription"
              id="companyDescription"
              {...register("companyDescription")}
              placeholder="Enter company description"
              className="flex h-40 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            {errors.companyDescription && (
              <span className="text-red-500 text-sm">
                {errors.companyDescription.message}
              </span>
            )}
          </div>
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            className="w-full mt-5"
          >
            Submit
          </LoadingButton>
        </form>
      </div>
    </main>
  );
};

export default NewJobFrom;
