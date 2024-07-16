"use client";

import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import axiosClient from "@/lib/axiosClient";
import TaskItemSkeleton from "./TaskItemSkeleton";
import { Input } from "./ui/input";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get(`/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <TaskForm onTaskAdded={fetchTasks} />
      <div className="w-full flex justify-end ">
        {tasks.length > 0 && (
          <Input
            placeholder="Search tasks..."
            className="w-[400px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
      </div>
      <ul className="space-y-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <TaskItemSkeleton key={index} />
            ))
          : filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onTaskUpdated={fetchTasks}
                onTaskDeleted={fetchTasks}
              />
            ))}
      </ul>
    </div>
  );
};

export default TaskList;
