let form = document.querySelector("form");
let arr;
let tbody = document.querySelector("tbody");
if (localStorage.getItem("data")) {
  arr = JSON.parse(localStorage.getItem("data"));
  display(arr);
} else {
  arr = [
    {
      "grocery name": "Rice",
      priority: "High",
      quantity: 5,
      price: 10,
    },
    {
      "grocery name": "Wheat",
      priority: "Low",
      quantity: 50,
      price: 10,
    },
    {
      "grocery name": "Milk",
      priority: "Medium",
      quantity: 15,
      price: 60,
    },
    {
      "grocery name": "Dal",
      priority: "Medium",
      quantity: 12,
      price: 17,
    },
    {
      "grocery name": "Biscuits",
      priority: "High",
      quantity: 1,
      price: 10,
    },
    {
      "grocery name": "Milk",
      priority: "Low",
      quantity: 25,
      price: 60,
    },
    {
      "grocery name": "Wheat",
      priority: "Low",
      quantity: 50,
      price: 10,
    },
  ];
  localStorage.setItem("data", JSON.stringify(arr));
  display(arr);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    "grocery name": form.elements[0].value,
    priority: form.elements[1].value,
    quantity: form.elements[2].value,
    price: form.elements[3].value,
  };
  arr.push(obj);
  console.log(obj);
  localStorage.setItem("data", JSON.stringify(arr));
  display(arr);
  for (i = 0; i < 4; i++) {
    form.elements[i].value = "";
  }
});

function display(arr) {
  let res = "";
  for (i = 0; i < arr.length; i++) {
    let { "grocery name": grocery, priority, quantity, price } = arr[i];
    let clc = "low";
    if (priority == "High") clc = "high";
    else if (priority == "Medium") clc = "medium";
    res += ` <tr class=${clc}>
                        <th>${i + 1}</th>
                        <td>${grocery}</td>
                        <td>${priority}</td>
                        <td>${quantity}</td>
                        <td class="price">${price}$</td>
                        <td class="price">${price * quantity}$</td>
                        <td class="del">X</td>
                    </tr>`;
  }
  tbody.innerHTML = res;
  deleteItem();
}
// console.log(JSON.parse(localStorage.data)[0]["category"]);
// localStorage.clear();

function deleteItem() {
  let rows = document.querySelectorAll("tr .del");
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function (e) {
      console.log(rows[i], arr[i]);
      arr.splice(i, 1);
      display(arr);
      localStorage.setItem("data", JSON.stringify(arr));
    });
  }

  // console.log(rows);
}
