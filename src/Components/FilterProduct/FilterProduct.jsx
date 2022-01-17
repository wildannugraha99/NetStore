import React,{useState,useContext} from 'react'
import { filterContext } from '../FilterContext/FilterContext';
import {useHistory,useLocation } from "react-router-dom";
import "./FilterProduct.scss"
import close from '../../Assets/icons/close.svg'
import reset from '../../Assets/icons/reset.svg'

export default function FilterProduct({dataCategories}) {
  let history = useHistory();
  let location = useLocation();
  
  const {filterShow,setFilterShow} = useContext(filterContext)
 
  function handleClickData(e) {
      const value = e.target.value
     
      history.push({
        pathname: "/Product",
        search: `${value}`,
        state:{
          name:value
        }
      })
    }

  function closeFilter() {
    setFilterShow(false)
  }

  function resetFilter() {
    history.push({
      pathname: "/Product",
      search: "",
      state: undefined
    })
  }

  return (
    <div className={filterShow ? "filter_container" : "filter_container-hide"}>
      <div className="filter_header">
        <div className="filter_title">Filter Product's</div>
        <button className='close_icon' onClick={closeFilter}>
          <img src={close} alt="" />
        </button>
      </div>
      <ul>
        {dataCategories.map((item,idx) => (
          <div className="filter_list" key={idx}>
            <form>
              <input type="radio" 
                name="category" 
                id={item} 
                value={item} 
                onChange={handleClickData}
                checked={location.search === `?${item}` ? true : false}
                />
              <span className='box'></span>
              <label htmlFor={item}>
                {item}
              </label>
            </form>
          </div>
        ))}
      </ul>

      <div className='button_reset'>
        <button className='reset_filter' 
          onClick={resetFilter}>
          <img src={reset} alt="" />
          Reset filter
        </button>
      </div>
    </div>
  )
}
