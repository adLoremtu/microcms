import { getTodoThenFunction } from "./getTodoThenFunction";

// =======================
// === microCMS初期設定 ===
// =======================
// サービスIDとAPIキーはみなさんが所有するIDとキーを設定してください。
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: "SERVICE_ID", // サービスID
  apiKey: "API_KEY", // APIキー
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

// =======================
// === APIでデータを更新 ===
// =======================
const updateTodo = (id) => {
  client
    .update({
      endpoint: "todos",
      contentId: id,
      content: {
        completeFlag: true,
      },
    })
    .then(() => {
      alert("todoタスクの更新に成功しました。");
      getTodo();
    })
    .catch((err) => {
      alert("todoタスクの更新に失敗しました。");
      console.log(err);
    });
};

// =======================
// === APIでデータを削除 ===
// =======================
const deleteTodo = (id) => {
  client
    .delete({
      endpoint: "todos",
      contentId: id,
    })
    .then(() => {
      alert("todoタスクの削除に成功しました。");
      getTodo();
    })
    .catch((err) => {
      alert("todoタスクの削除に失敗しました。");
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
      updateTodo(id);
    }

    // 削除
    else if (classList.contains("delete")) {
      deleteTodo(id);
    }
  });
});
