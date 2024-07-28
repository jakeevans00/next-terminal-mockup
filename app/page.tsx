import Navbar from "./_components/Navbar";
import Terminal from "@/app/_components/Terminal";
import FileTree from "@/app/_components/FileTree";
import fileTreeData from "@/app/_lib/FileTreeData";
import Linux from "@/app/_components/Linux";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div>
        <Linux />
        <FileTree data={fileTreeData} />
        <Terminal />
      </div>
    </div>
  );
}
