const {Router} = require("express");
const {product} = require("../models");
const {category} = require("../models")

const router = new Router();

router.get("/products",async (req, res, next)=>{
    try{
        const products = await product.findAll({raw:true});
        res.send(products)
    }
    catch (e){
        next(e)
    }
});

router.get("/products/:id",async (req, res, next)=>{
    try {
        const {id} = req.params
        console.log(id)
        const productToFind = await product.findByPk(id,{include:{model: category}})
        res.send(productToFind)
    }
    catch (e){
        next(e)
    }
})


module.exports = router;