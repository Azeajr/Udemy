#include <iostream>

void Discount(int amount) {
  float disAmount;
  if (amount >= 5000) {
    disAmount = amount * 0.8;
  } else if (amount < 2000) {
    disAmount = amount * 0.95;
  } else {
    disAmount = amount * 0.9;
  }
  std::cout << disAmount;
}