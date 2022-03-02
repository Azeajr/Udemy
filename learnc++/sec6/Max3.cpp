#include <iostream>

void Max3(int a, int b, int c) {
  if (a > b) {
    if (a > c) {
      std::cout << a;
    } else {
      std::cout << c;
    }
  } else if (b > c) {
    std::cout << b;
  } else {
    std::cout << c;
  }
}
/**
 * @brief I believe this version is more readable.
 * 
 * @param a 
 * @param b 
 * @param c 
 */
void max3(int a, int b, int c) {
  if (a > b && a > c) {
    std::cout << a;
  } else if (b > a && b > c) {
    std::cout << b;
  } else {
    std::cout << c;
  }
}