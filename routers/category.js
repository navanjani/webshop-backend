const {Router} = require("express");
const {product} = require("../models");
const {category} = require("../models")


const router = new Router();


router.get("/categories",async (req, res, next)=>{
    try{
        const categories = await category.findAll({raw:true})
        res.send(categories)
    }
    catch (e){
        next(e)
    }
});

router.get("/categories/:id",async (req, res, next)=>{
    try{
        const {id} = req.params
        const categoryToSearch = await category.findByPk(id,{include:{model:product}})
        res.send(categoryToSearch)
    }
    catch (e){
        next(e)
    }
})

module.exports = router