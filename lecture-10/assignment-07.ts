// Assignment 7: Enums

// 1. Create an enum for payment states (INITIATED, SUCCESS, FAILED)
enum PaymentStatus {
  Initiated = "INITIATED",
  Success = "SUCCESS",
  Failed = "FAILED",
}

// 2. Write a function that accepts only this enum
function handlePayment(payment: PaymentStatus) {
  console.log("Payment:", payment);
  // throw an error which is Property 'Pending' does not exist on type 'typeof PaymentStatus'
}

handlePayment(PaymentStatus.Success);
// 3. Try passing an invalid value and observe the error
handlePayment(PaymentStatus.Pending);

// 4. Why enums are better than magic strings?
//  Enums are better because they prevent typos, provide type safety, and give a single source of truth, making code safer and easier to maintain.
