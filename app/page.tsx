import Navbar from "./components/Navbar";
import Terminal from "@/app/components/Terminal";
import FileTree from "./components/FileTree";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar/>
      <div className="">
        <FileTree />
        <Terminal />
      </div>
    </div>
  );
}
