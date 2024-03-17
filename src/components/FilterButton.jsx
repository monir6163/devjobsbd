"use client";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
const FilterButton = (props) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={props.disabled || pending} type="submit">
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {props.children}
      </span>
    </Button>
  );
};

export default FilterButton;
