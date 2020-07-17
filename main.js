var todoItem = document.getElementById("todo");
var addTodo = document.getElementById("add-todo");
var errorMsg = document.getElementById("error");
var myItems = document.getElementById('myUL')

addTodo.addEventListener("click", () => {
 var listItem = document.createElement('li') 
 
 var txt = document.createElement('p') 

 txt.innerHTML = todoItem.value;
 listItem.appendChild(txt)
//  var list = listItem.innerHTML = todoItem.value;
  myItems.append(listItem)

  var span = document.createElement('span')
  span.innerText = ('X')
  listItem.appendChild(span)
  var check = document.createElement('span')
  check.innerText = ('Done')
  check.style.color = 'green'
  listItem.prepend(check)

  check.addEventListener('click', () => {
    txt.className = 'checked'
  })

  span.addEventListener('click', () => {
    listItem.style.display = 'none'
  })
  todoItem.value = null;
});

