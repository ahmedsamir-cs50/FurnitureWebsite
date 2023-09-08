import { Col, Container, Row } from "react-bootstrap"
import ProductsContainer from "../../Component/Products/ProductsContainer"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


import { SortHook } from "../../Component/hooks/Search/SortHook";
export const ProductsPage=()=>{

  const [handleChangeSort,Data]=SortHook()


    const options = [
        'Best Selling', 'Price low to high', 'Price high to low',
      ];
      const defaultOption = options[0];
     
    return  <Container>
   
     <div><h1 className="text-center mt-3">Products Page</h1></div>
     <Row>
       
        <Col>
        <div><h2 className="text-center">high Quality Products For you</h2></div>
        <div className="d-flex justify-content-end"><Dropdown options={options} onChange={handleChangeSort} value={defaultOption} placeholder="Select an option" />;</div>
        <>
<ProductsContainer data={Data}/>
        </>
        </Col>
     </Row>
     </Container>
}