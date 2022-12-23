import React from 'react'
import Hotitemcard from './Hotitemcard'
import "../styles/Hotaccessoriess.css"

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover } alt="Cover" />
        </div>


             <div>
               {
                music && music.map((item,index)=>(
                    <Hotitemcard key={item.image} name ={item.name} price={item.price} image={item.image} index={index}/>
                ))
               }

             {   
                smartDevice && smartDevice.map((item,index)=>(
                    <Hotitemcard key={item.image} name ={item.name} price={item.price} image={item.image} index={index}/>
                ))
                }
                 {   
                home && home.map((item,index)=>(
                    <Hotitemcard key={item.image} name ={item.name} price={item.price} image={item.image} index={index}/>
                ))
                }
                 {   
                lifeStyle && lifeStyle.map((item,index)=>(
                    <Hotitemcard key={item.image} name ={item.name} price={item.price} image={item.image} index={index}/>
                ))
                }
                 {   
                mobileAccessories && mobileAccessories.map((item,index)=>(
                    <Hotitemcard key={item.image} name ={item.name} price={item.price} image={item.image} index={index}/>
                ))
                }
            </div>

    </div>
  )
}

export default HotAccessories