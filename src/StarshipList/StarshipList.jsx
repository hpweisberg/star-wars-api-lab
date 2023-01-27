// import useState:
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services:
import { getAllStarships } from "../services/sw-api";


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])
  // console.log(starshipList)
  
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
      // console.log(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  
  return ( 
    <>
      <h3>STAR WARS STARSHIPS</h3>
      {starshipList.length ?
      <>
      {starshipList.map(starship =>
        <div key={starship.name}>
          <Link to='/starship' state=
          {{starship}} >{starship.name}
          </Link>
        </div>
        )}
      </>
      :
      <>
        <div>Loading your vehchials...</div>
      </>
  }
    </>
  )
}

export default StarshipList