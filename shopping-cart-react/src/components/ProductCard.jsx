// eslint-disable-next-line react/prop-types
function ProductCard({key, title, category, image, price}) {

    return (
    <div key={key} className="product">
        <img className="product-image" src={image} alt={title} />
        <div className="product-title">{title}</div>
        <div className="product-price">{price}$</div>
    </div>
    )
}

export default ProductCard