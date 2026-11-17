import ProductCard from "./ProductCard"
import { products } from "../data/products.js";
function ProductSection() {
  return (
    <section className="product-grid" aria-label="Adobe product catalog">
      {
        products.map((pro) => (
          <ProductCard
            key={pro.id}
            title={pro.title}
            description={pro.description}
            price={pro.price}
            category={pro.category}
            image={pro.image}
            stockOut={pro.stockOut}
          />
        ))
      }

    </section>
  )
}

export default ProductSection
