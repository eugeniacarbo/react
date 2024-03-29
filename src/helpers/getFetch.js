let productos = [{
        id: "1",
        marca: "El Refugio 1",
        categoría: "promos",
        precio: 15000,
        nombre: "Promo solari",
        img: "https://picsum.photos/id/447/600",
        stock: 15
    },
    {
        id: "2",
        marca: "El Refugio 1",
        categoría: "promos",
        precio: 28000,
        nombre: "Promo relax finde largo",
        img: "https://picsum.photos/id/449/600",
        stock: 10
    },
    {
        id: "3",
        marca: "El Refugio 2",
        categoría: "promos",
        precio: 25000,
        nombre: "Promo fiestas",
        img: "https://picsum.photos/id/407/600",
        stock: 10
    },
    {
        id: "4",
        marca: "El Refugio 2",
        categoría: "promos",
        precio: 15000,
        nombre: "Promo finde con 6 amigos",
        img: "https://picsum.photos/id/390/600",
        stock: 10
    },
    {
        id: "5",
        marca: "El Refugio 1",
        categoría: "promos",
        precio: 30000,
        nombre: "Promo en pareja",
        img: "https://picsum.photos/id/1083/600",
        stock: 8
    },
    {
        id: "6",
        marca: "El Refugio 1",
        categoría: "promos",
        precio: 2500,
        nombre: "Promo finde fuera de temporada",
        img: "https://picsum.photos/id/301/600",
        stock: 10
    },

]
export const getFetch = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 1200)
    })

}
