def sum_even_fibonacci_until m
    i = 0
    j = 1
    sum = 0
    loop do
        j = j + i
        i = j - i
        break if j > m
        sum += j if j % 2 == 0
    end
    p sum
end

sum_even_fibonacci_until 4000000