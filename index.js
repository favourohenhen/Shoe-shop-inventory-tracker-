const inventoryList = document.getElementById("inventory-list")
console.log(inventoryList)

const inventory = [
  {
    name: "Classic Low-Top",
    sku: "CLS-WHT-40",
    category: "Sneakers",
    size: 40,
    colour: "White",
    price: 60000,
    quantity: 8
  },
  {
    name: "Classic Low-Top",
    sku: "CLS-WHT-41",
    category: "Sneakers",
    size: 41,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 3
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 1
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 5
  },
  {
    name: "Retro Runner",
    sku: "RTR-GRY-42",
    category: "Sneakers",
    size: 42,
    colour: "Grey",
    price: 70000,
    quantity: 0
  }
]


let rows = "";

for (let i = 0; i < inventory.length; i++) {
  
  let statusQuantity = inventory[i].quantity
  let status = ""
  let statusClass = "";
  if (statusQuantity === 0) {
    let outStock = "Out of stock"
    status = outStock
    statusClass = "status-out-of-stock"
    console.log(statusClass)

  } else if (statusQuantity > 3) {
    let inStock = "In stock"
    status = inStock
    statusClass = "status-in-stock"
  } else {
    let lowStock = "Low stock"
    status = lowStock
    statusClass= "status-low-stock"
   ;
  }
  console.log(status)


  rows = rows + `
    <tr>
     <td>
        <input
          type="checkbox"
          value="${inventory[i].sku}"
          aria-label="Select ${inventory[i].name}"
        >
      </td>
      <td>${inventory[i].name}</td>
      <td>${inventory[i].sku}</td>
      <td>${inventory[i].category}</td>
      <td>${inventory[i].size}</td>
      <td>${inventory[i].colour}</td>
      <td>₦${inventory[i].price}</td>
      <td>${inventory[i].quantity}</td>
      <td><span class="${statusClass}">${status}</span></td>
    
    
    </tr>
  `;



}


inventoryList.innerHTML = rows;



