class Example{
    num = 1
    text = "Hi"
    checkThis(){
        return this
    }
}

const ex1 = new Example()
console.log(ex1.checkThis());