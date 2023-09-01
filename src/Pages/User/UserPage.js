import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { LogOutHook } from '../../Component/hooks/Auth/logOut-hook'
import USERWISHLIST from '../../Component/hooks/Wish/USER-WISHLIST'
import UserWish from '../../Component/User/UserWish'
import { Link } from 'react-router-dom'

const UserPage = () => {
    const  [WishItems,loading]=USERWISHLIST()
    const user=JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const [handleLogOut] =LogOutHook()
    console.log(WishItems)
  return (
   <Container style={{minHeight:"100vh"}}>
    <Row className='my-5'>
        <Col>
        <Card >
      <Card.Header as="h5">Hello, {user?.name.toUpperCase()}</Card.Header>
      <Card.Body>
        <Card.Text> Your Email:{user?.email}</Card.Text>
        <Card.Text> Your phone number:{user?.phone}</Card.Text>
       
       
        <Link to="/"><Button variant="dark" className='mx-auto' style={{borderRadius:"0",width:"50%"}} onClick={handleLogOut}>Log Out</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
       <div className='text-center'> Your WishList</div>
        {
           !loading && WishItems?.length>0?(
            WishItems.map((item,index)=>{
              return(
                <UserWish key={index} item={item}/>)
})):<h5 className='text-center my-3'>You Dont have WishList yet</h5>
        }
       
        </Col>
    </Row>
   </Container>
  )
}

export default UserPage