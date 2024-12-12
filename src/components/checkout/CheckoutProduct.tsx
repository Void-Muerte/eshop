import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BasketProductType} from "../../utils/product_types";
import useBasketContext from '../../context/BasketContext';

function CheckoutProduct({ id, title, price, rating, image, quantity }: BasketProductType) {
  const {dispatch} = useBasketContext()
  const product = {id, title, price, rating, image, quantity};
  return (
    <div>
      <section className="flex max-h-[150px] py-[5px] sm:flex-row flex-col justify-start border my-[20px] shadow-md  bg-white z-[1] space-y-2 text-xs font-medium ">
        <img
          src={image}
          className="w-[180px] max-w-[180px] object-contain"
          title={id}
        />
        <section className='flex flex-1'>
          <section className="flex flex-col flex-1 shadow-sm mx-1 shadow-[#ff9f00] rounded-[5px] px-[10px]  py-[5px] items-start">
            <p className="text-[17px] font-extrabold">{title}</p>
            <p className="mt-[5px]">
            <strong>{Intl.NumberFormat('en',{currency:"USD",style:'currency'}).format(price)}</strong>
            </p>
            <div className="flex flex-row">
              {Array.from({ length: rating }).map((_, i) => {
                return (
                  <span className="" key={i}>
                    ⭐
                  </span>
                );
              })}
            </div>
            <div className="my-2 flex flex-row justify-between items-center  w-full">
            <button className=" max-w-max flex justify-center hover:text-[#ff9f00] items-center text-[#111]" title='remove from cart' onClick={()=>dispatch({type:"REMOVE_FROM_BASKET",payload:{...product}})}>
              <RemoveShoppingCartIcon className="max-w-[100px]"  />
            </button>
            <section className='flex text-black text-xl gap-3 py-[10px] font-medium flex-row items-center justify-center px-[5px]'>
              <span className='px-2'>Quantity:</span>
              <button className='text-black font-medium hover:text-white border border-transparent hover:bg-rose-900' onClick={()=>dispatch({type:'REMOVE_FROM_BASKET', payload:{...product}})}><RemoveIcon /></button>
              <span className='text-xl border px-4'>{quantity}</span>
              <button className='text-black border border-transparent hover:bg-[#ff9f00] hover:text-white px-2' onClick={()=>dispatch({type:"ADD_TO_BASKET", payload:{...product, quantity:1}})}><AddIcon /></button>
              
            </section>
          </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default CheckoutProduct;
