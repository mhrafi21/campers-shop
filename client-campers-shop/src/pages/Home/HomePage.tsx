import React from 'react'
import Hero from './Hero'
import BestSelling from './BestSelling'
import Category from './Category'
import FeaturedProducts from './FeaturedProducts'
import Faq from './Faq'
import VideoBlogs from './VideoBlogs'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BestSelling />
      <Category /> 
      <FeaturedProducts />
      <VideoBlogs />
      <Faq />
    </div>
  )
}

export default HomePage