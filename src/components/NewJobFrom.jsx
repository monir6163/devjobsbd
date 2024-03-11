"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { companiesShema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const NewJobFrom = () => {
  const form = useForm({
    resolver: zodResolver(companiesShema),
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("companyLogo", data.companyLogo[0]);
    formData.append("companyUrl", data.companyUrl);
    formData.append("companyEmail", data.companyEmail);
    formData.append("companyLinkedin", data.companyLinkedin);
    formData.append("companyFacebook", data.companyFacebook);
    formData.append("companyCareersUrl", data.companyCareersUrl);
    formData.append("workType", data.workType);
    console.log(data);
  };

  return (
    <main className="max-w-3xl m-auto my-10 space-y-10">
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
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyName}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyLogo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Company Logo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          field.onChange(e.target.files);
                        }}
                        value={field.companyLogo}
                        ref={field.ref}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="companyUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Company Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyUrl}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyEmail"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Company Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyEmail}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="companyLinkedin"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Likedin Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyLinkedin}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyFacebook"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Facebook Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyFacebook}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="companyCareersUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Apply Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.companyCareersUrl}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="workType"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Work Type</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        value={field.workType}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        className="h-10 w-full appearance-none truncate rounded-md border border-input bg-background py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select Work Type</option>
                        <option value="onsite">Onsite</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="remote">Remote</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="officeLocation"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.officeLocation}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="established"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Established</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.established}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="totalEmployees"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Total Employees</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.totalEmployees}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="primaryTechStack"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Primary Tech Stack</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.primaryTechStack}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <FormField
                control={control}
                name="salaryRange"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Salary Range</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.salaryRange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="currentHiringRole"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Current Hiring Role</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. backend developer"
                        {...field}
                        value={field.currentHiringRole}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="companyDescription"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      value={field.companyDescription}
                      placeholder="Type your message here."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-2/4 mx-auto">
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default NewJobFrom;
