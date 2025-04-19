import { motion } from "framer-motion";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GripVertical } from "lucide-react";
import Swal from 'sweetalert2';

const initialTasks = {
    "To Do": [
        { id: 1, title: "Estudar React" },
        { id: 2, title: "Ler documentação do Tailwind" },
    ],
    "Doing": [
        { id: 3, title: "Criar taskboard" },
    ],
    "Done": [
        { id: 4, title: "Configurar projeto" },
    ],
};

const colors = {
    "To Do": "bg-pink-200",
    "Doing": "bg-yellow-200",
    "Done": "bg-green-200",
};

export default function Taskboard() {
    const [tasks, setTasks] = useState(initialTasks);
    const [draggedTask, setDraggedTask] = useState(null);

    const handleDragStart = (task, fromColumn) => {
        setDraggedTask({ task, fromColumn });
    };

    const handleDrop = (toColumn) => {
        if (!draggedTask) return;

        const { task, fromColumn } = draggedTask;

        if (fromColumn === toColumn) return;

        setTasks((prev) => {
            const newTasks = { ...prev };
            newTasks[fromColumn] = newTasks[fromColumn].filter((t) => t.id !== task.id);
            newTasks[toColumn] = [...newTasks[toColumn], task];
            return newTasks;
        });

        setDraggedTask(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            {Object.keys(tasks).map((column) => (
                <div
                    key={column}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(column)}
                    className={`rounded-2xl p-4 shadow-lg ${colors[column]}`}
                >
                    <h2 className="text-xl font-bold mb-4 text-gray-800">{column}</h2>
                    <div className="space-y-3">
                        {tasks[column].map((task) => (
                            <motion.div
                                key={task.id}
                                draggable
                                onDragStart={() => handleDragStart(task, column)}
                                whileHover={{ scale: 1.03 }}
                                onClick={() => {
                                    Swal.fire({
                                        title: task.title,
                                        text: '',
                                        icon: 'info',
                                        confirmButtonText: 'Fechar',
                                        confirmButtonColor: '#6366F1', // roxinho fofo
                                        background: '#fdf4ff',         // fundo lilás claro
                                        color: '#333',
                                    });
                                }}
                            >
                                <Card className="flex items-center justify-between p-4 cursor-grab">
                                    <CardContent className="p-0 m-0 flex-grow">
                                        <p>{task.title}</p>
                                    </CardContent>
                                    <GripVertical className="text-gray-400" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
