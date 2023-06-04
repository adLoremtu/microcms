import { client } from "./microcms";
import { getTodo } from "./getTodo";

// APIにてデータ更新
export const updateTodo = (id) => {
  client
    .update({
      endpoint: "todos",
      contentId: id,
      content: {
        deleteflag: true,
      },
    })
    .then((res) => {
      alert("更新成功");
      getTodo();
    })
    .catch((err) => {
      console.log(err);
      alert("更新失敗");
    });
};