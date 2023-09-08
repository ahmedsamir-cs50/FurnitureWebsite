import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import { createCategory } from '../../../redux/actions/categoryAction'
import notify from '../useNotifaction'

const AddCategoryHook = () => {
const [Name,setName]=useState()
const [img,setImage]=useState()
const [loading,setLoading]=useState()
const [isPress,setIsPress]=useState()
const [selectedFile, setSelectedFile] = useState(null)
const Dispatch=useDispatch()
//to change name state
const onChangeName = (event) => {
  event.persist();
  setName(event.target.value)
}

//when image change save it 
const onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
     
      setImage(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0])
  }
}
const res = useSelector(state => state.allCategory.category)

//save data in database
const handelSubmit = async (event) => {
  event.preventDefault();
  if (Name === "" || selectedFile === null) {
      
      notify('من فضلك اكمل البيانات', "warn");
      return;
  }
  const formData = new FormData();
  formData.append("name", Name)
  formData.append("image", selectedFile)
  setLoading(true)
  setIsPress(true)
  await Dispatch(createCategory(formData))
  setLoading(false)
}

useEffect(() => {
  if (loading === false) {
    setImage()
      setName("")
      setSelectedFile(null)
    
      setLoading(true)
      setTimeout(() => setIsPress(false), 1000)

      if (res.status === 201) {
          notify('success', "success");
      }
      else {
          notify('error', "error");
      }
  }
}, [loading])





  return  [img,Name,loading,isPress,handelSubmit,onImageChange,onChangeName]
}

export default AddCategoryHook