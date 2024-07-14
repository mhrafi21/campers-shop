
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'

const Root = () => {
  return (
    <div>
        <Header />
       <div className='mt-16'>
         <Outlet />
       </div>
        <Footer />
    </div>
  )
}

export default Root