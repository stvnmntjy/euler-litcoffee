####<u>Problem 1</u>

#####Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

    define ['underscore'], (_) ->
      solve: ->
        _.reduce (                      # foldl-1: sum a filtered range
          _.filter [3..999],            #   filter the range 3 <= x <= 999
            (num) -> _.some [3,5],      #   number must be a multiple of 3 or 5
              (n) -> num % n is 0),     # end of foldl-1
          ((memo, num) -> memo + num),  # foldl-2: sum the filtered together...
          0                             # foldl-3: ... start by adding from 0

