import React from 'react'
import image1 from '../../images/CategoryImages/14b256c74d8f9ed141752b9047d8e148_3b97a129-a56c-482f-a65c-5dc46aea5da6_360x.webp'
import image2 from '../../images/CategoryImages/2223a91eafc05ee7542503d83cdab30d_8beab81f-e028-4055-95b3-9c89a1a68eca_360x.webp'
import image3 from '../../images/CategoryImages/880a43a0507c26ace587238bc6fe11e2_d07d6e61-d8eb-4540-a04c-4daef9a72138_360x.webp'
import image4 from '../../images/CategoryImages/Indoor-Outdoor_360x.webp'
import image5 from '../../images/CategoryImages/Unpasted_360x.webp'
import image6 from '../../images/CategoryImages/07Q3_homepage-refresh_new-arrivals_color-theory_720x.webp'
import image7 from '../../images/CategoryImages/06Q2_homepage_real-grasscloth_1325x1150_v2_720x.jpg'
import cimage1 from '../../images/Colors/Black.webp'
import cimage2 from '../../images/Colors/Blue.webp'
import cimage3 from '../../images/Colors/Green.webp'
import cimage4 from '../../images/Colors/N.webp'
import cimage5 from '../../images/Colors/AllColors.webp'
import Timage1 from '../../images/Trends/06Q2_homepage_Chinoiserie_New_720x.webp'
import Timage2 from '../../images/Trends/06Q2_homepage_custom_1325x1150_339e2b95-39b2-4dae-a69c-647729f34399_720x.webp'

export const Data = {
    Category:[
        {
            id:Math.random(),
            name:"Best Sellers",
            img:image1,
        },
        {
            id:Math.random(),
            name:"Peel and Stick Wallpaper",
            img:image2,
        },
        {
            id:Math.random(),
            name:" Non-Pasted Wallpaper",
            img:image3,
        },
        {
            id:Math.random(),
            name:" Indoor/Outdoor Rugs",
            img:image4,
        },
        {
            id:Math.random(),
            name:" Wall Murals",
            img:image5,
        },
        {
            id:Math.random(),
            name:" New Arrivals",
            img:image6,
            details:'Discover our latest styles and newest products.'
        },
        {
            id:Math.random(),
            name:" Authentic Grasscloth",
            img:image7,
            details:'Invite natural beauty into any room with our premium, authentic Grasscloth collection.'

        },
    ],
    Colors:[
{
    id:Math.random(),
    name:"Black",
    img:cimage1,
},
{
    id:Math.random(),
    name:"Blue",
    img:cimage2,
},
{
    id:Math.random(),
    name:"Green",
    img:cimage3,
},
{
    id:Math.random(),
    name:"Neutral",
    img:cimage4,
},
{
    id:Math.random(),
    name:"All Colors",
    img:cimage5,
},
    ],
    Trends:[
        {
            id:Math.random(),
            name:" Trend Alert: Chinoiserie",
            img:Timage1,
            details:'Add artistic beauty to your space with our.'
        },
        {
            id:Math.random(),
            name:" Custom",
            img:Timage2,
            details:'Recolor Tempaper designs and create your own custom .'
        }
    ]
    
}
