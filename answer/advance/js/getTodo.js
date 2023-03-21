import { client } from "./microcms";
import { workTemplate, finishesTemplate } from "./template";

const workDom = document.getElementById("works");
const finishDom = document.getElementById("finishes");

// APIからtodo一覧を取得して画面に反映
export const getTodo = () => {
  client
    .get({
      endpoint: "todos",
    })
    .then((res) => {
      const { contents } = res;
      const works = contents.filter((content) => !content.deleteflag);
      const finishes = contents.filter((content) => content.deleteflag);
      const workFragment = document.createDocumentFragment();
      const finishesFragment = document.createDocumentFragment();

      // dom生成
      works.forEach((work) => {
        const parser = new DOMParser();
        const node = parser
          .parseFromString(workTemplate(work), "text/html")
          .querySelector(".flex");
        workFragment.appendChild(node);
      });

      finishes.forEach((finish) => {
        const parser = new DOMParser();
        const node = parser
          .parseFromString(finishesTemplate(finish), "text/html")
          .querySelector(".flex");
        finishesFragment.appendChild(node);
      });

      // dom削除
      while (workDom.firstChild) {
        workDom.removeChild(workDom.firstChild);
      }
      while (finishDom.firstChild) {
        finishDom.removeChild(finishDom.firstChild);
      }

      // dom追加
      workDom.appendChild(workFragment);
      finishDom.appendChild(finishesFragment);
    });
};
