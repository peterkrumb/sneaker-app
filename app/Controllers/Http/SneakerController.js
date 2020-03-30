'use strict'

class SneakerController {
    async index({view}){
        return view.render('sneakers/index')
    }
    async create({view}){
        return view.render('sneakers/create')
    }
    async store(){
        return "save 1 sneaker"
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
