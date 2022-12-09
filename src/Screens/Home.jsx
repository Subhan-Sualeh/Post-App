import React from 'react'
import CreatePostCard from '../components/CreatePostCard'
import AppBarCmp from '../components/muicomponents/AppbarCmp'

const Home = () => {
  return (
    <div>
      <AppBarCmp/>
      <CreatePostCard/>
    </div>
  )
}

export default Home
