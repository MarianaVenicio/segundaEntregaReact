let productos = [
  {
    id: "1",
    categoria: "capilar",
    name: "anticaspa",
    stock: 10,
    price: 1000,
    foto: "https://res.cloudinary.com/dbkoxmpas/image/upload/v1677330214/shampoo-anticaspa_mxudsn.jpg",
  },
  {
    id: "2",
    categoria: "facial",
    name: "jabones faciales",
    stock: 5,
    price: 2000,
    foto: "https://res.cloudinary.com/dbkoxmpas/image/upload/v1677330216/jabones_coropales_okegim.jpg",
  },
  {
    id: "3",
    categoria: "corporal",
    name: "varios",
    stock: 3,
    price: 500,
    foto: "https://res.cloudinary.com/dbkoxmpas/image/upload/v1677330221/2_7_2022_2_07_03_p._m._hejxyj.png",
  },
];

export const mFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 1000);
  });
};
