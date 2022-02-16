// process.stdout.write('\x07');


/*
console.log("Please provide your number")
process.stdin.on(`data`, data => { // instruction says `key`, data => , what does `data`/`key` do here?
    //you are adding an event handler. call back function's argument is data. 
    // string data is the event handler, 
    if(data === null){
        process.stdout.write('no beep'); //how to do this instead of 'no beep'
    } else if(data < 0){
        process.stdout.write('no beep');
    } else if(data === NaN) {
        process.stdout.write('no beep');
    } else {
    process.stdout.write('beep')}
})
*/

// q1. how to get node timer1.js 10 3 5 15 9  working? instead of conosole.log'provide your number'
// q2. why beep sound doesn't play?
// q3. the code i wrote, how can i better write it?
// q4. what's the relation between `data and data => 


// process.stdin.on('data', (key) => {
//     process.stdout.write(key);
//   })

const userInputs = process.argv.slice(2);

let timer = userInputs[2]

for (const element of userInputs) { //for loop takes care of condition 1. there is nothing to loop through, so for loop doesn't execute
    if (element > 0 && !isNaN(element)) { //!(element < 0)
        setTimeout (() => {
            process.stdout.write('\x07')
        }, element * 1000)
    }
}
