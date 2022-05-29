function isnarcissistic(n::Integer)
    original_value = n
    sum = 0
    l = length(string(n))
    while n > 0
        digit = n % 10
        n = n ÷ 10
        sum += digit ^ l
    end
    return sum == original_value
end

@fact isnarcissistic(153) --> true
@fact isnarcissistic(1) --> true
@fact isnarcissistic(435) --> false
@fact isnarcissistic(370) --> true
@fact isnarcissistic(324) --> false
@fact isnarcissistic(371) --> true
@fact isnarcissistic(4328) --> false
@fact isnarcissistic(407) --> true
@fact isnarcissistic(3248) --> false
@fact isnarcissistic(1634) --> true
@fact isnarcissistic(8208) --> true
@fact isnarcissistic(9474) --> true
@fact isnarcissistic(54748) --> true
@fact isnarcissistic(92727) --> true
@fact isnarcissistic(93084) --> true
@fact isnarcissistic(548834) --> true
@fact isnarcissistic(1741725) --> true
@fact isnarcissistic(4210818) --> true
@fact isnarcissistic(9800817) --> true
@fact isnarcissistic(234229983) --> false
@fact isnarcissistic(9926315) --> true
@fact isnarcissistic(24678050) --> true
@fact isnarcissistic(88593477) --> true
@fact isnarcissistic(11513221922401) --> false
@fact isnarcissistic(146511208) --> true
@fact isnarcissistic(472335975) --> true
@fact isnarcissistic(26548238692458) --> false
@fact isnarcissistic(534494836) --> true
@fact isnarcissistic(912985153) --> true
@fact isnarcissistic(4679307774) --> true
