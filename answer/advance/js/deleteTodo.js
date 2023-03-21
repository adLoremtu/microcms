import { client } from "./microcms";
import { getTodo } from "./getTodo";

// APIにてデータ削除
export const deleteApi = (id) => {
  client
    .delete({
      endpoint: "todos",
      contentId: id,
    })
    .then((res) => {
      alert("削除成功");
      getTodo();
    })
    .catch((err) => {
      console.log(err);
      alert("削除失敗");
    });
};
