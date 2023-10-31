/**@jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { SerializedStyles } from '@emotion/utils';
import { createTodoImage } from "./src/img/create-todo.svg";

export const App = () => {

  const createButtonStyle: SerializedStyles = css`
    position:fixed;
  `;


  return (
    <>
      <img css={createButtonStyle} src={createTodoImage} alt="" />
    </>
  );
};