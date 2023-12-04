const num1element=document.getElementById("num1") as HTMLInputElement
const num1e2ement=document.getElementById("num2") as HTMLInputElement
const Buttonelemet=document.querySelector("button")!
const numarray:Array<number>=[]
const stringarray:string[]=[]
type numberorsting=number|string
type obtype={val:number,timestamp:Date}
interface objtype{
    val:number;
    timestamp:Date;
}
function add (num1:numberorsting,num2:numberorsting){
    if(typeof num1==='number'&& typeof num2==='number'){
        return num1+num2
    } else if(typeof num1==="string" && typeof num2==="string"){
        return num1+ ''+ num2
    }
    return +num1+ +num2;
};
function object (objectval:objtype){
    console.log(objectval.val)
}
Buttonelemet.addEventListener("click",()=>{
    const num1=num1element.value
    const num2=num1e2ement.value
    const result=add(+num1,+num2)
    const stringresult=add(num1,num2)
    numarray.push(result as number)
    stringarray.push(stringresult as string)
    object({val:result as number, timestamp: new Date()})
    console.log(numarray);
    console.log(stringarray);
})

const mypromise= new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve("it's worked")
    },1000)

})
mypromise.then((result)=>{
    console.log(result)
})