
testingNumbers = [];
i = 1;

while i < 1000:
    testingNumbers.append(i)
    i += 1

stepsOfIteration = [];


for x in testingNumbers:
    testNum = x
    numberOfIterations = 0
    while (testNum != 1)and(numberOfIterations<1000):
        if testNum % 2 == 0:
            testNum = testNum//2
            numberOfIterations += 1
        else:
            testNum = (3*testNum)+1
            numberOfIterations += 1
    stepsOfIteration.append((x, numberOfIterations))

print(stepsOfIteration)
