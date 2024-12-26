import express from  'express';
import Product from '../models/product.model.js';
import mongoose from 'mongoose';
const router = express.Router();

export default router;

router.put("/:id", async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message: 'Invalid Product ID'}); 
    }
    try{
        const updatedProduct=await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    }
    catch (error){
        console.error(error.message);
        res.status(500).json({success:false,message: 'Server error'}); 
    }
});
router.post('/',async (req,res) =>{
    const product= req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: 'All fields are required'});
    }
    
    const newProduct = new Product(product)
    try{
        await newProduct.save();
        res.status(201).json({success: true,data: newProduct});

    } catch (error){
        console.error(error.message);
        res.status(500).json({success:false,message: 'Server Error'});
    }
});

router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message: 'Invalid Product ID'}); 
    }
    try{

        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Product has been deleted'}); 
    } catch (error){

        console.error(error.message);
        res.status(500).json({success:false,message: 'server error'}); 
    }
});

router.get('/', async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error){
        console.error(error.message);
        res.status(500).json({success:false,message: 'Server Error'});
    }
});