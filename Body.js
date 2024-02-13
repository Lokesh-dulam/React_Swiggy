import Card from "./Card"
import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer"
const Body=()=>{ 
  const[ResList,setResList]=useState([])
  const[SearchTxt,setSearchTxt]=useState([])
  const[FRes,setFRes]=useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.45887082812366&lng=78.37302839399565&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
    return ResList.length===0 ? <Shimmer/> :(
      <div>
        <div>
        <div> 
  <input type="search" value={SearchTxt} onChange={(e)=>{
    setSearchTxt(e.target.value)
  }}/><button onClick={()=>{
    const FList=ResList.filter((res)=>res.info.name.toLowerCase().includes(SearchTxt.toLowerCase()))
    setFRes(FList)
  }}>Search</button>
  </div>
        <button className="button btn" 
        onClick={()=>{
        const FilteredCards=ResList.filter(
          (res)=>res.info.avgRatingString>4
        );
        setFRes(FilteredCards);
        }}
        >Click</button>
      </div>
      <div className="body">
            {FRes.map((ResList)=>(
                <Card keys={ResList.info.id} resData={ResList}/>
            ))}
        </div>
        </div>
    )    
}
export default Body