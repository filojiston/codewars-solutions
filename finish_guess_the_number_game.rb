class Guesser
  def initialize(number, lives)
    @number = number
    @lives = lives
  end

  def guess(n)
    if @lives <= 0 then  raise "napi10 aq"
    end

    if n == @number then return true
    end

    @lives -= 1
    return false
  end

  # short and understandable solutions, probably the idiomatic way
  def guess(n)
    raise "Omae wa mo shindeiru" if @lives.zero?
    (n == @number).tap { |result| @lives -= 1 unless result }
  end

  def guess(n)
    raise :error if @lives == 0

    @lives -= 1 unless n == @number

    n == @number
  end
end
