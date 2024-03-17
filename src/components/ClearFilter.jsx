"use client";

import { Button } from "./ui/button";

const ClearFilter = () => {
  return (
    <Button
      className="w-full"
      variant="secondary"
      type="button"
      onClick={() => {
        window.location.href = "/companies";
      }}
    >
      Clear Filter
    </Button>
  );
};

export default ClearFilter;
