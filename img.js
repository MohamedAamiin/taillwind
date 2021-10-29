let uploadbutton = document.getElementsByid("upload-button");
let chosenimage =document.getElementById("chosen-image");
let filename = document.getElementById("file-name");
uploadbutton.onchange=()=>{
    let reader = new FileReader();
    reader.readAsDataURL(uploadbutton.file[0]);
    reader.onload=()=>{
        chosenimage.setAttribute("src",reader.result)
    }
    filename.textContent=uploadbutton.file[0].filename;
}