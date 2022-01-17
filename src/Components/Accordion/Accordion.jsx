import React,{useState} from 'react'
import "./Accordion.scss"
import down from '../../Assets/icons/chevron.svg'

export default function Accordion({children}) {

  const [isOpen, setIsOpen] = useState(false);

  function openAccordion() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='accordion_container'>
      <button className='accordion_button' onClick={openAccordion}>
        Description
        <img src={down} alt="" className={isOpen ? "up" : "down"}/>
      </button>
      <div className={isOpen ? "accordion_body" : "accordion_body-hide"}>
        {children}
      </div>
    </div>
  )
}
