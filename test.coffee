# script source = https://www.coffeescript.org
number   = 42
opposite = true

number = -42 if opposite

square = (x) -> x * x

list = [1, 2, 3, 4, 5]

math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

race = (winner, runners...) ->
  print winner, runners

#alert "I knew it!" if elvis?

cubes = (math.cube num for num in list)

# my own additions
console.log "Some tests:"
console.log math.square(3)
console.log math.cube(3)