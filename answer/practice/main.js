/**
 * SERVICE_ID, API_KEY, CONTENT_IDは各自で作成したパラメータを適用させてください。
 */

// microCMS初期設定
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: "SERVICE_ID", // サービスID
  apiKey: "API_KEY", // APIキー
});

// データ取得
client
  .get({
    endpoint: "todos",
  })
  .then((res) => console.log(res.contents))
  .catch((err) => console.error(err));

// データ追加
// client
//   .create({
//     endpoint: "todos",
//     content: {
//       task: "タスク追加",
//       deleteflag: false,
//     },
//   })
//   .then((res) => console.log(res.id))
//   .catch((err) => console.error(err));

// データ更新
// client
//   .update({
//     endpoint: "todos",
//     contentId: "CONTENT_ID",
//     content: {
//       task: "タスク追加(更新)",
//       deleteflag: true,
//     },
//   })
//   .then((res) => console.log(res.id))
//   .catch((err) => console.error(err));

// データ削除
// client
//   .delete({
//     endpoint: "todos",
//     contentId: "CONTENT_ID",
//   })
//   .then(() => console.log("delete!"))
//   .catch((err) => console.error(err));
