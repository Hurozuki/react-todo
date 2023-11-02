/**@jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { SerializedStyles } from '@emotion/utils';
import { useState } from "react";
import { Task } from "../types/tasks";
import createTodoImage from "../img/create-todo.svg";
import deleteTodoImage from "../img/delete-todo.svg";

export const App = () => {

  // タスク
  const [tasks, setTasks] = useState<Task[]>([]);


  function createTask() {
    const newTask: Task = {
      name: null,
      checked: false,
    }
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(index: number) {
    setTasks((prevTasks) =>
      prevTasks.filter((task, i) => i !== index)
    );
  }


  function taskCheck(index: number): void {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        index === i ? { ...task, checked: !task.checked } : task
      )
    );
  }


  function changeTaskName(index: number, newName: string): void {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        index === i ? { ...task, name: newName } : task
      )
    );
  }



  // 新規作成ボタン
  const createButtonStyle: SerializedStyles = css`
    position:fixed;
    bottom:2em;
    right:2em;
    width:3em;
    height:3em;
    cursor:pointer;
  `;

  const mainTasks: SerializedStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const taskDiv: SerializedStyles = css`
    background-color:black;
    height:3em;
    width:15em;
    display: flex;
    align-items: center;
    margin-bottom:0.3em;
    border-radius:0.2em;
    justify-content: space-evenly;
  `;


  const taskNameInput: SerializedStyles = css`
    outline:none;
    background-color:black;
    color:white;
    border:none;
    width:11em;
  `;

  const deleteButtonStyle: SerializedStyles = css`
    width:1.7em;
    height:1.7em;
    cursor:pointer;
    background-color:white;
    border-radius:0.5em;
  `;



  return (
    <>
      <main css={mainTasks}>
        {tasks.map((task, index) => (
          <div css={taskDiv}>
            <input type="checkbox" checked={task.checked} onChange={() => taskCheck(index)} />
            <input type="text" value={task.name || ""} css={taskNameInput} onChange={(e) => changeTaskName(index, e.target.value)} />
            <img css={deleteButtonStyle} src={deleteTodoImage} alt="" onClick={() => deleteTask(index)} />
          </div>
        ))}
        <img css={createButtonStyle} src={createTodoImage} alt="" onClick={createTask} />
      </main>
    </>
  );
};