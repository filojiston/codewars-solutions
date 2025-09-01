import unittest


def determinant(matrix):
    if len(matrix) == 1:
        return matrix[0][0]
    if len(matrix) == 2:
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]

    result = 0
    for i in range(len(matrix)):
        minor = [row[:i] + row[i + 1 :] for row in matrix[1:]]
        cofactor = ((-1) ** i) * matrix[0][i] * determinant(minor)
        result += cofactor

    return result


class TestMatrixDeterminant(unittest.TestCase):
    def test_matrix_determinant(self):
        self.assertEqual(determinant([[5]]), 5)
        self.assertEqual(determinant([[4, 6], [3, 8]]), 14)
        self.assertEqual(determinant([[2, 4, 2], [3, 1, 1], [1, 2, 0]]), 10)


if __name__ == "__main__":
    unittest.main()
