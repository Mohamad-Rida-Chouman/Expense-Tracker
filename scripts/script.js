function listElement(name, price) {
    return `<li>
      <span class="edit">&#9998;</span>
      <span class="remove">&#128465;</span>
      <span class="name">${name}</span>
      <input type="text" style="display: none;" class="edit-name-input"/>
      <span class="price">${price}</span>
      <input type="text" style="display: none;" class="edit-price-input"/>
    </li>`;
  }
  
  function addExpense() {
    const itemName = $("#itemName");
    const itemPrice = $("#itemPrice");
    const expensesList = $("#expensesList");
  
    if (itemName.val().trim() === "" || itemPrice.val().trim() === "") {
      alert("Please type valid values");
      return;
    }
  
    const listItem = $(listElement(itemName.val(), itemPrice.val()));
  
    listItem.find(".remove").click(function () {
      listItem.remove();
    });
  
    expensesList.append(listItem);
    itemName.val("");
    itemPrice.val("");
  }
  

  
  $(document).ready(function () {
    const itemAdd = $("#itemAdd");
  
    itemAdd.click(addExpense);
  
    $("#itemName, #itemPrice").keyup(function (event) {
      if (event.keyCode === 13) {
        addExpense();
      }
    });
  });
  