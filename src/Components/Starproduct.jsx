import React from 'react'
import "../styles/starproduc.css";
const Starproduct = ({starproduct}) => {
  return (
    <div className='starProduct'>
        <div><a href={starproduct[0].url}><img src={starproduct[0].image} alt="!st product" /></a></div>
        <div>
            <a href={starproduct[1].url}><img src={starproduct[1].image} alt="1stproduct" /></a>
            <a href={starproduct[2].url}><img src={starproduct[2].image} alt="1stproduct" /></a>
            <a href={starproduct[3].url}><img src={starproduct[3].image} alt="1stproduct" /></a>
        </div>
    </div>
  )
}

export default Starproduct