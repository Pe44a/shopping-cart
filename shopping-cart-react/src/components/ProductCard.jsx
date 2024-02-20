// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";


function ProductCard({id, title, image, price}) {

    return (
    // id decrement is by -1, so it matches the array list
    <Link to={`/shop/${id - 1}`} className="product">
        <div key={id} id={id} >
            <img className="product-image" src={image} alt={title} />
            <div className="product-title">{title}</div>
            <div className="product-price">{price}$</div>
        </div>
    </Link>
    )
}

export default ProductCard