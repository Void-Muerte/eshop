import eshop_2 from "../../assets/eshop-2.jpg";
import Product from "../Product";
import { products } from "../../lib/product_data";

function index() {
  return (
    <div>
      <section className="flex flex-col justify-center ml-auto mr-auto max-w-[1500px]">
        <section className="max-w-[1500px]">
          <img src={eshop_2} alt="ecommerce" className="w-full h-[400px] z-[-1] mb-[-50px] [mask-image:linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))]" />
        </section>
        <section className="home_row">
        {products.map((product)=><Product key={product.id} {...product} />)}

        </section>
      </section>
    </div>
  );
}

export default index;
