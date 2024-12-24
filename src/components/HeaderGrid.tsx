import Counter from "./Counter";

export default function HeaderGrid() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#f1f5ed] border-b border-black/[0.08] flex justify-between items-center px-4">
      <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />
      <Counter />
    </header>
  );
}
