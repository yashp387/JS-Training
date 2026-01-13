// Assignment-05 -> Coupon discount function

const amount = 1000;
const couponCode = "NONE";

const applyCoupon = (amount, couponCode) => {
  switch (couponCode) {
    case "SAVE10":
      return amount * 0.9;

    case "SAVE20":
      return amount * 0.8;

    case "NONE":
      return amount;

    default:
      console.log("Invalid coupon code");
      return amount;
  }
};

const totalAmount = applyCoupon(amount, couponCode);
console.log(totalAmount);