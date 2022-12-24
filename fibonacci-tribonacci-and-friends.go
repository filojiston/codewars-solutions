package main

import "fmt"

func Xbonacci(signature []int64, n int) []int64 {
	if n == 0 {
		return []int64{}
	}
	if n <= len(signature) {
		return signature[:n]
	}
	result := make([]int64, n)
	copy(result, signature)
	for i := len(signature); i < n; i++ {
		result[i] = 0
		for j := 0; j < len(signature); j++ {
			result[i] += result[i-j-1]
		}
	}
	return result
}

func main() {
	fmt.Println(Xbonacci([]int64{1, 0, 0, 0, 0, 0, 1}, 10))
}
