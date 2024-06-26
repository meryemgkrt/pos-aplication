
import Header from "../components/header/Header";
import Categories from "../components/categoies/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";

const HomePages = () => {
  return (
    <div>
        <Header />
      <div className="flex flex-col gap-10 px-6 pb-32 md:pb-0 justify-b etween md:flex-row home">
        <div className="categories overflow-y-auto max-h-[calc(100vh_-_112px)]  md:pb-64">
          <Categories />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto">
          <Products />
        </div>
        <div className="md:mr-0  cart-wrapper min-w-[300px] -mr-[24px] md:-mt-[24px] sm:-mr-[24px] sm:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </div>
  )
}

export default HomePages