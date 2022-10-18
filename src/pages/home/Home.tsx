import Navbar from '../../components/Navbar'
import Pagination from '../../components/Pagination'
import SideBar from '../../components/SideBar'
import Tables from '../../components/Tables'
import Widgets from '../../components/Widgets'
import './home.css'

const Home = () => {
  
  return (
    <div className='home'>
      <SideBar />
      <div className="home__wrapper">
        <Navbar />
      </div>
      <div className="main">
        <Widgets />
        <Tables />
        <Pagination />
      </div>
    </div>
  )
}

export default Home