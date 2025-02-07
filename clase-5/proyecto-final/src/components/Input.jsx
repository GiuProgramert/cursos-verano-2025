export default function Input({ variant = "primary", placeholder, className }) {
  const variantClassName =
    variant === "primary" ? "border border-[#8A8A8A]" : "bg-white";

  return (
    <input
      type="text"
      className={
        "placeholder:text-[#8A8A8A] py-6 px-7 w-full" + " " + variantClassName + " " + className
      }
      placeholder={placeholder}
    />
  );
}
