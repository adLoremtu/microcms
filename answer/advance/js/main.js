import "../css/style.css";
import { getTodo } from "./getTodo";
import { addTodo } from "./addTodo";
import { updateTodo } from "./updateTodo";
import { deleteApi } from "./deleteTodo";

document.addEventListener("DOMContentLoaded", () => {
  // 一覧取得
  getTodo();

  document.addEventListener("click", (e) => {
    const { classList } = e.target;
    const id = e.target.getAttribute("data-id");

    // 追加
    if (classList.contains("add")) {
      alert("追加");
      const text = document.querySelector("input[name=input]").value;
      if (text === "") return;
      addTodo(text);
    }

    // 更新
    else if (classList.contains("finish")) {
      alert("更新");
      updateTodo(id);
    }

    // 削除
    else if (classList.contains("delete")) {
      alert("削除");
      deleteApi(id);
    }
  });
});
