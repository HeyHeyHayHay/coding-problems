fizzBuzzList = []
for testNumbers in range(1, 10000001):
    printedNumber = testNumbers
    if testNumbers%3 == 0:
        printedNumber = 'Fizz'
    if testNumbers%5 == 0:
        printedNumber = 'Buzz'
    if testNumbers%15 == 0:
        printedNumber = 'FizzBuzz'
    fizzBuzzList.append(printedNumber)
for item in range(len(fizzBuzzList)):
    print(fizzBuzzList[item], end=", ")
#    for item in fizzBuzzList:
#        print(item)
