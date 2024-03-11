import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

const Filterjob = () => {
  return (
    <aside className="md:w-[260px] p-4 sticky top-0 bg-background border rounded-lg h-fit">
      <form>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="job_type"
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Job Type
            </Label>
            <Select id="job_type">
              <SelectTrigger>
                <SelectValue placeholder="Select Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onsite">Onsite</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="tech_stack"
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              Tech Stack
            </Label>

            <Select id="tech_stack">
              <SelectTrigger>
                <SelectValue placeholder="Select Tech Stack" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="onsite">Onsite</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="hire_interns" />
            <Label htmlFor="hire_interns">Hire Interns</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="hire_freshers" />
            <Label htmlFor="hire_freshers">Hire freshers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Button className="w-full">Filter Jobs</Button>
            <Button className="w-full" variant="secondary">
              Clear Filter
            </Button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default Filterjob;
