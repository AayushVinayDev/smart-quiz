import Footer from "./Footer";
import Header from "./Header";
import HeaderGrid from "./HeaderGrid";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="font-sans bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col">
      <Header />
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <HeaderGrid />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
