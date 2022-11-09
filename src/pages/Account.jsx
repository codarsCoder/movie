import {useEffect, useState} from 'react'
import { storage, updateUserProfile } from '../auth/firebase';

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";



const Account = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);



  const imagesListRef = ref(storage, "profile/");    //klasör ismini belirle
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `profile/${new Date().getTime()+imageUpload.name}`);  
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls([url]);
        console.log(url,"urlm")
        updateUserProfile(url)
      });
    });
  };
 
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);





  return (
    <>
        <input
    type="file"
    onChange={(event) => {
      setImageUpload(event.target.files[0]);
    }}
  />
  <button onClick={uploadFile}> Upload Image</button>
  {imageUrls.map((url) => {
    return ( <div style={{color:"white"}}>{imageUrls[0]} </div> );
  })}

    </>

  )


}

export default Account

