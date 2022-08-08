let productos = [{
        id: "1",
        marca: "El Refugio 1",
        categoría: "promociones",
        precio: 15000,
        nombre: "Promo finde fuera de temporada",
        img: ""
    },
    {
        id: "2",
        marca: "El Refugio 2",
        categoría: "amigos",
        precio: 25000,
        nombre: "Vacaciones con amigo",
        img: ""
    },
    {
        id: "3",
        marca: "El Refugio 2",
        categoría: "familia",
        precio: 35000,
        nombre: "Promo en familia",
        img: ""
    },
    {
        id: "4",
        marca: "El Refugio 1",
        categoría: "Pareja",
        precio: 15000,
        nombre: "Promociones en pareja",
        img: ""
    },
    {
        id: "5",
        marca: "El Refugio 1",
        categoría: "solo",
        precio: 10000,
        nombre: "Vacaciones solo",
        img: ""
    },
   
]
export const getFetch = (id) => {   
    
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 1200)
    })

}
