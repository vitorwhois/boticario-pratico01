import {Product} from './app/shared/models/products';

export const sample_products: Product[] = [

  {
    id: '1',
    name: 'Corretivo HD',
    price: 29.99,
    tags: ['Best seller'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/images/duo-stick.png',
    collection: ['Maquiagem', 'Pele']
  },
  {
    id: '2',
    name: 'Base Líquida Matte',
    price: 39.99,
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/images/foundation-bottles-mockup1.png',
    collection: ['Maquiagem', 'Pele']
  },
  {
    id: '3',
    name: 'Batom Matte',
    price: 19.99,
    tags: ['New'],
    favorite: true,
    stars: 4.2,
    imageUrl: 'assets/images/foundation-bottles-mockup2.png',
    collection: ['Maquiagem']
  },
  {
    id: '4',
    name: 'Hidratante Facial SPF 30',
    price: 49.99,
    favorite: true,
    stars: 4.7,
    imageUrl: 'assets/images/foundation-pump-bottles-mockup1.png',
    collection: ['Cuidados com a Pele']
  },
  {
    id: '5',
    name: 'Paleta de Sombras Neutras',
    price: 59.99,
    favorite: false,
    stars: 4.3,
    imageUrl: 'assets/images/tottle-bottles-mockup-opened-and-closed1.png',
    collection: ['Maquiagem']
  },
  {
    id: '6',
    name: 'Creme para Contorno dos Olhos',
    price: 34.99,
    favorite: true,
    stars: 4.6,
    imageUrl: 'assets/images/liquid-lipstick-tube-mockup-top-view1duo-tonne-bluser.png',
    collection: ['Cuidados com a Pele']
  },

];
