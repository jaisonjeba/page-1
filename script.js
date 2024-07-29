 var formsubission = document.querySelector(".details")
 formsubission.addEventListener('submit',(e)=>{
    e.preventDefault();
 var fname = document.querySelector('[placeholder="Enter your first name"]')
 var lname = document.querySelector('[placeholder="Enter your last name"]')
 var addr = document.querySelector('[placeholder="Enter your Adresss"]')
 var pin = document.querySelector('[placeholder="Enter area pincode"]')
 var gend = document.querySelector('.gender')
 var foods = document.querySelector('.food')
 var states = document.querySelector('.state')
 var countries = document.querySelector('.country')
 var tablerow =document.createElement('tr')
 var datas =[fname,lname,addr,pin,gend,foods,states,countries]

 for(var i=0;i<datas.length;i++){
    var tabledata = document.createElement('td')
    tabledata.innerText = datas[i].value
    tablerow.appendChild(tabledata)
   
 }
 document.querySelector('tbody').appendChild(tablerow)
 for(let i of datas){
    i.value = ""
 }
  })
