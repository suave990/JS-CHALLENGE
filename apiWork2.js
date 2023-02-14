let array=[
    {fatherName:"Denis",motherName:"Denyse",childrenNumber:5},
    //{fatherName:"Yves",motherName:"Yvette",childrenNumber:6},
    {fatherName:"Benoit",motherName:"Bella",childrenNumber:-8},
    {fatherName:"Cyiza",motherName:"Keza",childrenNumber:2}
 ]

let family= async function(getFam){
        getFam.childrenNumber++
    console.log(getFam)
    return getFam
}
function avrgChild(arr){
    return new Promise(async function(resolve,reject){
        let sum=0
        for(let a=0; a<arr.length;a++){
            arr[a]= await family(arr[a])
            if(arr[a].fatherName.toLowerCase()=="yves"){
               reject("Yves is not an allowed dad in 2022.")
            }
            if(arr[a].childrenNumber>=0){

                sum+=arr[a].childrenNumber  
            }
           
        }
        let avrg=sum/arr.length
        resolve(avrg)

    })
   
}
avrgChild(array).then((out)=>{
    console.log(out)
}).catch((out)=>{
    console.log(out)
})

