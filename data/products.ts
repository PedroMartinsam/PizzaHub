export interface Product {
  id: string
  title: string
  description: string
  price: number
  image: string
  type: 'pizza' | 'bebida'
  category: string
  badge?: string
  sizes?: Array<{ label: string; price: number }>
  crusts?: Array<{ label: string; price: number }>
  extras?: Array<{ label: string; price: number }>
}

export const products: Product[] = [
  {
    id: 'pepperoni',
    title: 'Pizza Pepperoni',
    description: 'Molho artesanal, mussarela premium e pepperoni crocante.',
    price: 49.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    type: 'pizza',
    category: 'Tradicionais',
    badge: 'Mais Pedida',
    sizes: [
      { label: 'Pequena', price: 0 },
      { label: 'Média', price: 12 },
      { label: 'Grande', price: 20 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 8 },
    ],
    extras: [
      { label: 'Borda de catupiry', price: 7 },
      { label: 'Extra queijo', price: 6 },
    ],
  },
  {
    id: 'pizza-especial',
    title: 'Especial',
    description: 'Mistura premium de queijos com toque de manjericão.',
    price: 54.9,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80',
    type: 'pizza',
    category: 'Especiais',
    badge: 'Nova',
    sizes: [
      { label: 'Média', price: 0 },
      { label: 'Grande', price: 15 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 10 },
    ],
    extras: [
      { label: 'Tomate seco', price: 5 },
      { label: 'Cebola caramelizada', price: 4 },
    ],
  },
  {
    id: 'chocolate',
    title: 'Pizza de Chocolate',
    description: 'Cobertura cremosa de chocolate com morango e caramelo.',
    price: 47.9,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    type: 'pizza',
    category: 'Doces',
    badge: 'Especial',
    sizes: [
      { label: 'Média', price: 0 },
      { label: 'Grande', price: 12 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 8 },
    ],
    extras: [
      { label: 'Chocolate branco', price: 6 },
      { label: 'Sorvete', price: 8 },
    ],
  },
  {
    id: 'margherita',
    title: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela e manjericão fresco.',
    price: 45.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    type: 'pizza',
    category: 'Tradicionais',
    sizes: [
      { label: 'Pequena', price: 0 },
      { label: 'Média', price: 10 },
      { label: 'Grande', price: 18 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 8 },
    ],
    extras: [
      { label: 'Azeitonas', price: 4 },
      { label: 'Tomate seco', price: 5 },
    ],
  },
  {
    id: 'calabresa',
    title: 'Pizza Calabresa',
    description: 'Calabresa fatiada, cebola e queijo derretido.',
    price: 48.9,
    image: 'https://www.swift.com.br/arquivos/ids/213885/618283-pizza-artesanal-calabresa_inn.jpg?v=639051131497770000',
    type: 'pizza',
    category: 'Tradicionais',
    sizes: [
      { label: 'Média', price: 0 },
      { label: 'Grande', price: 13 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 9 },
    ],
    extras: [
      { label: 'Catupiry', price: 6 },
      { label: 'Cebola caramelizada', price: 4 },
    ],
  },
  {
    id: 'frango-catupiry',
    title: 'Pizza Frango com Catupiry',
    description: 'Frango desfiado, catupiry e creme de cebola.',
    price: 52.9,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80',
    type: 'pizza',
    category: 'Especiais',
    sizes: [
      { label: 'Média', price: 0 },
      { label: 'Grande', price: 14 },
    ],
    crusts: [
      { label: 'Tradicional', price: 0 },
      { label: 'Recheada', price: 10 },
    ],
    extras: [
      { label: 'Milho', price: 4 },
      { label: 'Bacon', price: 6 },
    ],
  },
  {
    id: 'coca-cola-2l',
    title: 'Coca-Cola 2L',
    description: 'Refrigerante gelado para acompanhar sua pizza.',
    price: 12.0,
    image: 'https://i3-imagens-prd.araujo.com.br/webp/8591/117437_7894900027013_3.webp',
    type: 'bebida',
    category: 'Refrigerantes',
  },
  {
    id: 'suco-laranja',
    title: 'Suco de Laranja Natural',
    description: 'Suco fresco e refrescante, sem adição de açúcar.',
    price: 10.5,
    image: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/12/suco-de-laranja.jpg?w=1200&h=1200&crop=1',
    type: 'bebida',
    category: 'Sucos',
  },
  {
    id: 'agua-mineral',
    title: 'Água Mineral',
    description: 'Água mineral gelada em garrafa de 500ml.',
    price: 6.0,
    image: 'https://cdn.awsli.com.br/1030/1030675/produto/167861908e98f329be9.jpg',
    type: 'bebida',
    category: 'Outros',
  },

  {
    id: 'Skol',
    title: 'Cerveja Skol 350ml',
    description: 'Lata de 350ml.',
    price: 6.0,
    image: 'https://padariavillalourdes.com.br/web/image/product.template/2213/image_1024?unique=67d78a1',
    type: 'bebida',
    category: 'Outros',
  },
  
 

]
