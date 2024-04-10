import Cart from "../models/cart";
import Product from "../models/product";
import User from "../models/user";
import {StatusCodes} from  'http-status-codes';

export const getCartByUserId = async (req, res) =>{
    const {userId} = req.params;
    try {
        const cart = await Cart.findOne({userId}).populate("products.productId");
        const cartData ={
            products: cart.products.map((item)=>({
                productId: item.productId._id,
                name: item.productId.name,
                quantity: item.quantity,
            })),
        };
        return res.status(StatusCodes.OK).json(cartData);
    } catch (error) {
    }
};


export const addItemToCart = async (req, res) => {
    const {userId, productId, quantity} = req.body;
    try {
        let cart = await Cart.findOne({userId});
        if(!cart){
            cart = new Cart({userId, products: []});
        }
        const existProductIndex = cart.products.findIndex((item) => item.productId.toString() === productId);  // find the index
        if (existProductIndex !== -1) {
            cart.products[existProductIndex].quantity  += quantity;
        }else{
            cart.products.push({productId, quantity});
        };
        await cart.save();
        return res.status(StatusCodes.OK).json({cart});
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({error: "Internal  Server Error"})
    }
};

export const removeFromCart = async (req, res)  => {
    const { userId, productId} =req.body;
    try {
        let cart =await Cart.findOne({userId});
        if(!cart){
            return res.status(StatusCodes.NOT_FOUND).json({error: "Cart not found!"});
        }
         cart.products = cart.products.filter((product) => product.productId && product.productId.toString() !== productId);
         await cart.save();
         return res.status(StatusCodes.OK).json({cart});
    } catch (error) {  
    }
};

export const updateProductQuantity = async (req,res)=>{
    const {userId, productId, quantity} =req.body;
    try {
        let cart  = await getUserCart(userId);
        if(!cart){
            return res.status(StatusCodes.NOT_FOUND).json({error: "Cart not found!"});
        }
        const product = cart.products.find((item)=> item.productId.toString()===productId);
        if(!product){
            return res.status(StatusCodes.NOT_FOUND).json({error:"The product is not in the cart."});
        }
        product.quantity = quantity;
        await cart.save();
        return res.status(StatusCodes.OK).json({cart});
    } catch (error) {
        
    }
}