{
//
 // Never,unknown and nullable type

//nullable type----------------------------

const searchName = (value: string | null) => {
    if(value){
        console.log("searching");
    }else{
        console.log("There is nothing to search");
    }
}
searchName(null);

//unknown type-------------------------
const getHourInMinute =(value: unknown) =>{
    if(typeof value === 'number'){
        const convertedMinute = value * 60;
        console.log(`the minute is ${convertedMinute}`);
    }

    if(typeof value === 'string'){
        const [hour, min] = value.split("");
        const convertedMinute = parseFloat(hour) * 60;
            console.log(convertedMinute);
        
    }else {
        console.log(`wrong input`);
    }
};
getHourInMinute(`2 hour`);


//never type------------------
const  throwError =  (msg: string): never => {
    throw new Error(msg);
}
throwError('vul kore error')


//
}