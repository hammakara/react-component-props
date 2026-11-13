import ProductCard from "./ProductCard"
import {products} from "../data/products.js";
function ProductSection() {
  console.log(products) 
  return (
    <section className="product-grid" aria-label="Adobe product catalog">
      {
          products.map((pro)=>(
                <ProductCard
                    key={pro.id}
                    title={pro.title}
                    description={pro.description}
                    price={pro.price}
                    category={pro.category}
                    image={pro.image}
                />
            ))
      }

    </section>
  )
}

export default ProductSection
