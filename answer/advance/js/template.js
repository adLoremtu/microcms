export const workTemplate = (info) => {
  return `<li class="flex">
  <p>${info.task}</p>
  <button class="finish" data-id=${info.id}>作業完了</button>
</li>`;
};

export const finishesTemplate = (info) => {
  return `<li class="flex">
  <p>${info.task}</p>
  <button class="delete" data-id=${info.id}>削除</button>
</li>`;
};