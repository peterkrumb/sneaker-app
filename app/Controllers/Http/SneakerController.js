'use strict'
const Sneaker = use('App/Models/Sneaker')

class SneakerController {
    async index({view}){
        let allSneakers = await Sneaker.all()
        allSneakers = allSneakers.toJSON()
        let viewData = {
            allSneakers
        }
        console.log(viewData);
        
        return view.render('sneakers/index', viewData)
    }
    async create({view}){
        return view.render('sneakers/create')
    }
    async store({request, response}){
        try{

            const sneaker = new Sneaker()
            const data = request.post()
    
            sneaker.title = data.title
            sneaker.image = data.image
            sneaker.description = data.description
    
            await sneaker.save()
            return response.redirect('/')
        } catch (error) {
            console.log(error);
            return 'Sorry there was an error check console'
        }
    }
    async show({view}){
        return view.render('sneakers/show')
    }
    async edit({view}){
        return view.render('sneakers/edit')
    }
    async update(){
        return "update 1 sneaker in database"
    }
    async destroy(){
        return "delete 1 sneaker in database"
    }
}

module.exports = SneakerController
