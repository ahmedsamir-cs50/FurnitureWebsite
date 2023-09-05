import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/productsAction";
import { useEffect } from "react";
import notify from "../useNotifaction";
import { getAllCategory } from "../../../redux/actions/categoryAction";
import { useNavigate } from "react-router-dom";
export const AddProductsHook = () => {
    const Navigate=useNavigate()
  const Dispatch = useDispatch();
  //values images products
  const [images, setImages] = useState({});
  //values state
  const [prodName, setProdName] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [priceBefore, setPriceBefore] = useState("  ");
  const [priceAftr, setPriceAftr] = useState("  ");
  const [qty, setQty] = useState(" ");
  const [CatID, setCatID] = useState("");
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState([]);
  const [showColor, setShowColor] = useState(true);
  const [allcategory, setAllCategory] = useState()
  const [catloading, setCatLoading] = useState(true);
  useEffect(() => {
    setCatLoading(true)
    const getCategory = async () => {
      await Dispatch(getAllCategory());
    };

    getCategory();
    setCatLoading(false)
    console.log("1")
  }, []);

  const category = useSelector(state => state.allCategory.category)
  setTimeout(() => {
    
        if(catloading ===false){
            
            setAllCategory(category.data)
           
          }
    console.log("2")
  }, 1500);
 
  
  

  

  

  const onChangeProdName = (e) => {
    e.persist();
    setProdName(e.target.value);
  };

  const onChangeDesName = (e) => {
    e.persist();
    setProdDescription(e.target.value);
  };

  const onChangeQty = (e) => {
    e.persist();
    setQty(e.target.value);
  };

  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAftr(e.target.value);
  };

  const onChangePriceBefor = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };

  const handelChangeComplete = (color) => {
  
   
    setColors([...colors, color.hex])
    setShowColor(!showColor)
}
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };
  const HandleShowColor = (e) => {
    e.persist();
    setShowColor(!showColor);
  };
  const onSeletCategory = (e) => {
    e.persist();
    setCatID(e.target.value);
  };
  function dataURLtoFile(dataurl, filename) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}


  const handelSubmit = async (e) => {
    e.preventDefault();
    if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
        notify(" Please Fill Required Fields   ", "warn")
        return;
    }

    //convert base 64 image to file 
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
    //convert array of base 64 image to file 
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
        (item, index) => {
            return dataURLtoFile(images[index], Math.random() + ".png")
        }
    )

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAftr);
    formData.append("category", CatID);
  

    setTimeout(() => {
        formData.append("imageCover", imgCover);
        itemImages.map((item) => formData.append("images", item))
        console.log("3")
    }, 1000);

    setTimeout(() => {
        console.log(imgCover)
        console.log(itemImages)
        console.log("4")
    }, 1000);
    colors.map((color) => formData.append("availableColors", color))
   
    setTimeout(async () => {
        setLoading(true)
        await Dispatch(createProduct(formData))
        setLoading(false)
        console.log("5")
    }, 1000);

}

//get create meesage
const product = useSelector(state => state.allproducts.products)

useEffect(() => {

    if (loading === false) {
        // setCatID(0)
        
        console.log("6")
        setTimeout(() => setLoading(true)
        , 1500)

        if (product) {
            if (product.status === 201) {
                notify(" success ", "success")
                setTimeout(() => Navigate("/admin/addproduct"), 1000)
            } else {
                notify("error ", "error")
            }
        }
    }
}, [loading])
  return [
    onChangeDesName,
    onChangeQty,
    HandleShowColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    allcategory,
    priceAftr,
    images,
    setImages,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ];
};
