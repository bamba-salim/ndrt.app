import LodashUtils from "../../ressources/utils/lodash.utils";
import sandwichs from "../../ressources/assets/img/test.jpg";
import car from "../../ressources/assets/img/pexels-mike-170811.jpg";
import woman from "../../ressources/assets/img/science-career-e1486474566440-719x510.jpeg";
import eye from "../../ressources/assets/img/new.exemple.jpeg";
import house from "../../ressources/assets/img/pexels-binyamin-mellish-1396132.jpg"
import desk from "../../ressources/assets/img/pexels-kate-trifo-4057060.jpg"


export default class ProductService {

    static MOODS = [
        {id: 1, name: "Daarq"},
        {id: 2, name: "Sno"},
        {id: 3, name: "Iron"},
        {id: 4, name: "Millitary"},
        {id: 5, name: "Wood"},
        {id: 6, name: "Seal"},

    ]
    static PICTURE = [
        eye,
        sandwichs,
        woman,
        car,
        house,
        desk
    ]

    static PRODUCTS = [
        {id: 1, name: "Chase", idMood: 1, price: 20},
        {id: 2, name: "Chase", idMood: 2, price: 19.99},
        {id: 3, name: "Chase", idMood: 3, price: 34.99},
        {id: 4, name: "Chase", idMood: 4, price: 47.99},
        {id: 5, name: "Chase", idMood: 5, price: 30.599},
        {id: 1, name: "Watch", idMood: 1, price: 20},
        {id: 2, name: "Watch", idMood: 2, price: 19.99},
        {id: 3, name: "Watch", idMood: 3, price: 34.99},
        {id: 4, name: "Watch", idMood: 4, price: 47.99},
        {id: 5, name: "Watch", idMood: 5, price: 30.599}
    ]


    static fetchAllProductFull = (idCategory) => {
        let list = !LodashUtils.isset(idCategory) ? this.PRODUCTS : this.PRODUCTS.filter(prod => parseInt(idCategory) === prod.idMood)
        list.forEach(prod =>{
            prod.photo = this.PICTURE[(prod.idMood - 1)]
            prod.mood = this.MOODS.find(m => m.id === prod.idMood)
        })
        return list
    }

    static fetchProduct = idProduct => {
        let prod = this.PRODUCTS.find(prod => parseInt(idProduct) === prod.id)
        prod.mood = this.MOODS.find(m => m.id === prod.idMood)
        let photo = this.PICTURE[(prod.idMood - 1)]
        prod.photos = this.fetchPhotos(photo)
        return prod
    }

    static fetchPhotos = () => {
        let list = [];
        for (let i = 0; i < 4; i++) {
            list.push(this.PICTURE[i])
        }
        return list;
    }

}

