import { Visibility  } from "@material-ui/icons"
import axios from "axios"
import { useState ,useEffect } from "react"
import "./WidgetSm.css"

const WidgetSm = () => {
    const [newUsers,setNewUsers] =useState([])
    useEffect(() => {
        const getNewUSers = async()=>{
         try {
         const res =await axios.get("http://localhost:8800/api/users?new=true",{headers : {token:"Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjA3NjcwOTQ3NTVhZDgzZDg4MTEyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ2NDcwNywiZXhwIjoxNjU1MDU2NzA3fQ.8g4z0DZEvMV-kjYrtCuJUpIP-euTGI6avnYWEYczROI"}})
         setNewUsers(res.data)
        }catch(err) {
            console.log(err)
        }
     }
     getNewUSers()
    }, [])
    
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map(user=>(
            <li className="widgetSmListItem">
                <img src={user.profilePic||"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default WidgetSm