#include <iostream>

void OddEven(int n){
  if(n%2){
    std::cout << "odd";
  }else{
    std::cout << "even";
  }
}

int main(int argc, char const *argv[])
{
  OddEven(10);
  OddEven(13);

  return 0;
}
