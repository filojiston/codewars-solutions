package main

import "fmt"

func Perimeter(n int) int {
	squares := fib(n + 1)
	squareSum := 0

	for _, square := range squares {
		squareSum += square
	}

	return squareSum * 4
}

func fib(num int) []int {
	fib := make([]int, num)
	fib[0] = 1
	fib[1] = 1
	for i := 2; i < num; i++ {
		fib[i] = fib[i-1] + fib[i-2]
	}
	return fib
}

func main() {
	fmt.Println(Perimeter(5))
	fmt.Println(Perimeter(7))
	fmt.Println(Perimeter(20))
	fmt.Println(Perimeter(30))
}
