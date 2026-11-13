import ProductCard from "./ProductCard"
function ProductSection() {
  return (
    <section className="product-grid" aria-label="Adobe product catalog">
      {/* product card */}
      <ProductCard
        title="Adobe After Effects"
        description="Adobe After Effects"
        price="27.99"
        category="Graphic Design"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8z4bUROnyZLP0G2Xkrcv8uQxiF7nnBvC3OpgMyW3tg&s=10"
      />
    <ProductCard
        title="NODE JS "
        description="Backend Develop "
        price="27.99"
        category="Web Development"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPZsekelowupKcEepE6piRNXy1drJE9BwXY3cGONAzA&s=10"
    />
    <ProductCard
        title="REACT JS AND TAILWINDCSS  "
        description="Frontend Develop "
        price="27.99"
        category="Web Development"
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y_dEwIYSDLkAHVN92cnICONJ6PEvQ8yXoyrj93zkVg&s=10"
    />
    </section>
  )
}

export default ProductSection
