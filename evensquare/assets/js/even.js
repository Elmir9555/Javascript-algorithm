let number=[1,2,3,4,5,6,7,8,9]
sum=0;

function squareEven() {
    for (let i = 0; i < number.length; i++) {
    
        if (number[i]%2==0) {
            sum +=number[i] * number[i]
        }
    }
    console.log(sum);
}

squareEven()
