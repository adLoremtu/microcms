import { getTodoThenFunction } from "./getTodoThenFunction";

// =======================
// === microCMS初期設定 ===
// =======================
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: "todo-application", // サービスID
  apiKey: "E4MyAB1gflcNC7UcNqbbOKwHPkieSBfQbClj", // APIキー
});

// =======================
// === APIでデータを取得 ===
// =======================
const getTodo = () => {
  client
    .get({
      endpoint: "todos",
    })
    .then((res) => {
      getTodoThenFunction(res);
    })
    .catch((e) => {
      alert("コンテンツの取得に失敗しました。");
      console.log(e);
    });
};

// =======================
// === APIでデータを追加 ===
// =======================
const addTodo = (task, optional) => {
  const content =
    optional === ""
      ? {
          task,
          completeFlag: false,
        }
      : {
          task,
          completeFlag: false,
          optional: Number(optional),
        };

  client
    .create({
      endpoint: "todos",
      content,
    })
    .then(() => {
      alert("todoタスクの生成に成功しました。");
      getTodo();
    })
    .catch((err) => {
      alert("todoタスクの生成に失敗しました。");
      console.log(err);
    });
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
      alert("更新");
      updateTodo(id);
    }

    // 削除
    else if (classList.contains("delete")) {
      alert("削除");
      deleteTodo(id);
    }
  });
});
