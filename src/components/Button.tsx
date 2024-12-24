type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};
export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`h-[45px] bg-[#473a2b] w-full text-white hover:bg-[#322618] rounded-[5px] ${
        buttonType === "secondary" ? "text-[14px] opacity-[0.85]" : ""
      }`}
    >
      {children}
    </button>
  );
}
