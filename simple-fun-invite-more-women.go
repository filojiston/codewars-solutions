package main

import "fmt"

func inviteMoreWomen(L []int) bool {
	var sum int
	for _, v := range L {
		sum += v
	}
	return sum > 0
}

func main() {
	fmt.Println(inviteMoreWomen([]int{1, -1, 1}) == true)
	fmt.Println(inviteMoreWomen([]int{1, 1, 1}) == true)
	fmt.Println(inviteMoreWomen([]int{-1, -1, -1}) == false)
	fmt.Println(inviteMoreWomen([]int{1, -1}) == false)
}
