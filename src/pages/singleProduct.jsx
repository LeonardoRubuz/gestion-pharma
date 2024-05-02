import { useParams } from "react-router-dom";
import ProductService from "../models/services/ProductService";
import ProductPreview from "../components/ProductPreview";

function SingleProduct() {
    const {id} = useParams();
    const data = ProductService.getProducts();
    const product = data.find((e) => e.id === id )
    return ( 
        <>
            <ProductPreview  product={product} seeMore={true}></ProductPreview>
        </>     
     );
}

export default SingleProduct;