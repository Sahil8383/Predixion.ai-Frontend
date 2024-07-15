'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="space-y-8">
      <TaskForm onTaskAdded={fetchTasks} />
      <ul className="space-y-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdated={fetchTasks} onTaskDeleted={fetchTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
