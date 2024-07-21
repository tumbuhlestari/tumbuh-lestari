import ProductCard from './product-card';

async function fetchProducts() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
}

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className='grid md:grid-cols-3 gap-8 py-16'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
