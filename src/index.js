  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      buildingToDo(e.target["new-task-description"].value);
      document.querySelector('form').reset()
    });
  });
  
  function buildingToDo(todo) {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = "x";
    li.style.color = "red"
    li.textContent = `${todo} `;
    li.appendChild(button);
    button.addEventListener("click", handleDetele);
    document.querySelector("#list").appendChild(li);
    document.querySelector('form').reset();
  }
  
  function handleDetele(e) {
    e.target.parentNode.remove();
  }