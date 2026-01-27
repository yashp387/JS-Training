// Assignment-05 -> Coupon discount function

const amount = 1000;
const couponCode = "SAVE10";

const couponCodes = {
  SAVE10: 0.1,
  SAVE20 : 0.2,
}
const applyCoupon = (amount, couponCode) => {
  if(!couponCodes[couponCode]) {
    return amount;
  }

  const discount = couponCodes[couponCode];
  return amount - amount * discount;
}


const totalAmount = applyCoupon(amount, couponCode);
console.log(totalAmount);