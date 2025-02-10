function avg(num1,num2,num3){
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average;
}

function sqrt(num){
    let sqrt = Math.sqrt(num);
    return sqrt;
}

module.exports = {avg , sqrt}