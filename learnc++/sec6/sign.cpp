#include <iostream>

void Sign(int n) {
  if (n > 0) {
    std::cout << "positive";
  } else if (n < 0) {
    std::cout << "negative";
  }
}

int main(int argc, char const *argv[]) { return 0; }
