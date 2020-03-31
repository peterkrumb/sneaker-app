"use strict";
const Sneaker = use("App/Models/Sneaker");

class SneakerController {
  async index({ view }) {
    try {
      let allSneakers = await Sneaker.all();
      allSneakers = allSneakers.toJSON();
      let viewData = {
        allSneakers
      };
      console.log(viewData);

      return view.render("sneakers/index", viewData);
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
  async create({ view }) {
    return view.render("sneakers/create");
  }
  async store({ request, response }) {
    try {
      const sneaker = new Sneaker();
      const data = request.post();

      sneaker.title = data.title;
      sneaker.image = data.image;
      sneaker.description = data.description;

      await sneaker.save();
      return response.redirect("/");
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
  async show({ view, request }) {
    try {
      const sneaker = await Sneaker.find(request.params.id);
      let viewData = {
        sneaker: sneaker.toJSON()
      };
      console.log(viewData);
      return view.render("sneakers/show", viewData);
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }

  async edit({ view, request }) {
    try {
      const sneaker = await Sneaker.find(request.params.id);
      let viewData = {
        sneaker: sneaker.toJSON()
      };
      console.log(viewData);

      return view.render("sneakers/edit", viewData);
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
  async update({ request, response }) {
    try {
      const sneaker = await Sneaker.find(request.params.id);
      console.log(request.post());
      const postData = request.post();

      sneaker.title = postData.title;
      sneaker.image = postData.image;
      sneaker.description = postData.description;
      sneaker.save();
      console.log(sneaker.toJSON());
      return response.redirect("back");
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
  async destroy({ request, response }) {
    try {
      const sneaker = await Sneaker.find(request.params.id);
      console.log(request.post());
      const postData = request.post();

      sneaker.delete();
      console.log(sneaker.toJSON());
      return response.redirect("back");
    } catch (error) {
      console.log(error);
      return "Sorry there was an error check console";
    }
  }
}

module.exports = SneakerController;
