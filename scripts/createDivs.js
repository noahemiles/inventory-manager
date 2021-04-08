let content = document.getElementById("content");
localStorage.items = [1, 2, 3];
for (let index = 0; index < 100; index++) {
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", `item: ${index} `);
  itemDiv.addEventListener("click", testFunc);
  //itemDiv.attributes.item(2).value

  let deleteDiv = document.createElement("div");
  deleteDiv.innerHTML = "delete";
  let editDiv = document.createElement("div");
  editDiv.innerHTML = "edit";
  itemDiv.appendChild(deleteDiv);
  itemDiv.appendChild(editDiv);
  content.appendChild(itemDiv);
}

function testFunc() {
    let id = this.attributes.item(0).value;
    //alert(id);
    id.indexOf('focus') !== -1 ? id = id.slice(0, id.indexOf('focus')) : id += 'focus';
    this.setAttribute('id', id);
}
