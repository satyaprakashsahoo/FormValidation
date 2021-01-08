let UserName = document.getElementById('Name');
let Address = document.getElementById('address');
let Email=document.getElementById('Email');
let MobileNo=document.getElementById('No') ;
let form=document.querySelector('.form');
let btn =document.querySelector('.btn');
let section=document.querySelector('.conatiner3');
let table=document.querySelector('.tabledata');
let row=1;
UserName.addEventListener('input' , (e)=>{
let data1 = e.target.value;
console.log (data1);
console.log(data1.length);
if(data1===""){
document.getElementById('username').innerHTML='Please fill the Name';
}
else if(data1.length>=3 && data1.length<=20){
document.getElementById('username').innerHTML='Valid UserName';
}
else if(!isNaN(data1)){
document.getElementById('username').innerHTML='Name Shoulde be charactaer';
}
else{
document.getElementById('username').innerHTML='Name Shoulde be 3 to 20 charactaer';
}
});
Address.addEventListener('input',(e)=>{
let data2=e.target.value;
if(data2===""){
document.getElementById('add').innerHTML='Please fill the address';
}
else if(data2.length<=10){
document.getElementById('add').innerHTML='Adress should be minimum 10 charactaer';
}
else {
document.getElementById('add').innerHTML='Address is Valid';
}
});
Email.addEventListener('input', (e)=>{
let data3=e.target.value;
if(!data3.includes('@') && !data3.includes('.')){
document.getElementById('mail').innerHTML='Check Ur Mail Id';
}
else{
document.getElementById('mail').innerHTML='valid user Id';
}
}
);
MobileNo.addEventListener('input' ,(e)=>{
let data4=e.target.value;
if(data4.length==10){
document.getElementById('mobileno').innerHTML='Valid Mobile No';
}
else {
document.getElementById('mobileno').innerHTML='Invalid Mobile No';
}
})
form.addEventListener("submit" , (e) =>{
e.preventDefault();
});
// btn.addEventListener('click', (e)=>{
// table.classList.remove('hidden');
// console.log(e);
// } );
btn.addEventListener('click',(e)=>{
	let Name= UserName.value 
    let address = Address.value;
    let email=Email.value;
    let mobileNo=MobileNo.value;

    if(!Name || !address || !email || !mobileNo){
    	alert("please fill the boxes");
    	return;

    }
    let slno=1;
    var display=table;
    var newrow=display.insertRow(row);

     
     var cell1=newrow.insertCell(0);
     var  cell2=newrow.insertCell(1);
     var  cell3=newrow.insertCell(2);
     var  cell4=newrow.insertCell(3);
     var cell5=newrow.insertCell(4);

     cell1.innerHTML=row;
     cell2.innerHTML=Name;
     cell3.innerHTML=address;
     cell4.innerHTML=email;
     cell5.innerHTML=mobileNo;
     
    

     row++;
     console.log(row);
 }
 );













