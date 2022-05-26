import "./Home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
// import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import {useState,useEffect, useMemo} from "react";
import axios from "axios"
const Home = () => {
  
  const MONTHS = useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"  
 ],[]) 
 const [userStats,setUserSatate] = useState([])

 useEffect(() => {
   const getStats = async()=>{
      try {
         const res=await axios.get("http://localhost:8800/api/users/stats",{headers : {token:"Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjA3NjcwOTQ3NTVhZDgzZDg4MTEyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ3NzM4NCwiZXhwIjoxNjU1MDY5Mzg0fQ.IfVjs631gLCHanDM5ABG1JqJ4ymS8IM91tqAp3EVVY8"}})
         const statsList =res.data.sort(
           function(a,b){
             return a._id-b._id
           }
         )
        statsList.map((item)=> 
         setUserSatate((prev)=>[
           ...prev,
           {name:MONTHS[item._id-1],"New User":item.total}]))
      } catch (error) {
         console.log(error)
      }
      
   }
   getStats()
 }, [MONTHS])
 console.log(userStats)
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" datakey="New User"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home