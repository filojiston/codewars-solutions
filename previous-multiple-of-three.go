package main

import "fmt"

func PrevMultOfThree(num int) interface{} {
	for num > 0 {
		if num%3 == 0 {
			return num
		}
		num /= 10
	}
	return nil
}

func main() {
	fmt.Println(PrevMultOfThree(1))
	fmt.Println(PrevMultOfThree(25))
	fmt.Println(PrevMultOfThree(36))
	fmt.Println(PrevMultOfThree(12))
	fmt.Println(PrevMultOfThree(952406))
}
