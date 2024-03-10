import { Button } from "./ui/button";

const Filterjob = () => {
  return (
    <aside className="md:w-[260px] p-4 sticky top-0 bg-background border rounded-lg h-fit">
      <form>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Filter Jobs</h3>
            <input
              type="text"
              placeholder="City, state, zip code or country"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <Button className="w-full">Filter Jobs</Button>
        </div>
      </form>
    </aside>
  );
};

export default Filterjob;
