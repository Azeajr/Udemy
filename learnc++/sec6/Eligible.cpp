#include <iostream>

void Eligible(int age) {
  if (age < 12 || age > 50) {
    std::cout << "eligible";
  } else {
    std::cout << "not eligible";
  }
}