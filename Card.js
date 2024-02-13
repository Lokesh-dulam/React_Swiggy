import {CDN_URL} from "./utils/utilities"
const Card=(props)=>{
    const {resData}=props 
    const {
        name,areaName,avgRatingString
    }=resData?.info;
    return(
        <div className="card">
            <img className="logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    )
}
export default Card 