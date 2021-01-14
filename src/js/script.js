let pricing = {
    name: 'john',
    price: 30,
    age: 43,
    isexp: function (){
        answer = (this.price > 50) ? 'expensive' : 'cheap';
        return answer;
    }
};

showMessage(pricing.isexp());