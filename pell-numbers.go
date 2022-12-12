package main

import (
	"fmt"
	"math/big"
)

func Pell(n int) *big.Int {
	if n == 0 {
		return big.NewInt(0)
	}
	if n == 1 {
		return big.NewInt(1)
	}

	// use memoization to avoid recalculating the same values
	memo := make(map[int]*big.Int)
	memo[0] = big.NewInt(0)
	memo[1] = big.NewInt(1)

	for i := 2; i <= n; i++ {
		memo[i] = new(big.Int).Add(new(big.Int).Mul(big.NewInt(2), memo[i-1]), memo[i-2])
	}

	return memo[n]
}

func main() {
	fmt.Println(Pell(0))
	fmt.Println(Pell(1))
	fmt.Println(Pell(2))
	fmt.Println(Pell(3))
	fmt.Println(Pell(4))
	fmt.Println(Pell(5))
}
