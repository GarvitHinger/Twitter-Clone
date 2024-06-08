#include <iostream>
#include <random>

int main() {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<int> distribution(100000000, 999999999);

    for (int i = 0; i < 500; ++i) {
        int randomValue = distribution(gen);
        std::cout << randomValue << ",";
    }

    return 0;
}