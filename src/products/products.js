const pochis = [
    {
        id: 1,
        title: "Peluche",
        description: "Juguetes",
        price: 2300,
        pictureUrl: "https://elreciennacido.com/4656-home_default/peluche-con-nombre-conejo-bunny-bordado-con-nombre.jpg",
        detalle: "Juguete hecho a mano, suave, con el bordado del nombre",
        category: "juguetes",
        stock: 15
    },
    {
        id: 2,
        title: "Ropa de Cama",
        description: "Sabanas y fundas",
        price: 4800,
        pictureUrl: "https://bebenomadebue.com/wp-content/uploads/2019/10/SABANASFOTO1.jpg",
        detalle: "sabanas 100% algodon, bordadas a mano",
        category:"ropadeblanco",
        stock: 8
    },
    {
        id: 3,
        title: "Accesorios",
        description: "Usos diarios",
        price: 1900,
        pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/634/847/products/20210929_173921-011-41c0ac0ba8bafcd0bf16363968212709-240-0.jpeg",
        detalle: "pack de chupete, porta chupete y babero",
        category:"accesorios",
        stock: 20
    }
];


// deep clone (con JS vanilla)
const pochisJSON = JSON.stringify(pochis);
const newPochis = JSON.parse(pochisJSON);

const newProduct = { id: 5, title: "Perfumes" };
newPochis.push(newProduct);

newPochis[1].category = "piel";

console.log(newPochis);

export default pochis;