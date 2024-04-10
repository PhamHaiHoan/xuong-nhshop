import {Router} from  'express';
import { addItemToCart, getCartByUserId, removeFromCart, updateProductQuantity } from '../controllers/cart';

const router = Router();

router.post('/cart/add-to-cart', addItemToCart);
router.get('/cart/:userId', getCartByUserId);
router.delete('/cart/remove-cart', removeFromCart);
router.put('/cart/update-product-quantity', updateProductQuantity);
export default router;