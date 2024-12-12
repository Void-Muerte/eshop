import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductType } from '../../utils/product_types';
import useBasketContext from '../../context/BasketContext';
function index({id, title, price, rating, image}:ProductType) {
  const {dispatch} = useBasketContext()
  return (
    <div>
        <section className="flex  flex-col justify-center border  m-[10px] p-[20px] shadow-md max-w-[400px] min-w-[300px] bg-white z-[1] space-y-2 text-xs font-medium ">
            <section className="h-[100px] mb-[15px]" >
                <p className="product_title">{title}</p>
                <p className="mt-[5px]">${price}</p>
                <div className="flex flex-row">
                  {
                    Array.from({length:rating}).map((_,i)=>{return <span className='' key={i}>⭐</span>})
                  }
                </div>
            </section>
            <img src={image} className='max-h-[200px] w-full object-contain mt-[20px] mr-0 mb-0 ml-[15px]' title={id}/>
            <div className='flex items-center justify-center'>
            <button className=' max-w-max flex justify-center hover:text-[#ff9f00] items-center' onClick={()=>dispatch({type:'ADD_TO_BASKET', payload:{id, title, price, rating, image,quantity:1}})}><AddShoppingCartIcon className='max-w-[100px]' /></button>
            </div>
        </section>
    </div>
  )
}

export default index