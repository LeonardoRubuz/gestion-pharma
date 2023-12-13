import ProductPreview from "../components/ProductPreview";
import ProductService from "../models/services/ProductService"

function ProductsList() {
    const data = ProductService.getProducts()
    return ( 
        <>
            <ul>
                {
                    data.map((e) => 
                        <li>
                            <ProductPreview product={e}></ProductPreview>
                        </li>
                    )
                }
            </ul>
        </>
     );
}

export default ProductsList;