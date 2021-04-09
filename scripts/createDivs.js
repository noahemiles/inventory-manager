let content = document.getElementById("content");

//dynamically add items to page
for (let index = 0; index < 100; index++) {
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", `item: ${index} `);
  itemDiv.addEventListener("click", focusDiv);

  let deleteDiv = document.createElement("div");
  deleteDiv.innerHTML = "delete";
  deleteDiv.addEventListener("copy", deleteFunc);

  let editDiv = document.createElement("div");
  editDiv.innerHTML = "edit";


  itemDiv.appendChild(deleteDiv);
  itemDiv.appendChild(editDiv);
  content.appendChild(itemDiv);
}

function focusDiv() {
    let id = this.attributes.item(0).value;
    id.indexOf('focus') !== -1 ? id = id.slice(0, id.indexOf('focus')) : id += 'focus';
    this.setAttribute('id', id);
    this.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
}

function deleteFunc(){
  alert(this);
}
