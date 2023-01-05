// console.log(process.argv)

sum=0
for (let index = 2; index < process.argv.length; index++) 
    sum+=parseInt(process.argv[index])

console.log(sum);