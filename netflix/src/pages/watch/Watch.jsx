import { ArrowBackIosOutlined, Movie } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"
import "./Watch.scss"

const Watch = () => {
  const location =useLocation()
 const movie = location.movie
 console.log(location)
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
            <ArrowBackIosOutlined/>
            Home
        </div></Link>
        <video  className="video" autoPlay progress controls src={movie.video}/>
    </div>
  )
}

export default Watch