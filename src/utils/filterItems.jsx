export default (filterKey,arryItems,setValueFilter) =>{
  console.log(arryItems);
  console.log(filterKey);
  const result = arryItems.filter((items)=> items.category === filterKey);
  console.log(result);
  return result;
  
}