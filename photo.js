
const topPhotograph = document.querySelector('.topPhotograph')
const photograph = document.querySelector('.photograph')
const photograph2 = document.querySelector('.photograph2')
const photograph3 = document.querySelector('.photograph3')
const imgPhoto = document.querySelector('.imgPhoto')
const btmPhotograph = document.querySelector('.btmPhotograph')
const toggle = document.querySelector('#toggle')
const changeDirectionId = document.querySelector('#changeDirection')
const facePhotographId = document.querySelector('#facePhotographId')
const boxHover = document.querySelector('#boxHover')
const imgPhotoBoxHover = document.querySelector('#imgPhotoBoxHover')
const facePhotographId2 = document.querySelector('.facePhotographId2')

console.log('btmPhotograph',btmPhotograph)
// console.log(boxHover)
const cancelButton = document.querySelector('.cancelButton')
const cancelButton2 = document.querySelector('.cancelButton2')
const cancelButton3 = document.querySelector('.cancelButton3')
const cancelButton4 = document.querySelector('.cancelButton4')
const cancelButton5 = document.querySelector('.cancelButton5')
const cancelButton6 = document.querySelector('.cancelButton6')
const checkButton = document.querySelector('.checkButton')
const checkButton2 = document.querySelector('.checkButton2')
const checkButton3 = document.querySelector('.checkButton3')
const checkButton4 = document.querySelector('.checkButton4')
const checkButton5 = document.querySelector('.checkButton5')
const checkButton6 = document.querySelector('.checkButton6')
const image = document.querySelector('#image')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')
const image4 = document.querySelector('#image4')
const image5 = document.querySelector('#image5')
const customFile = document.querySelector('#customFile')
const customFile2 = document.querySelector('#customFile2')
const customFile3 = document.querySelector('#customFile3')
const customFile4 = document.querySelector('#customFile4')
const customFile5= document.querySelector('#customFile5')
// const photoDataId =  photo.dataset.id
// const photographDataId = photograph.dataset.id
// const photoSrc = document.querySelector('.photo.src')
// console.log(photo)

photograph.addEventListener('click',openModal)
photograph2.addEventListener('click',openModal2)
photograph3.addEventListener('click',openModal3)
imgPhoto.addEventListener('click',Modal4)

// toggle.addEventListener('click',changePhoto3)
topPhotograph.addEventListener('click',Modal5)
btmPhotograph.addEventListener('click',Modal6)
toggle.addEventListener('click',changeDirection)

cancelButton.addEventListener('click',closeModal)
cancelButton2.addEventListener('click',closeModal2)
cancelButton3.addEventListener('click',closeModal3)
cancelButton4.addEventListener('click',closeModal4)
cancelButton5.addEventListener('click',closeModal5)
cancelButton6.addEventListener('click',closeModal6)

checkButton.addEventListener('click',changePhoto)
checkButton2.addEventListener('click',changePhoto2)
checkButton3.addEventListener('click',changePhoto3)
checkButton4.addEventListener('click',changePhoto4)
checkButton5.addEventListener('click',changePhoto5)
checkButton6.addEventListener('click',changePhoto6)
customFile.addEventListener('change',changePhoto)
customFile2.addEventListener('change',changePhoto2)
customFile3.addEventListener('change',changePhoto3)
customFile4.addEventListener('change',changePhoto4)
customFile5.addEventListener('change',changePhoto5)
customFile6.addEventListener('change',changePhoto6)
// facePhotographId.addEventListener('click',Modal5)
// allPhoto.addEventListener('click',openModal)

console.log('facePhotographId',facePhotographId)
// console.log('photographDataId', photographDataId )


function openModal(){
  $("#itemModal").modal("show");
}

function openModal2(){
  $("#itemModal2").modal("show");
}

function openModal3(){
  $("#itemModal3").modal("show");
}

function Modal4(){
 
$("#itemModal4").modal("show");
}

function Modal5(){
  $("#itemModal5").modal("show");
}

function Modal6(){
  $("#itemModal6").modal("show");
}






function changeDirection(event){
var facePhotographId9 = document.querySelector('#facePhotographId9')
console.log('facePhotographId9#',facePhotographId9)
// var facePhotographId12 = document.querySelector('#facePhotographId12')
// console.log('facePhotographId12#',facePhotographId12)
// var facePhotographId11 = document.querySelector('.facePhotographId11')

  if(event.target.checked){
  console.log('ok')
  changeDirectionId.classList.add('changeDirection')
  if(facePhotographId9 === null){
   
    facePhotographId.classList.add('facePhotograph')
    photograph3.removeEventListener('click',openModal3)
    imgPhoto.removeEventListener('click',Modal4)
    // console.log('facePhotographId',facePhotographId)
    // var facePhotograph = document.querySelector('.facePhotograph')
    // var photograph5 = document.querySelector('.photograph5')
    // console.log('facePhotograph',facePhotograph)
    // var facePhotograph = document.querySelector('#facePhotograph')

    // if(facePhotograph ){
    //   console.log('facePhotograph',facePhotograph)
    //   console.log('facePhotographok')
    //  photograph3.removeEventListener('click',openModal3)
    // //  photograph5.addEventListener('click',Modal5)
    // }

    // if(facePhotographId12 !== null){
    //   console.log("facePhotographId12")
    //   facePhotographId12.classList.add('facePhotograph')
    //   // facePhotographId12.classList.remove('facePhotographId11')
    // }

    

    // if(facePhotographId12 === null){
    //   console.log("facePhotographId12")
    // }
    // if(!facePhotograph){
    // console.log('facePhotograph2',facePhotograph)
    //   console.log('!facePhotographok')
    //  photograph3.addEventListener('click',openModal3)
    //  photograph5.removeEventListener('click',Modal5)
    // }
    
    // facePhotographId.addEventListener('click',Modal5)
  }
  // facePhotographId2.classList.add('facePhotograph')
  
  // if(facePhotographId){
  //   facePhotographId.classList.add('facePhotograph')
  // }
  // boxHover.classList.add('facePhotograph')

  else if(facePhotographId9 !== null){
    // console.log("have2")
     const facePhotographId2 = document.querySelector('#facePhotographId2')
      facePhotographId9.classList.add('facePhotograph')
      console.log('facePhotographId9',facePhotographId9)
      photograph3.removeEventListener('click',openModal3)
      imgPhoto.removeEventListener('click',Modal4)

      // var facePhotograph = document.querySelector('.facePhotograph')
      // var photograph5 = document.querySelector('.photograph5')
      // console.log('facePhotograph',facePhotograph)
      // var facePhotograph = document.querySelector('#facePhotograph')

      // if(facePhotograph){
      //   console.log('facePhotograph',facePhotograph)
      //   console.log('facePhotographok')
      //  photograph3.removeEventListener('click',openModal3)
      //  photograph5.addEventListener('click',Modal5)
      // }

      // if(facePhotographId12 !== null){
      //   console.log("facePhotographId12")
      //   facePhotographId12.classList.add('facePhotograph')
      //   // facePhotographId12.classList.remove('facePhotographId11')
      // }


      
  
  }
  // else{
  //   facePhotographId9.classList.remove('facePhotograph')
  // }
   boxHover.classList.add('box3')
   imgPhotoBoxHover.classList.add('box3')
  // if(facePhotographId12 !== null){
  //      console.log("facePhotographId12")
  //    }
  // facePhotographId12.classList.add('facePhotograph')
  }else{
    changeDirectionId.classList.remove('changeDirection')
    facePhotographId.classList.remove('facePhotograph')
    boxHover.classList.remove('box3')
    imgPhotoBoxHover.classList.remove('box3')
    facePhotographId2.classList.remove('facePhotograph')
    photograph3.addEventListener('click',openModal3)
    imgPhoto.addEventListener('click',Modal4)
    
    // facePhotographId9.classList.remove('facePhotograph')
    
    // photograph3.addEventListener('click',openModal3)
    // photograph5.removeEventListener('click',Modal5)
    if(facePhotographId9 !== null){
      facePhotographId9.classList.remove('facePhotograph')
      photograph3.addEventListener('click',openModal3)
      imgPhoto.addEventListener('click',Modal4)
      // facePhotographId12.classList.remove('facePhotograph')
    }

    // photograph5.removeEventListener('click',Modal5)
    //  photograph3.addEventListener('click',openModal3)

    // if(!facePhotograph){
      // console.log('facePhotograph2',facePhotograph)
      //   console.log('!facePhotographok')
      //  photograph5.removeEventListener('click',Modal5)
      //  document.querySelector('.photograph5').removeEventListener('click',Modal5)
      //  photograph3.addEventListener('click',openModal3)
       
      // }
      
      // facePhotographId12.classList.remove('facePhotograph')
      
  }
}



// function changePhotoAgain(event){
//   console.log('changePhotoAgain')
//   let imageUrl = image5.value
//      const { files } = event.target
//     // console.log('imageUrl1',imageUrl)
//     if(imageUrl !== ""){
   
//       photograph5.innerHTML = `
//     <img style="height:500px;width:500px" src="${imageUrl}" id="facePhotographId12" class="facePhotographId11"  alt="">
// ` 
 
// var facePhotographId12 = document.querySelector('#facePhotographId12')
// var facePhotographId11 = document.querySelector('.facePhotographId11')
// console.log('facePhotographId12',facePhotographId12)
// console.log('facePhotographId11',facePhotographId11)
// if(facePhotographId12 !== null){
//   console.log("facePhotographId12")
//   facePhotographId12.classList.add('facePhotograph')
//   // facePhotographId12.classList.remove('facePhotographId11')
// }
// // else if(!facePhotographId11){
// //   facePhotographId12.classList.remove('facePhotograph')
// // }

//     // console.log('imageUrl2',imageUrl)
    
//      document.querySelector('#image5').value = ""
//     //  console.log('imageUrl3',imageUrl)
//      closeModal5()
    
//    }
//     else if(files === undefined ){
    
//      window.alert('請輸入圖片網址或選擇檔案,謝謝!')
    
//     }
//     else if(customFile5){

//       if (files.length === 0) return
      
//        const filesFirst = files[0]
//         const imageURL5 = window.URL.createObjectURL(filesFirst)
//         console.log(imageURL5)

//         photograph5.innerHTML = `
//         <img style="height:500px;width:500px" src="${imageURL5}"  id="facePhotographId12" class="facePhotographId11"  alt="">
//     `

//     var facePhotographId12 = document.querySelector('#facePhotographId12')
//      var facePhotographId11 = document.querySelector('.facePhotographId11')
// console.log('facePhotographId12',facePhotographId12)
// console.log('facePhotographId11',facePhotographId11)
// if(facePhotographId12 !== null){
//   console.log("facePhotographId12")
//   facePhotographId12.classList.add('facePhotograph')
//   // facePhotographId12.classList.remove('facePhotographId11')
// }
      
//        document.querySelector('#customFile5').value = ""
//        closeModal5() 
//     }
// }


function changePhoto(event){
 
  let imageUrl = image.value
     const { files } = event.target
    // console.log('imageUrl1',imageUrl)
    if(imageUrl !== ""){
   
      photograph.innerHTML = `
    <img style="height:500px;width:500px" src="${imageUrl}" alt="">
` 
     
    // console.log('imageUrl2',imageUrl)
    
     document.querySelector('#image').value = ""
    //  console.log('imageUrl3',imageUrl)
     closeModal()
    
   }
    else if(files === undefined ){
    
      //  console.log('files',files)
       
       window.alert('請輸入圖片網址或選擇檔案,謝謝!')
       
    
    }
    else if(customFile){

      if (files.length === 0) return
      
       const filesFirst = files[0]
        const imageURL = window.URL.createObjectURL(filesFirst)
        console.log(imageURL)

        photograph.innerHTML = `
        <img style="height:500px;width:500px" src="${imageURL}" alt="">
    `
      
       document.querySelector('#customFile').value = ""
       closeModal() 
    }
} //function



function changePhoto2(event){
  
     let imageUrl = image2.value
     const { files } = event.target
    // console.log('imageUrl1',imageUrl)
    if(imageUrl !== ""){
   
      photograph2.innerHTML = `
    <img style="height:500px;width:500px" src="${imageUrl}" alt="">
` 
     
    // console.log('imageUrl2',imageUrl)
    
     document.querySelector('#image2').value = ""
    //  console.log('imageUrl3',imageUrl)
     closeModal2()
    
   }
    else if(files === undefined ){
    
     window.alert('請輸入圖片網址或選擇檔案,謝謝!')
    
    }
    else if(customFile2){

      if (files.length === 0) return
      
       const filesFirst = files[0]
        const imageURL2 = window.URL.createObjectURL(filesFirst)
        console.log(imageURL2)

        photograph2.innerHTML = `
        <img style="height:500px;width:500px" src="${imageURL2}" alt="">
    `
      
       document.querySelector('#customFile2').value = ""
       closeModal2() 
    }


} //function


// if(){
//   console.log('changeDirection')
// }

function changePhoto3(event,event2){
  console.log("event",event)
  console.log("event2",event)
// if(changeDirection){
//   console.log('changeDirection')
// }


  let imageUrl = image3.value
  const { files } = event.target
  const ev = event || event2
  var target = ev.target || ev.srcElement
  console.log("ev",event)
  console.log("ev(2)",event2)
 // console.log('imageUrl1',imageUrl)
//  if(toggle){
//   console.log("ok:ok")
  // console.log("event",event)
  // facePhotographId.classList.add('facePhotograph')
  // changeDirection()
//  }

// if(event.type === "change"){
//   console.log("change")
// }else if(event.type === "click"){
//   console.log("click")
// }
 
 if(imageUrl !== ""){
 
 photograph3.innerHTML = `
 <img style="
 height: 100%;
 width: 100%;
 background-size: cover" src="${imageUrl}" id="facePhotographId9" class="facePhotographId3" alt="">
` 

var facePhotographId9 = document.querySelector('#facePhotographId9')
var facePhotographId3 = document.querySelector('.facePhotographId3')
console.log('facePhotographId3',facePhotographId3)
console.log('facePhotographId9',facePhotographId9)
// id="facePhotographId" class="facePhotographId2"

 // console.log('imageUrl2',imageUrl)

// const img = `style="
//  height: 100%;
//  width: 100%;
//  background-size: cover" src="${imageUrl}" id="facePhotographId" class="facePhotographId2" alt="">
//  `
// photograph3.appendChild(img)


var facePhotographId12 = document.querySelector('#facePhotographId12')
var facePhotographId11 = document.querySelector('.facePhotographId11')
console.log('facePhotographId12',facePhotographId12)
console.log('facePhotographId11',facePhotographId11)
if(facePhotographId12 !== null){
  console.log("facePhotographId12")
  facePhotographId12.classList.add('facePhotograph')
  // facePhotographId12.classList.remove('facePhotographId11')
}



 
  document.querySelector('#image3').value = ""
 //  console.log('imageUrl3',imageUrl)
  closeModal3()

  // if(event.target.checked){
  //   // changeDirection(event)
  //   console.log('toggle')
  //   // console.log("event2",event)
  // }
  
}
 
 else if(files === undefined ){
 
  window.alert('請輸入圖片網址或選擇檔案,謝謝!')
 
 }
 else if(customFile3){
  if(event.type === "change"){
  if (files.length === 0) return
   
    const filesFirst = files[0]
     var imageURL3 = window.URL.createObjectURL(filesFirst)
     console.log(imageURL3)

     photograph3.innerHTML = `
     <img style="height:500px;width:500px" src="${imageURL3}" id="facePhotographId9" class="facePhotographId3" alt="">
 `
   
    document.querySelector('#customFile3').value = ""
    closeModal3() 
    }
 }

// else if(facePhotograph){
//    console.log(facePhotograph)
//  }
// else  if(event.target.checked){
//      console.log("click")
// photograph3.innerHTML = `
//  <img style="
//  height: 100%;
//  width: 100%;
//  background-size: cover" src="${imageUrl}" id="facePhotographId9" class="facePhotographId3" alt="">
// ` 
//   console.log(photograph3)
   
// }
 
} //function



function changePhoto4(event){
 
  let imageUrl = image4.value
  const { files } = event.target
 // console.log('imageUrl1',imageUrl)
 if(imageUrl !== ""){

  imgPhoto.innerHTML = `
 <img style="height:500px;width:500px" src="${imageUrl}" alt="">
` 
  
 // console.log('imageUrl2',imageUrl)
 
  document.querySelector('#image4').value = ""
 //  console.log('imageUrl3',imageUrl)
  closeModal4()
 
}
 else if(files === undefined ){
 
  window.alert('請輸入圖片網址或選擇檔案,謝謝!')
 
 }
 else if(customFile4){

   if (files.length === 0) return
   
    const filesFirst = files[0]
     const imageURL4= window.URL.createObjectURL(filesFirst)
     console.log(imageURL4)

     imgPhoto.innerHTML = `
     <img style="height:500px;width:500px" src="${imageURL4}" alt="">
 `
   
    document.querySelector('#customFile4').value = ""
    closeModal4() 
 }


} //functions


function changePhoto5(event){
 
  let imageUrl = image5.value
  const { files } = event.target
 
 if(imageUrl !== ""){

  topPhotograph.innerHTML = `
 <img style="height:500px;width:500px" src="${imageUrl}"  class="facePhotograph" alt="">
` 
  

 
  document.querySelector('#image5').value = ""
 
  closeModal5()
 
}
 else if(files === undefined ){
 
  window.alert('請輸入圖片網址或選擇檔案,謝謝!')
 
 }
 else if(customFile5){

   if (files.length === 0) return
   
    const filesFirst = files[0]
     const imageURL5= window.URL.createObjectURL(filesFirst)
     console.log(imageURL5)

     topPhotograph.innerHTML = `
     <img style="height:500px;width:500px"  class="facePhotograph" src="${imageURL5}" alt="">
 `
   
    document.querySelector('#customFile5').value = ""
    closeModal5() 
 }


} //functions



function changePhoto6(event){
 
  let imageUrl = image6.value
  const { files } = event.target
 
 if(imageUrl !== ""){

  btmPhotograph.innerHTML = `
 <img style="height:500px;width:500px" src="${imageUrl}"  class="facePhotograph" alt="">
` 
  

 
  document.querySelector('#image6').value = ""
 
  closeModal6()
 
}
 else if(files === undefined ){
 
  window.alert('請輸入圖片網址或選擇檔案,謝謝!')
 
 }
 else if(customFile6){

   if (files.length === 0) return
   
    const filesFirst = files[0]
     const imageURL6= window.URL.createObjectURL(filesFirst)
     console.log(imageURL6)

     btmPhotograph.innerHTML = `
     <img style="height:500px;width:500px"  class="facePhotograph" src="${imageURL6}" alt="">
 `
   
    document.querySelector('#customFile6').value = ""
    closeModal6() 
 }


} //functions
















function closeModal(){
  $("#itemModal").modal("hide");
}

function closeModal2(){
 $("#itemModal2").modal("hide");
 }

function closeModal3(){
  $("#itemModal3").modal("hide");
}

function closeModal4(){
  $("#itemModal4").modal("hide");
}

function closeModal5(){
 $("#itemModal5").modal("hide");
 }

 function closeModal6(){
  $("#itemModal6").modal("hide");
  }