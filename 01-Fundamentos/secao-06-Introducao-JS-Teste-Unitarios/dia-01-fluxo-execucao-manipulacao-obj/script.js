const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias. 
    return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, Apt:${order.address.apartment}`

};

console.log(customerInfo(order))

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment = 50;

    //Gabarito 
    const pizzas = Object.keys(order.order.pizza);
    const newTotal = order.payment.total = '50';
    return `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment}.`
};

console.log(orderModifier(order));