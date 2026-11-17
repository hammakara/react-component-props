function ProductCard({ title, description, price, category, image, stockOut }) {
  return (
    <div className="product-card">
      <img
        className={stockOut ? "stockOut" : ""}
        src={image}
        alt="Adobe After Effects"
        width="115"
        height="115"
      />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{stockOut ? "Stock Out" : price}</span>
        <span>{category}</span>
      </div>
    </div>
  )
}
export default ProductCard
