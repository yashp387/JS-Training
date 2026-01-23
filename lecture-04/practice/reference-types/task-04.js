/* Goal: Transform an array of objects into a grouped object (Dictionary/Map). 

Requirements:
Convert an array of orders into an object where keys are status and values are arrays of orders.
Use .reduce().

const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "shipped" },
  { id: 3, status: "pending" }
];  

Expected Output:
{
  pending: [{ id: 1... }, { id: 3... }],
  shipped: [{ id: 2... }]
}
*/

const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "shipped" },
  { id: 3, status: "pending" }
];  

const groupedOrders = orders.reduce((acc, order) => {
    const status = order.status;

    if(!acc[status]) {
        acc[status] = [];
    }

    acc[status].push(order);
    return acc;
}, {}); 

console.log(groupedOrders);