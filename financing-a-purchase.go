package main

import (
	"fmt"
	"math"
)

func Amort(rate float64, balance int, term int, num_payments int) string {
	monthly_rate := rate / 1200
	n := monthly_rate * float64(balance)
	d := 1 - math.Pow((1+monthly_rate), -float64(term))
	c := n / d

	var princ, interest float64
	new_balance := float64(balance)
	for i := 1; i <= num_payments; i++ {
		interest = new_balance * monthly_rate
		princ = c - interest
		new_balance -= princ
	}

	return fmt.Sprintf("num_payment %d c %.0f princ %.0f int %.0f balance %.0f", num_payments, c, princ, interest, new_balance)
}

func main() {
	fmt.Println(Amort(6, 100000, 360, 1))
	fmt.Println(Amort(6, 100000, 360, 12))
	fmt.Println(Amort(7.4, 10215, 24, 20))

}
