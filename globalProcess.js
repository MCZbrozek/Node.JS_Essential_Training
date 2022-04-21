console.log(process.argv)
// this is an array

// deconstructs the array and pulls the user name (which we pass below)
const[,,firstName, lastName] = process.argv
console.log(`Your name is ${firstName} ${lastName}`)

// Function to grab the user name and greeting using the flags --userName etc. 
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1 
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)

console.log(process.pid)
console.log(process.version.node)