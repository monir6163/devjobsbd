"use client";
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
import LoadingButton from "./LoadingButton";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
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

  const onSubmit = async (data) => {
    let logo = data.companyLogo ? data.companyLogo[0] : "";
    let formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("companyLogo", logo);
    formData.append("companyUrl", data.companyUrl);
    formData.append("companyEmail", data.companyEmail);
    formData.append("companyLinkedin", data.companyLinkedin);
    formData.append("companyFacebook", data.companyFacebook);
    formData.append("companyCareersUrl", data.companyCareersUrl);
    formData.append("workType", data.workType);
    formData.append("officeLocation", data.officeLocation);
    formData.append("established", data.established);
    formData.append("totalEmployees", data.totalEmployees);
    formData.append("primaryTechStack", data.primaryTechStack);
    formData.append("salaryRange", data.salaryRange);
    formData.append("currentHiringRole", data.currentHiringRole);
    formData.append("hireInterns", data.hireInterns);
    formData.append("hireFreshers", data.hireFreshers);
    formData.append("companyDescription", data.companyDescription);
    try {
      const res = await fetch("/api/companies", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("Company added successfully");
      }
    } catch (error) {
      console.log(error);
    }
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Job Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="onsite">Onsite</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
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
            <div className="flex  gap-1 items-center">
              <FormField
                control={control}
                name="hireInterns"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="hire_interns">Hire Interns</Label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="hireFreshers"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor="hire_freshers">Hire freshers</Label>
                      </div>
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

            <LoadingButton
              className="w-full"
              type="submit"
              loading={isSubmitting}
            >
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default NewJobFrom;
