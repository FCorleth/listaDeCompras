const input = document.getElementById("itemInput");
const button = document.getElementById("addButton");
const list = document.getElementById("itemsList");

let item = "";

input.onchange = (event) => {
  item = event.target.value;
};

button.onclick = () => {
  if (item.trim()) {
    addItem(item);
    input.value = "";
    item = "";
  }
};

const addItem = (item) => {
  const newItemList = document.createElement("li");
  const listContent = document.createElement("span");
  const listContentInput = document.createElement("input");
  const listContentDiv = document.createElement("div");
  const deleteButton = document.createElement("button");
  const deleteButtonIcon = document.createElement("img");
  deleteButtonIcon.src = "public/Frame.svg";
  deleteButtonIcon.alt = "Excluir item";
  deleteButtonIcon.width = 20;
  deleteButtonIcon.height = 20;
  deleteButton.append(deleteButtonIcon);
  listContent.innerText = item;
  listContent.classList.add("item-text");
  listContentInput.type = "checkbox";
  listContentInput.classList.add("item-checkbox");
  listContentDiv.classList.add("item-content");
  newItemList.classList.add("item");
  deleteButton.classList.add("delete-button");
  listContentDiv.append(listContentInput);
  listContentDiv.append(listContent);
  newItemList.append(listContentDiv);
  newItemList.append(deleteButton);
  list.append(newItemList);
};
