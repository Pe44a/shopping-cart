// eslint-disable-next-line react/prop-types
function ProductCard({id, title, image, price}) {

    return (
    <div id={id} className="product">
        <img className="product-image" src={image} alt={title} />
        <div className="product-title">{title}</div>
        <div className="product-price">{price}$</div>
    </div>
    )
}

export default ProductCard