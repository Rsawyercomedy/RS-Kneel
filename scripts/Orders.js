import { getOrders, addCustomOrder } from "./database.js"
// creating our orders function
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
           addCustomOrder()
    }
  }   
)

const buildOrderListItem = (order) => {
    return `<li>
        Order ${order.id} was placed on ${order.timestamp}
    </li>`
}
// exporting it
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()
// sying orders has the same value of getOrders() and its value thats returned is ana array
    let html = "<ul>"
     
    const listItems = orders.map(order => buildOrderListItem(order))
    
    html += listItems.join("")
    html += "</ul>"
     
    return html
}

