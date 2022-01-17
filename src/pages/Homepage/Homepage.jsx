import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import "./Homepage.scss"
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import Product from "../../Components/Product/Product";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import FilterProduct from "../../Components/FilterProduct/FilterProduct";
import Loading from "../../Components/Loading/Loading"
import chevron from "../../Assets/icons/chevron.svg"
import Footer from "../../Components/Footer/Footer";
import Slidder from "../../Components/Slidder/Slidder";

export default function Homepage() {
  let location = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [dataAPI, setDataAPI] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueSort, setValueSort] = useState(null);

  function pushSort(e) {
    const val = e.target.value
    setValueSort(val)
   }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  window.addEventListener('scroll', handleScroll);

 async function requestData() {
    const filteredData = await fetch(location.state === undefined ? `https://fakestoreapi.com/products?sort=${valueSort}` : 
      `https://fakestoreapi.com/products/category/${location.state.name}`)
      const filteredDataJson = await filteredData.json();  
      setDataAPI(filteredDataJson);
      
    const categoryListData = await fetch('https://fakestoreapi.com/products/categories')
      const categoryListJson = await categoryListData.json()
        setDataCategories(categoryListJson);
        setIsLoading(false)
  }

  useEffect(() => {
    requestData();
    setIsLoading(true)
    return () => {
      setDataAPI([]); 
      setDataCategories([]);
    }
  }, [location.search,valueSort])

  return (
    <div>
      {isLoading ? (
        <div><Loading/></div>
      ) : (
        <div>
        <NavbarComponent scrollPosition={scrollPosition} />
      
        <div className="main_content">
        <div><Slidder/></div>
          <div className="breadcrumb_homepage">
            <Breadcrumb/>
            <div className="select_wrapper">
              <label htmlFor="sort">Sort by :</label>
              <div className="select_border">
                  <select name="sort" id="sort" onChange={pushSort}>              
                      <option value="">Ascending</option>
                      <option value="desc">Descending</option>   
                  </select>
                <img src={chevron} alt="" />
              </div>
            </div>
          </div>

        

          <div className="content">
            <FilterProduct dataCategories={dataCategories} />
            <Product loading={isLoading} data={dataAPI}/>
          </div>
        </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}
