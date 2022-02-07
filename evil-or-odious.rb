def evil(n)
    n.to_s(2).count('1') % 2 == 0 ? "It's Evil!" : "It's Odious!"
end

# even? :) i like that language
def evil(n)
  n.to_s(2).count('1').even? ? "It's Evil!" : "It's Odious!"
end
