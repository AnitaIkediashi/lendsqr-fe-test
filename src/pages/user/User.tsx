import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'
import UserHeading from '../../components/UserHeading'
import UserInfo from '../../components/UserInfo'
import axios from 'axios'
import '../home/home.css'


const User = () => {

  const [userData, setUserData] = useState<any[]>([])

  const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

  useEffect(() => {
    axios.get(url).then((response) => {
      setUserData(response.data)
      console.log(response.data)
      localStorage.setItem('userData', JSON.stringify(response.data))
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setUserData(response.data)
  //     JSON.parse(localStorage.getItem(response.data))
  //   })
    
  // })

  return (
    <div className='home'>
      <SideBar />
      <div className="home__wrapper">
        <Navbar />
      </div>
      <div className="main">
        <UserHeading data={userData}/>
        <UserInfo data={userData}/>
      </div>
    </div>
  )
}

export default User