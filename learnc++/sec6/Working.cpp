#include <iostream>

void Working(int hour){
  if(hour >= 9 && hour <= 18){
    std::cout << "working";
  }else{
    std::cout << "leisure";
  }
}