#include <iostream>

void Grades(int m1, int m2, int m3) {
  float Total, Avg;
  Avg = (m1 + m2 + m3) / 3.0;

  if (Avg >= 60) {
    std::cout << 'A';
  } else if (Avg < 35) {
    std::cout << 'C';
  } else {
    std::cout << 'B';
  }
}