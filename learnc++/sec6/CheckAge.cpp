#include <iostream>
void CheckAge(int age){
  if(age >= 12 && age <=50){
    std::cout << "young";
  }else{
    std::cout << "not young";
  }
}