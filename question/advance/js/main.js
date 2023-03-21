import "../css/style.css";
import { getTodo } from "./getTodo";
import { addTodo } from "./addTodo";
import { updateTodo } from "./updateTodo";
import { deleteTodo } from "./deleteTodo";

document.addEventListener("DOMContentLoaded", () => {
  // 一覧取得
  getTodo();

  document.addEventListener("click", (e) => {
    const { classList } = e.target;

    // 追加
    if (classList.contains("add")) {
      alert("追加");
      addTodo();
    }

    // 更新
    else if (classList.contains("finish")) {
      alert("更新");
      updateTodo();
    }

    // 削除
    else if (classList.contains("delete")) {
      alert("削除");
      deleteTodo();
    }
  });
});
