import React from 'react';
import { useCart } from '../contexts/CartContext'; // Importar el hook useCart

const products = [
  { id: 1, name: 'IPhone X', price: '$299', image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111864_iphonex.png' },
  { id: 2, name: 'Xiaomi Mi Laptop Pro', price: '$1199', image: 'https://i.blogs.es/410239/xiaomi-mi-laptop-pro-15-ficha/840_560.jpg' },
  { id: 3, name: 'Zeus X Wireless Headphones', price: '$89', image: 'https://redragon.es/content/uploads/2021/04/ZEUS-B.png' },
  { id: 4, name: 'Samsung Galaxy S21', price: '$799', image: 'https://http2.mlstatic.com/D_NQ_NP_950192-MLA74242183335_012024-O.webp' },
  { id: 5, name: 'Dell XPS 13', price: '$1399', image: 'https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg' },
  { id: 6, name: 'Sony WH-1000XM4', price: '$349', image: 'https://www.sony.com.ar/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF' },
  { id: 7, name: 'Apple Watch Series 6', price: '$399', image: 'https://http2.mlstatic.com/D_NQ_NP_899243-MLA46335831583_062021-O.webp' },
  { id: 8, name: 'Google Pixel 6', price: '$599', image: 'https://m.media-amazon.com/images/I/6102cYM0OHL._AC_SL1000_.jpg' },
  { id: 9, name: 'ASUS ROG Strix', price: '$1499', image: 'https://celularesindustriales.com.ar/wp-content/uploads/image-7b7a724a6bd7419b9ca1a1fd96a4a4be.webp' },
  { id: 10, name: 'Logitech MX Master 3', price: '$99', image: 'https://http2.mlstatic.com/D_NQ_NP_827230-MLA46224586033_052021-O.webp' },
  { id: 11, name: 'Acer Predator Helios 300', price: '$1599', image: 'https://m.media-amazon.com/images/I/81g7AiqWrtL._AC_SL1500_.jpg' },
  { id: 12, name: 'Jabra Elite 85t', price: '$229', image: 'https://m.media-amazon.com/images/I/71-3C3aYveL.jpg' },
  { id: 13, name: 'Microsoft Surface Pro 7', price: '$749', image: 'https://m.media-amazon.com/images/I/71VRcitluuL._AC_SL1500_.jpg' },
  { id: 14, name: 'HP Spectre x360', price: '$1299', image: 'https://i5.walmartimages.com/seo/HP-Spectre-x360-13-5-Touchscreen-2-in-1-Laptop-Intel-Core-i7-i7-1195G7-1TB-SSD-Windows-11-Home-14-ea1023dx_4150203e-3c3b-4577-9bb1-cf643f30942f.0a65c5212aebf1d9ab12b2d16f1f8e90.jpeg' },
  { id: 15, name: 'Oculus Quest 2', price: '$299', image: 'https://http2.mlstatic.com/D_NQ_NP_928144-MLU74748659401_022024-O.webp' },
  { id: 16, name: 'Razer DeathAdder Elite', price: '$69', image: 'https://http2.mlstatic.com/D_NQ_NP_919154-MLA32146214431_092019-O.webp' },
  { id: 17, name: 'Nvidia GeForce RTX 3080', price: '$699', image: 'https://s3-sa-east-1.amazonaws.com/saasargentina/Fe87ZZwp5qIP8ntxtFNG/imagen' },
  { id: 18, name: 'Apple MacBook Air', price: '$999', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423' },
  { id: 19, name: 'Bose QuietComfort 35 II', price: '$299', image: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_le_midnight_blue_hero.PNG/_jcr_content/renditions/cq5dam.web.1280.1280.png' },
  { id: 20, name: 'Samsung Galaxy Tab S7', price: '$649', image: 'https://www.manual.ar/thumbs/products/l/1260236-samsung-galaxy-tab-s7.webp' },
];

const ProductList = () => {
  const { addToCart } = useCart(); // Asegúrate de importar useCart

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button 
            className="add-to-cart-button"
            onClick={() => addToCart(product)} 
          >
            Añadir al Carro
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

