package main

import (
	"fmt"
)

// calculate minimum amount of people needed to perform a certain amount of handshakes, where each person shakes hands with every other person exactly once
func GetParticipants(handshakes int) int {
	if handshakes == 0 {
		return 0
	}

	max := 0
	counter := 0
	for max < handshakes {
		max = counter * (counter - 1) / 2
		counter++
	}

	return counter - 1
}

func main() {
	fmt.Println(GetParticipants(0))
	fmt.Println(GetParticipants(1))
	fmt.Println(GetParticipants(3))
	fmt.Println(GetParticipants(6))
	fmt.Println(GetParticipants(7))
}
