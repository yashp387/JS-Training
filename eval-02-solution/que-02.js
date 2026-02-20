// JS Order Processing Pipeline Promise + async/await + event loop
// awareness)
// Description
// You are given an array of order IDs.
// You must process orders in the following way:
// Fetch order details for all order IDs /orders/{id} (this must happen in
// parallel)
// After all orders are fetched, for each order:
// call /payments/{orderId} to get payment status

// Build a final summary object containing:
// total orders
// total paid orders
// total unpaid orders

// Constraints:
// Untitled
// Fetching orders must be parallel.
// Payment checks must run after all orders are fetched.
// Use async / await
// Use Promise.all for parallel execution
// Do not use callbacks
// Handle partial failures (if one payment API fails, continue others)
// Return a summary object

async function processOrders(orderIds) {
  try {
    const ordersPromises = orderIds.map((id) => {
      fetch(`/orders/${id}`).then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      });
    });

    const orders = await Promise.all(ordersPromises);

    const paymentPromises = orders.map((orderId) => {
      fetch(`/payments/${orderId}`).then((res) => {
        if (!res.ok) throw new Error("request failed");
        return res.json();
      });
    });

    const paymentResult = await Promise.allSettled(paymentPromises);

    let totalPaid = 0;
    let totalUnpaid = 0;

    paymentResult.forEach((result) => {
      if (result.status === "fulfilled") {
        if (result.value.status === "Paid") {
          totalPaid++;
        } else {
          totalUnpaid++;
        }
      } else {
        totalUnpaid++;
      }
      return {
        totalOrders: orders.length,
        totalPaid,
        totalUnpaid,
      };
    });
  } catch (error) {
    throw error;
  }
}
