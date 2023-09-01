import React from 'react'
import image1 from '../../images/08Q3_homepage-refresh_banner-p-a-s-desktop.webp'
import image2 from '../../images/08Q3_homepage-refresh_banner-rugs-desktop.webp'
import image3 from '../../images/08Q3_homepage_bts-sale_desktop_v1.webp'

export const ExampleCarouselImage1 = () => {
  return (
    <img src={image1} style={{height:"90vh",filter:"brightness(70%)"}}></img>
  )
}
export const ExampleCarouselImage2 = () => {
  return (
    <img src={image2} style={{height:"90vh" ,filter:"brightness(70%)"}}></img>
  )
}
export const ExampleCarouselImage3 = () => {
  return (
    <img style={{height:"90vh",filter:"brightness(70%)"}} src={image3}></img>
  )
}
