def chromosome_check(sperm)
  "Congratulations! You\'re going to have a " +
    "#{sperm.count('Y') > 0 ? 'son' : 'daughter'}."
end

# include? . that was the method i was looking for.
def chromosome_check(sperm)
  "Congratulations! You're going to have a #{sperm.include?('Y') ? 'son' : 'daughter'}."
end
