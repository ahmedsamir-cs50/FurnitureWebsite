import React from 'react'
import Slider from '../../Component/Utility/Slider'
import { HomeWelcome } from '../../Component/Home/HomeWelcome'
import { HomeCategory } from '../../Component/Home/HomeCategory'
import { ExclusiveCat } from '../../Component/Home/ExclusiveCat'
import { StaticComponent } from '../../Component/Home/StaticComponent'
import { ColorsCategory } from '../../Component/Home/ColorsCategory'
import { Trends } from '../../Component/Home/Trends'


export const HomePage = () => {
  return (
    <div>
        <Slider/>
        <HomeWelcome/>
        <HomeCategory/>
        <ExclusiveCat/>
        <StaticComponent/>
        <ColorsCategory/>
        <Trends/>

    </div>
  )
}
