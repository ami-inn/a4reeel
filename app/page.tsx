import Hero from '@/components/Hero'
import { Header } from '@/components/layout/Header'
import { PromptGrid } from '@/components/PromptGrid'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <PromptGrid/>
    </>
  )
}

export default Home