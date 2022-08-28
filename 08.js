//testLogicalEnd
function testLogicalEnd(val){
    if(val > 50 && val < 100){
        return "Yes"
    }
    return "No"
}
const answer = testLogicalEnd();
console.log(answer)