import Navbar from "./_components/Navbar";
import Terminal from "@/app/_components/Terminal";
import FileTree from "./_components/FileTree";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div>
        <FileTree />
        <Terminal />
      </div>
    </div>
  );
}
