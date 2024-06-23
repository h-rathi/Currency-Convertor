

let lstBtn=document.querySelector('.fn')
lstBtn.addEventListener('click',async ()=>{
    let amt=document.querySelector('.nxt');
    let val=amt.value;
    document.querySelector('#frm').innerText=val;
    // p=document.querySelector('#frm').innerText;
    // let finiliz=80;
    // document.querySelector('#t').innerText=finiliz*p;
    
    
    let fnl=document.querySelector('#usa').value;
    
    let fnl1=document.querySelector('#india').value;
    console.log(fnl1)
    
    let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"+ fnl.toLowerCase() +".json";
   
    async function hi(){
    let x=await fetch(url) 
    let y=await x.json()
    return y;
    
    }
    let r=await hi();
    // console.log(r.usd)
    
     
    let obj1=Object.values(r)[1]
    console.log(obj1)
    let obj2=Object.keys(obj1)
    let obj3=Object.values(obj1)
    // console.log('obj3',obj3)
    for (let i of obj2){
        if(i==fnl1.toLowerCase()){
            console.log('done');
            let inz=obj2.indexOf(i);
            console.log(obj2.indexOf(i),'hi');
            console.log(obj3[inz],'set');
            p=document.querySelector('#frm').innerText;
            let finiliz=obj3[inz];
            document.querySelector('#t').innerText=finiliz*p;
            
        }
    }
    document.querySelector('#fnlpx').innerText=' '+document.querySelector('#usa').value
    document.querySelector('#fnlpx1').innerText=' '+document.querySelector('#india').value
})

