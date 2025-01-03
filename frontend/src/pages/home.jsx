// import Button from "../components/Button";
// import Sectiontitle from "../components/Sectiontitle";
// import Slider from "../components/Slider";
// import ProductCard from "../components/ProductCard";
// import { FaArrowUp } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import useproducts from "../hooks/useproducts";
// import { useSelector } from "react-redux";
// import Hero  from "../components/hero";


// export default function home() {
  
//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   const{ products, isLoading, error } = useproducts("limit=15&skip=35");


//   return (
//     <>
//      <Hero/>
//     <div className={`container-x transition-colors duration-300 ${darkMode ?"bg-slate-900":""}`}>
//     <Sectiontitle text="Today's"/>
//     <h3 className={`heading ${darkMode ? "text-white" : ""}`}>Flash Sales</h3>

//     <Slider/>

//     <Link to={'/products'} className="font-medium rounded-xl bg-primary center text-white h-14 w-56 mx-auto my-16"> View All Products </Link>
    
//     <Sectiontitle text="Categories"/>
 
//     <h3 className={`heading ${darkMode ? "text-white" : ""}`}>
//       Browse By Category</h3>
//     {/* todo */}
//     <Sectiontitle text="This Month"/>

//     <div className="flex justify-between mb-16">
//     <h3 className={`heading ${darkMode ? "text-white" : ""}`}>
//       Best Selling Products</h3>
//     <Button className="h-14 w-40">View All</Button>

//     </div>
// <div className="flex gap-7">
// {products?.slice(0,4)?.map((item)=>(
//           <ProductCard 
//           id={item.id}
//           image={item.thumbnail}
//           name={item.title}
//           price={item.price}
//           discountPercentage={item.discountPercentage}
//           rating={item.rating}
//         />
      
    
//     ))}

// </div>

//     <Sectiontitle text="Our Products"/>
//     <div className="flex gap-7">
// {products?.slice(4,8)?.map((item)=>(
//           <ProductCard 
//           id={item.id}
//           image={item.thumbnail}
//           name={item.title}
//           price={item.price}
//           discountPercentage={item.discountPercentage}
//           rating={item.rating}
//         />
//         ))}
        
//         </div>
//     <Sectiontitle text="Featured"/>

//     <h3 className={`heading ${darkMode ? "text-white" : ""}`}>New Arrival</h3>

//     {/* <NewArrivalGrid/> */}
//     <a href="#top" className="my-5 w-12 h-12 bg-gray-200 rounded-full bdr block center text-2xl ml-auto">
//     <FaArrowUp />
//     </a>
//     </div>
//  </>
//   );
// }






import Button from "../components/Button";
import NewArrivalGrid from "../components/NewArrivalGrid";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Slider from "../components/Slider";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import Hero  from "../components/hero";
// import Timer from "../components/Timer";
// import BrowserCategories from "../components/BrowserCategories";


export default function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const { products, isLoading, error } = useProducts("?limit=15&skip=35");

  return (
    <>
      <Hero/>
      {/* <Timer /> */}

    <div
      className={`container-x transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : ""
      } `}
    >
      <SectionTitle text="Today's" />
      <h3 className={`heading ${darkMode ? "text-white" : ""} `}>
        Flash Sales
      </h3>

      <Slider />

      <Link
        to={"/products"}
        className="font-medium rounded bg-primary center text-white h-14 w-56 mx-auto my-16"
      >
        {" "}
        View All Products{" "}
      </Link>

      <SectionTitle text="Categories" />

      <h3 className={`heading ${darkMode ? "text-white" : ""} `}>
        Browse By Category
      </h3>

      {/* todo */}
      <SectionTitle text="This Month" />

      <div className="flex justify-between my-16">
        <h3 className={`heading ${darkMode ? "text-white" : ""} `}>
          Best Selling Products
        </h3>
        <Button className="h-14 w-40">View All</Button>
      </div>
      <div className="flex gap-7">
        {products?.slice(0, 4)?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>

      <SectionTitle text="Our Products" />
      <div className="flex gap-7">
        {products?.slice(4, 8)?.map((item) => (
          <ProductCard
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
      <SectionTitle text="Featured" />
      <h3 className={`heading ${darkMode ? "text-white" : ""} `}>
        new arrival
      </h3>

      <NewArrivalGrid />
      {/* <BrowserCategories /> */}

      <a
        href="#top"
        className="my-5 w-12 h-12 bg-gray-200 rounded-full block center text-2xl ml-auto"
      >
        <FaArrowUp />
      </a>
    </div>
    </>
  );
}