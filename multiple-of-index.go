package pkg

func multipleOfIndex(ints []int) []int {
	var result = make([]int, len(ints))
	var arr_idx = 0
	for i, v := range ints {
		if i != 0 && v%i == 0 {
			result[arr_idx] = v
			arr_idx++
		}
	}

	return result[:arr_idx]
}

// func multipleOfIndex (ints []int) []int {
//   res := make([]int, 0)

//   for i, v := range ints {
//     if i > 0 && v % i == 0 {
//             res = append(res, v)
//         }
//     }
//   return res
// }
