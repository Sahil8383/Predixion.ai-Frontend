import TaskList from "../components/TaskList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="container">
        <h3 className="mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
          Task Management
        </h3>
        <TaskList />
      </div>
    </>
  );
}
