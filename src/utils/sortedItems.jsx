export default (sortKey,arryItems)=>{

    const a = [...arryItems];

    a.sort((a,b)=>{
 
        if(sortKey==='Low-hight'){
            return a.price - b.price;
        }
 
        if(sortKey==='Hight-low'){
            return b.price - a.price;
        }
    
    });
    return a;
};