import Hero from '@/components/Hero'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { PromptGrid } from '@/components/PromptGrid'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <PromptGrid/>
    <Footer/>
    </>
  )
}

export default Home