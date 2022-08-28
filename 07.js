//if
function testNoEqual(num){
    if(num>100){
        return "big"
    }
    if(num>10){
        return "medium"
    }
    return "10 or under"
}
const answer = testNoEqual()
console.log(answer)