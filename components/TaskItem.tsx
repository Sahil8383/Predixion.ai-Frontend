"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner"
import axiosClient from "@/lib/axiosClient";

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
  onTaskUpdated: () => void;
  onTaskDeleted: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onTaskUpdated,
  onTaskDeleted,
}) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus);
    try {
      await axiosClient.patch(`/tasks/${task.id}`, {
        ...task,
        status: newStatus,
      });
      onTaskUpdated();
      toast("Task has been updated.")
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/tasks/${task.id}`);
      onTaskDeleted();
        toast("Task has been deleted.")
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <li className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">{task.title}</h5>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="flex items-center space-x-4">
        <Select onValueChange={handleStatusChange} value={status}>
            <SelectTrigger className="w-[180px]">
              <SelectValue>{status}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todo">Todo</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
