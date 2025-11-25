import ProductsContainer from '@/components/products/ProductsContainer';


const ProductsPage = async ({
  searchParams,
}: {
  searchParams?: { layout?: string; search?: string };
  }) => {
  const params = searchParams || {};
  const layout = params.layout ?? 'grid';
  const search = params.search ?? '';


  return <ProductsContainer layout={layout} search={search}  />;
};

export default ProductsPage;