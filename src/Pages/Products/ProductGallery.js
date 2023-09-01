import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';




const ProductGallery = ({Data}) => {


  const [mainImage,setMainImage] = useState(Data?.images[0])
  useEffect(() => {
    setMainImage(Data?.images[0])
  }, [Data])
  console.log(Data?.images[0])
  const handleMainImage = (e) => {
    console.log(e.target.currentSrc)
    setMainImage(e.target.currentSrc)
  }

  return (
    <Col md={6} sm ={11}>
      <div>
     
        {
          
          Data?.images[0]?(<div className='  main-image d-flex  justify-content-center'>
           
          <img src={mainImage} alt=''></img>
        </div >):(<h2>Loading,,,,,</h2>)
        }
      
      <div className=' my-3 images-wrapper d-flex flex-row justify-content-evenly'>
      {
     Data?(
      Data?.images.map((image,index)=>{
        return <img key={index} src={image} alt='' value={index} onClick={handleMainImage}></img>})
     ):(null)

      }
     
      
      </div>
      </div>
    </Col>
  )
}

export default ProductGallery
// originalHeight ={"100px"}
// originalWidth={"100px"}
// thumbnailHeight ={"50px"}
// thumbnailWidth ={"50px"}