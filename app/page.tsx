import Navbar from "./components/Navbar";
import Terminal from "@/app/components/Terminal"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>

      <main className="p-14">
              /
        <p>├── bin</p>
        <p>├── dev</p>
        <p>├── etc</p>
        <p>├── home</p>
        <p>├── lib</p>
        <p>├── media</p>
        <p>├── opt</p>
        <p>├── root</p>
        <p>├── usr</p>
        <p>└── var</p>
      </main>

      <footer className="w-full absolute bottom-0  bg-gray-900 text-yellow-300">
        <Terminal />
      </footer>
    </div>
  );
}
