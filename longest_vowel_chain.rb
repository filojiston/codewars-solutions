def solve(s)
    counter = 0
    max = 0
    s.each_char { |ch|
        if 'aeiou'.include?(ch) then
            counter += 1
        else
            if counter > max then max = counter
            end
            counter = 0
        end
    }
    return counter > max ? counter : max
end

puts(solve("codewarriors"),2)
puts(solve("suoidea"),3)
puts(solve("iuuvgheaae"),4)
puts(solve("ultrarevolutionariees"),3)
puts(solve("strengthlessnesses"),1)
puts(solve("cuboideonavicuare"),2)
puts(solve("chrononhotonthuooaos"),5)
puts(solve("iiihoovaeaaaoougjyaw"),8)
