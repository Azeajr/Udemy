#include <cmath>
#include <iostream>

using namespace std;

int main(int argc, char const *argv[]) {
  float a, b, c, discriminant, posRoot, negRoot;

  cout << "Enter a:";
  cin >> a;

  cout << "Enter b:";
  cin >> b;

  cout << "Enter c:";
  cin >> c;

  discriminant = b * b - 4 * a * c;

  if (discriminant == 0) {
    cout << "There is one root: " << (b * -1) / (2 * a) << endl;
  } else if (discriminant > 0) {
    cout << "Positive root: " << ((b * -1) + sqrt(discriminant)) / (2 * a)
         << endl;
    cout << "Negative root: " << ((b * -1) - sqrt(discriminant)) / (2 * a)
         << endl;
  } else {
    cout << "Roots are imagineary." << endl;
  }

  return 0;
}
