import { CDN_URL } from "../utils/constants"

const RestaurantCard =(props)=> {
    const {resData,resMenu} = props
    const {
     cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     sla
    } = resData?.info
     return (
         <div className="m-4 p-4 w-[300px]">
             <img className="res-logo" src= {CDN_URL+cloudinaryImageId}/>
             <h3>{name}</h3>
             <h4>{cuisines.join(',  ')}</h4>
             <h4>{avgRating} ⭐</h4>
             <h4>{sla.deliveryTime} minutes</h4> 
         </div>
     )
 }

 export default RestaurantCard