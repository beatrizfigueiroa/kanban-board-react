import { Key } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import React from "react";
import plusIcon from "../../assets/plus-icon.svg";
import "./tasklist.css";

type propTypes = {
  title: string;
  taskState: any;
  onAddTask: Function;
  tasks: any[];
  onTaskUpdate: Function;
  onDeleteTask: Function;
};

export function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}: propTypes) {
  //button onclick
  const addTask = () => {
    //essa função addtask faz com que o "evento" onaddtask ocorra no app.tsx
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map(
          (task: { id: Key | null | undefined; title: any; state: any }) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                taskState={task.state}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
              />
            );
          }
        )}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}
