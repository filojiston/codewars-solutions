def unique_chars?(string)
    h = Hash.new { |hash, key| hash[key] =  0 }
    string.chars.each { |c| h[c] += 1 }
    return (h.keep_if {|k, c| c > 1}.keys).size == 0
end

def unique_chars?(str)
  str.chars == str.chars.uniq
end

puts(unique_chars?("abcdef"),true)
puts(unique_chars?("++-"),false)
puts(unique_chars?("  nAa"),false)
puts(unique_chars?("aba"),false)
