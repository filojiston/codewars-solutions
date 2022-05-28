package kata

import (
	"strconv"
	"strings"
)

func ValidISBN10(isbn string) bool {
	splitted := strings.Split(isbn, "")

	if len(splitted) != 10 {
		return false
	}

	var sum int
	for idx, val := range splitted {
		value := getValue(val, idx)
		if value == -1 {
			return false
		}
		sum += value * (idx + 1)
	}

	return sum%11 == 0
}

func getValue(char string, idx int) int {
	if char == "X" || char == "x" {
		if idx == 9 {
			return 10
		} else {
			return -1
		}
	}

	val, err := strconv.Atoi(char)
	if err != nil {
		return -1
	}
	return val
}

/*
same solution but more idiomatic imo, i liked it

package kata

func ValidISBN10(isbn string) bool {
  if len(isbn) < 10 {
    return false
  }

  var sum int
  for i, v := range isbn {
    if i == 9 && (v == 'X' || v == 'x') {
      sum += 100
    } else if v < '0' || v > '9' {
      return false
    } else {
      sum += int(v - '0') * (i + 1)
    }
  }

  return sum % 11 == 0
}

*/
