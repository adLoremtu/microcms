import { workTemplate, finishesTemplate } from "./template";

// APIからtodo一覧を取得して画面に反映
export const getTodoThenFunction = (res) => {
  const { contents } = res;
  const todoListCurrentElement = document.querySelector(".current-list");
  const todoListCompleteElement = document.querySelector(".complete-list");
  const todoItemTemplate = document.querySelector(".template");
  const works = contents.filter((content) => !content.completeFlag);
  const finishes = contents.filter((content) => content.completeFlag);

  if (
    todoListCurrentElement !== null &&
    todoListCompleteElement !== null &&
    todoItemTemplate !== null
  ) {
    // dom削除
    while (todoListCurrentElement.firstChild) {
      todoListCurrentElement.removeChild(todoListCurrentElement.firstChild);
    }
    while (todoListCompleteElement.firstChild) {
      todoListCompleteElement.removeChild(todoListCompleteElement.firstChild);
    }

    // dom生成
    works.forEach((work) => {
      const clone = document.importNode(todoItemTemplate.content, true);
      const task = clone.querySelector(".task");
      const optional = clone.querySelector(".optional");
      const button = clone.querySelector("button");

      task.textContent = work.task;
      optional.textContent = work.optional ? work.optional : "";
      button.textContent = "Finish";
      button.setAttribute("data-id", work.id);
      button.classList.add("finish");

      todoListCurrentElement.appendChild(clone);
    });

    finishes.forEach((finish) => {
      const clone = document.importNode(todoItemTemplate.content, true);
      const task = clone.querySelector(".task");
      const optional = clone.querySelector(".optional");
      const button = clone.querySelector("button");

      task.textContent = finish.task;
      optional.textContent = finish.optional ? finish.optional : "";
      button.textContent = "Delete";
      button.setAttribute("data-id", finish.id);
      button.classList.add("delete");

      todoListCompleteElement.appendChild(clone);
    });

    // 入力欄の中身をを削除
    const task = document.querySelector("input[name=input-task]");
    const optional = document.querySelector("input[name=input-optional]");

    task.value = "";
    optional.value = "";
  }
};
