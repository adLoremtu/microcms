import { client } from "./microcms";
import { getTodo } from "./getTodo";

// APIにてデータ追加
export const addTodo = (text) => {
  client
    .create({
      endpoint: "todos",
      content: {
        task: text,
        deleteflag: false,
      },
    })
    .then((res) => {
      alert("todoタスクの生成に成功しました。");
      getTodo();
    })
    .catch((err) => {
      console.log(err);
      alert("todoタスクの生成に失敗しました。");
    });
};