export default (filterKey,arryItems) =>{
  const categories = [...arryItems]
  const result = categories.filter(category => category === filterKey);
  return result;
}