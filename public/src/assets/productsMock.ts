// export const products = [
//     {
//         id: 1,
//         price: 350,
//         mrp : 349,
//         category : 'Cement',
//         sku: 'UT123',
//         name: 'Ultratech Cement Bag',
//         brand: 'Ultratech',
//         review: 4.5,
//         grade: 'Grade A',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s'
//     },
//     {
//         id: 2,
//         mrp : 500,
//         price: 300,
//         category : 'Cement',
//         sku: 'UT123',
//         name: 'ACC Cement Bag',
//         brand: 'ACC',
//         review: 4.5,
//         grade: 'Grade A',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://5.imimg.com/data5/UG/RV/MY-3268922/acc-cement.jpg"
//     },
//     {
//         id: 3,
//         mrp : 500,
//         price: 320,
//         category : 'Cement',
//         sku: 'UT123',
//         name: 'Dalmia Cement Bag',
//         brand: 'Dalmia',
//         review: 4.5,
//         grade: 'Grade B',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://5.imimg.com/data5/UV/PU/XW/SELLER-68311677/dalmia-cement.jpg"
//     },
//     {
//         id: 4,
//         mrp : 500,
//         price: 330,
//         category : 'Cement',
//         sku: 'UT123',
//         name: 'Bangur Cement Bag',
//         brand: 'Bangur',
//         review: 4.5,
//         grade: 'Grade B',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://5.imimg.com/data5/SELLER/Default/2021/1/GW/AM/FR/8514149/bangur-cement-ppc-500x500.jpeg"
//     },
//     {
//         id: 5,
//         mrp : 500,
//         price: 340,
//         sku: 'UT123',
//         category : 'Cement',
//         name: 'Ultratech Cement Bag',
//         brand: 'Ultratech',
//         review: 4.5,
//         grade: 'Grade C',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s"
//     },
//     {
//         id: 6,
//         mrp : 500,
//         price: 310,
//         sku: 'UT123',
//         category : 'Cement',
//         name: 'Ultratech Cement Bag',
//         brand: 'Ultratech',
//         review: 4.5,
//         grade: 'Grade C',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s"
//     },
//     {
//         id: 7,
//         mrp : 500,
//         price: 325,
//         sku: 'UT123',
//         category : 'Cement',
//         name: 'Ultratech Cement Bag',
//         brand: 'Ultratech',
//         review: 4.5,
//         grade: 'Grade D',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFEuHS3BhfpRBf3PVQFuBDAjPqGJY2wkKzg&s"
//     },
//     {
//         id: 8,
//         mrp : 500,
//         price: 315,
//         sku: 'UT123',
//         category : 'Walling',
//         name: 'Shalimar Paints',
//         brand: 'InfraMarket',
//         review: 4.5,
//         grade: 'Grade ',
//         bagSize: '50kg',
//         minOrderQty: 1,
//         maxOrderQty: 100,
//         inStock: 50,
//         image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shalimarpaints.com%2Fproducts%2Fsuperlac-premium-hi-gloss-enamel&psig=AOvVaw35F1CcZgUExl3gYKhJnEuN&ust=1729604081200000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjE-7jLn4kDFQAAAAAdAAAAABA1"
//     },
// ];
import { setProducts } from "../redux/action";
import { useDispatch } from "react-redux";
const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:8080/GetProducts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
const products = getProducts();
export default products;

