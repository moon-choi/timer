const userInputs = process.argv.slice(2);

for (const element of userInputs) { //for loop takes care of condition 1. there is nothing to loop through, so for loop doesn't execute
    if (element > 0 && !isNaN(element)) { //!(element < 0)
        setTimeout (() => {
            process.stdout.write('\x07')
        }, element * 1000)
    }
}
