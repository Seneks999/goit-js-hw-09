import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),n="feedback-form-state";let t={email:"",message:""};document.addEventListener("DOMContentLoaded",o);function o(){const e=localStorage.getItem(n);e&&(t=JSON.parse(e),a.elements.email.value=t.email||"",a.elements.message.value=t.message||"")}a.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem(n,JSON.stringify(t))});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(n),t={email:"",message:""},a.reset()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("emailInput");e.addEventListener("focus",function(){e.setAttribute("placeholder","Type area")}),e.addEventListener("blur",function(){e.setAttribute("placeholder","")})});
//# sourceMappingURL=2-form.js.map
