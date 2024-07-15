
import TaskList from "../components/TaskList";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="my-4">Task Manager</h1>
        <TaskList />
      </div>
    </>
  );
}
