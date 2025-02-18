let formEle=document.getElementById("form");

let nameEle=document.getElementById("name");
let nameErrorMessageEle=document.getElementById("nameErrorMessage");

let emailEle=document.getElementById("email");
let emailErrorMessageEle=document.getElementById("emailErrorMessage");

let statusEle=document.getElementById("status");

let genderMaleEle=document.getElementById("genderMale");
let genderFemaleEle=document.getElementById("genderFemale");

let formData={
    name:"",
    email:"",
    status:"Active",
    gender:"Male"
}

nameEle.addEventListener("change",function(event){
    if(event.target.value===""){
        nameErrorMessageEle.textContent="Required*";
    }
    else{
        nameErrorMessageEle.textContent="";
    }
    formData.name=event.target.value;
});

emailEle.addEventListener("change",function(event){
    if(event.target.value===""){
        emailErrorMessageEle.textContent="Required*";
    }
    else{
        emailErrorMessageEle.textContent="";
    }
    formData.email=event.target.value;
});

statusEle.addEventListener("change",function(event){
    formData.status=event.target.value;
});

genderMaleEle.addEventListener("change",function(event){
    formData.gender=event.target.value;
});

genderFemaleEle.addEventListener("change",function(event){
    formData.gender=event.target.value;
});



function validateFormData(formData) {
    let {name, email} = formData;
    if (name === "") {
      nameErrorMessageEle.textContent = "Required*";
    }
    if (email === ""){
      emailErrorMessageEle.textContent = "Required*";
    }
  }
  
  function submitFormData(formData) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
      },
      body: JSON.stringify(formData)
    };
  
    let url = "https://gorest.co.in/public-api/users";
  
    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        console.log(jsonData);
        if (jsonData.code === 422) {
          if (jsonData.data[0].message === "has already been taken") {
            emailErrorMessageEle.textContent = "Email Already Exists";
          }
        }
      });
  }

  formEle.addEventListener("submit",function(event){
    event.preventDefault();
    
    validateFormData(formData);
    submitFormData(formData);
});