import LodashUtils from "../../ressources/utils/lodash.utils";

export default class ProductService {

    static MOODS = [
        {id: 1, name: "Daarq"},
        {id: 2, name: "Sno"},
        {id: 3, name: "Iron"},
        {id: 4, name: "Millitary"},
        {id: 5, name: "Wood"},
        {id: 6, name: "Seal"},

    ]

    static PRODUCTS = [
            {id: 1, name: "Chase", mood: 1, price: 20},
            {id: 2, name: "Chase", mood: 2, price: 19.99},
            {id: 3, name: "Chase", mood: 3, price: 34.99},
            {id: 4, name: "Chase", mood: 4, price: 47.99},
            {id: 5, name: "Chase", mood: 5, price: 30.599},
            {id: 1, name: "Watch", mood: 1, price: 20},
            {id: 2, name: "Watch", mood: 2, price: 19.99},
            {id: 3, name: "Watch", mood: 3, price: 34.99},
            {id: 4, name: "Watch", mood: 4, price: 47.99},
            {id: 5, name: "Watch", mood: 5, price: 30.599}
        ]


    static fetchAllProductFull = (idCategory) => {
        let list = this.PRODUCTS.filter(prod => !LodashUtils.isset(idCategory) ? prod : parseInt(idCategory) === prod.mood)
        list.forEach(prod => prod.mood = this.MOODS.find(m => m.id === prod.mood))
        return list
    }

    static fetchProduct = idProduct => {
        let prod = this.PRODUCTS.find(prod => parseInt(idProduct) === prod.id)
        prod.mood = this.MOODS.find(m => m.id === prod.mood)
        return prod
    }

}

