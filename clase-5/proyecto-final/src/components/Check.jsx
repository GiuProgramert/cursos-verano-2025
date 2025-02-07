import { Check as CheckIcon } from "lucide-react";

export default function Check({ id, label }) {
  return (
    <div className="flex gap-2">
      <input className="peer hidden" type="checkbox" id={id} />
      <label htmlFor={id} className="w-6 h-6 bg-white border-[3px] border-black grid place-content-center text-white  transition duration-200 peer-checked:bg-black">
        <CheckIcon />
      </label>
      <label htmlFor={id} className="text-[#484848]">{label}</label>
    </div>
  );
}
