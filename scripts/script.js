function listElement(name, price) {
    return `<li>
      <span class="edit">&#9998;</span>
      <span class="remove">&#128465</span>
      <span class="name" id="name">${name}</span>
      <input type="text" style="display: none;"/>
      <span class="price">${price}</span>
      <input type="text" style="display: none;"/>
    </li>`;
}

function addExpense() {
    const itemName = $("#itemName");
    const itemPrice = $("#itemPrice");
    const expensesList = $("#expensesList");

    if (itemName.val().trim() === "" || itemPrice.val().trim() === "") 
        return ("Please type valid values");
    
    const listItem = $(listElement(itemName.val(),itemPrice.val()));

    expensesList.append(listItem)
    itemName.val("")
    itemPrice.val("")
}

$(document).ready(function () {
    const itemAdd = $("#itemAdd");
  
    // Click event for the add button
    itemAdd.click(addExpense);
  
    // Keyup event for the todo input field
    $("#itemName, #itemPrice").keyup(function (event) {
      if (event.keyCode === 13) {
        addExpense();
      }
    });
  });
