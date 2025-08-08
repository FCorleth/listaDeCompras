const input = document.getElementById("itemInput");
const button = document.getElementById("addButton");
const list = document.getElementById("itemsList");
const listItem = document.querySelector(".item");

button.onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  addItem(text);
  input.value = "";
};

const createElements = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const input = document.createElement("input");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const img = document.createElement("img");

  return { li, span, input, div, button, img };
};

const addAtributtes = (text) => {
  const { li, span, input, div, button, img } = createElements();

  img.src = "public/Frame.svg";
  img.alt = "Excluir item";
  img.width = 20;
  img.height = 20;
  span.innerText = text;
  span.classList.add("item-text");

  input.type = "checkbox";
  input.classList.add("item-checkbox");

  div.classList.add("item-content");

  li.classList.add("item");

  button.classList.add("delete-button");

  return { li, span, input, div, button, img };
};

const hideItem = (listItem) => {
  listItem.classList.add("hidden");
};

const addItem = (text) => {
  const { li, span, input, div, button, img } = addAtributtes(text);

  button.onclick = () => hideItem(li);

  button.append(img);
  div.append(input);
  div.append(span);
  li.append(div);
  li.append(button);
  list.append(li);
};

document.querySelectorAll(".delete-button").forEach((btn) => {
  btn.onclick = () => {
    const li = btn.closest(".item");
    hideItem(li);
  };
});
