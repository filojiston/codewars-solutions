package main

import "fmt"

func Interlockable(a, b uint64) bool {
	return (a & b) == 0
}

func main() {
	fmt.Println(Interlockable(9, 4))
}
