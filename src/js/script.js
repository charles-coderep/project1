// illustration that you can pass a function to a variable but also a property
// pass by reference (objects) and pass by value (copied variables) is a very important subject

let pricing = {
    name: 'john',
    price: 40,
    age: 43,
    isexp: function (){
        let answer = (this.price > 50) ? 'expensive' : 'cheap';
        return answer;
    },
    calcMath: function (){
        let randomnr = Math.random()
        return randomnr;
    }
};

showMessage(pricing.isexp());
console.log("2"+pricing.calcMath());