export default function Button({ children }) {
  return (
    <button className="py-4 px-20 bg-black rounded-[10px] text-white text-base">
      {children}
    </button>
  );
}
