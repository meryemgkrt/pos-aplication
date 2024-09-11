import { message } from "antd";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";


const ProductItem = ({ item }) => {
  

  const dispatch = useDispatch();
  const handleClick = () => {
  dispatch(addProduct({...item, quantity:1}));
  message.success("Ürün sepete eklendi");
  };

 
  return (
    <div onClick={handleClick} className="transition-all border cursor-pointer select-none product-item hover:shadow-lg min-h-[180px] max-h-[90px]">
      <div className="product-img ">
        <img
          src={item.img}
          alt=""
          className="object-cover w-full border-b h-28"
        />
      </div>
      <div className="flex flex-col p-3 product-info">
        <span className="font-bold">{item.title}</span>
        <span>{item.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
