
const secondnumber = 18
const statedage = 18


if (statedage > secondnumber) {
    const result = ('Вы совершеннолетний')
    console.log(result)
} else {
    const result = statedage < secondnumber 
    console.log("Вам еще нет 18")
}

const result = statedage >= 18 ? 'Вы совершеннолетний' : 'Вам еще нет 18'
console.log(result)
