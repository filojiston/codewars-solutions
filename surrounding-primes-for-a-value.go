package main

import (
	"fmt"
	"math/big"
)

func PrimeBefAft(n int) [2]int {
	var result [2]int
	for i := n - 1; i > 1; i-- {
		if isPrime(i) {
			result[0] = i
			break
		}
	}
	for i := n + 1; i > 1; i++ {
		if isPrime(i) {
			result[1] = i
			break
		}
	}
	return result
}

func isPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func isPrime(n int) bool { return big.NewInt(int64(n)).ProbablyPrime(0) }

// this is nice usage of for loop, i didn't know that
// you can use for loop like that. neat!
func PrimeBefAft(n int) [2]int {
	a, b := n-1, n+1
	for !isPrime(a) {
		a -= 1
	}
	for !isPrime(b) {
		b += 1
	}
	return [2]int{a, b}
}

func main() {
	fmt.Println(PrimeBefAft(100))
	fmt.Println(PrimeBefAft(97))
	fmt.Println(PrimeBefAft(101))
}
