#include <cmath>
#include <iostream>

void Roots(float a, float b, float c) {
  float d, r1, r2;

  d = b * b - 4 * a * c;
  r1 = ((b * -1) + sqrt(d)) / (2 * a);
  r2 = ((b * -1) - sqrt(d)) / (2 * a);

  if (d == 0) {
    std::cout << "There is one root: " << (b * -1) / (2 * a) << std::endl;
  } else if (d > 0) {
    std::cout << "Positive root: " << r1 << std::endl;
    std::cout << "Negative root: " << r2 << std::endl;
  } else {
    std::cout << "Roots are imagineary." << std::endl;
  }
}