"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import axiosClient from "@/lib/axiosClient";

interface TaskFormProps {
  onTaskAdded: () => void;
}
 
const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosClient.post(`/tasks`, {
        title,
        description,
        status,
      });
      setTitle("");
      setDescription("");
      setStatus("Todo");
      onTaskAdded();
      toast("Task has been added.");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center items-start w-[500px]">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e: any) => setDescription(e.target.value)}
        required
      />
      <Select onValueChange={(e:any) => setStatus(e) } value={status}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Todo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Todo">Todo</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Done">Done</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
