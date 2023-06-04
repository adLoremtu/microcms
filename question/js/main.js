import { getTodoThenFunction } from "./getTodoThenFunction";

// =======================
// === microCMS初期設定 ===
// =======================

// =======================
// === APIでデータを取得 ===
// =======================
const getTodo = () => {
  alert("初期表示時にTodoリストを表示");

  // APIでコンテンツ取得後、Todoリストを画面に作成するのが面倒な方はgetTodoThenFunction(res)をthen以降の処理として入れれば動きます。
  // getTodoThenFunction(res);
};

// =======================
// === APIでデータを追加 ===
// =======================
const addTodo = (text, optional) => {
  alert("Addボタンが押されました。");
};

// =======================
// === APIでデータを更新 ===
// =======================
const updateTodo = (id) => {
  alert("Finishボタンが押されました。");
};

// =======================
// === APIでデータを削除 ===
// =======================
const deleteTodo = (id) => {
  alert("Deleteボタンが押されました。");
};

document.addEventListener("DOMContentLoaded", () => {
  // 一覧取得
  getTodo();

  document.addEventListener("click", (e) => {
    const { classList } = e.target;
    const id = e.target.getAttribute("data-id");

    // 追加
    if (classList.contains("add")) {
      // 入力欄に入力された文字を取得
      const task = document.querySelector("input[name=input-task]").value;
      const optional = document.querySelector(
        "input[name=input-optional]"
      ).value;
      if (task === "") return;

      addTodo(task, optional);
    }

    // 更新
    else if (classList.contains("finish")) {
      updateTodo(id);
    }

    // 削除
    else if (classList.contains("delete")) {
      deleteTodo(id);
    }
  });
});
