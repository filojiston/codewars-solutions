def pascalsTriangle(n)
    result = []
    for i in 0..n-1
        result = result.concat(getNthLine(i))
    end

    return result
end

def getNthLine(n)
    prev = 1
    result = [prev]

    for i in 1..n
        curr = (prev * (n - i + 1)) / i
        result.push(curr)
        prev = curr
    end

    return result
end


# some solutions looks idiomatic to me
def pascalValue (n, k)
  return k == 0 ? 1 : pascalValue(n, k-1) * (n + 1 - k) / k
end

def pascalRow(n)
  (0..n).collect {|k| pascalValue(n,k) }
end

def pascalsTriangle(r)
  [1] + (1..r-1).collect {|n| pascalRow n }.flatten
end

def pascalsTriangle(n)
   res = []
   (1..n).each do |i|
     res << (1..i).map {|j| j == 1 ? 1 : (res.last[j-2] + res.last[j-1] rescue 1) }
   end
   res.flatten
end

def pascalsTriangle(n)
  (0..n-1).map do |r|
    (1..r).inject([1]) { |memo, e| memo.push(memo.last * (r + 1 - e) / e)}
  end.flatten
end
