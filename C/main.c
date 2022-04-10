#include "stdio.h"


int isPrime(int num) {
    int i;
    if (num <= 1) { return 0; }
    if (num % 2 == 0 && num > 2) { return 0; }
    for (i = 3; i < num / 2; i += 2)
        if (num % i == 0)
            return 0;
    return 1;
}

void checkPrime(int n) {
    int i;
    printf("Prime numbers: ");
    for (i = 2; i <= n; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
}

int main() {
    int n;
    printf("Enter N: ");
    scanf("%d", &n);
    checkPrime(n);
    return 0;
}