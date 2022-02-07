def sale_hotdogs(n)
    return n < 5 ? 100 * n : n < 10 ? 95 * n : 90 * n
end

puts(sale_hotdogs(0),0)
puts(sale_hotdogs(1),100)
puts(sale_hotdogs(2),200)
puts(sale_hotdogs(3),300)
puts(sale_hotdogs(4),400)
puts(sale_hotdogs(5),475)
puts(sale_hotdogs(9),855)
puts(sale_hotdogs(10),900)
puts(sale_hotdogs(11),990)
puts(sale_hotdogs(100),9000)
