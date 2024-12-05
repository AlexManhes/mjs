var me = {
    name: 'Alex',
    age: 11
}
function checkAge(person){
    if (person.age <= 18){
        console.log('O usuario ' + person.name + ' e menor de idade')
        console.log('ele tem ' + person.age + ' anos ')
    } else{
        console.log('o usuario ' + person.name + ' e maior de idade')
        console.log('ele tem ' + person.age + ' anos ')
    }
}
checkAge(me)