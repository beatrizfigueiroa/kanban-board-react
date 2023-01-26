import React, { useState } from "react";
import "./task-item.css";

type taskItemTypes = {
  id?: any;
  title?: string;
  taskState?: string;
  onTaskUpdate?: Function;
  onDeleteTask?: Function;
};

export function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask,
}: taskItemTypes) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event: any) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate?.(id, newTitle, taskState);
  };

  const onKeyPress = (event: any) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle?.length === 0) {
        onDeleteTask?.(id);
      }
    }
  };

  const onTaskStateChange = (event: any) => {
    onTaskUpdate?.(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}
