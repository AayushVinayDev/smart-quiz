import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] flex flex-col px-[25px] py-5">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Login</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
