
// Elements
const input   = document.getElementById("todoInput");
const addBtn  = document.getElementById("addbtn");
const list    = document.getElementById("todoList");
const count   = document.getElementById("count");
 
// Update counter
function updateCount() {
  const total = list.children.length;
  count.innerText = "Total: " + total;
}
 
// Add todo
function addTodo() {
  const text = input.value.trim();
  if (text === "") {
    alert("কিছু লেখো!");
    return;
  }
 
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button class="delete">Delete</button>
  `;
 
  // Click on text - mark done
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("done");
  });
 
  // Delete button
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    updateCount();
  });
 
  list.appendChild(li);
  input.value = "";
  updateCount();
}
 
// Events
addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});
 
console.log("Todo App loaded");