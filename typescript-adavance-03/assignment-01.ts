// 1. Create a PaymentState discriminated union.
// 2. Add exhaustive checking to handle all states.
// 3. Create a generic ApiResponse<T> for products.
// 4. Write a type guard to check if response is success.

type PaymentState =
  | { status: "pending" }
  | { status: "success"; transactionId: string }
  | { status: "failed"; error: string };

function handlePayment(state: PaymentState) {
  switch (state.status) {
    case "pending":
      console.log("Payment is pending");
      break;
    case "success":
      console.log("Transaction:", state.transactionId);
      break;
    case "failed":
      console.log("Error:", state.error);
      break;

    default:
      const _exhaustive: never = state;
      return _exhaustive;
  }
}


type ApiResponse<T> = 
| { success: true; data: T}
| { success: false; error: string};

interface Product {
    id: string;
    name: string;
    price: number
}

const response: ApiResponse<Product[]> = {
    success: true,
    data: [
        { id: "101", name: "keyboard", price: 1100}
    ]
};

function isSuccess<T> (
    response: ApiResponse<T>
): response is { success: true; data: T} {
    return response.success === true;
}