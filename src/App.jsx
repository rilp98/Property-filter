import React,{useEffect, useState} from 'react';

import {Text,Flex,Box,Select,Grid, GridItem} from '@chakra-ui/react';

import PRODUCTLIST from './ProductsData';
import Product from './components/Product';
import sortedItems from './utils/sortedItems';
import filterItems from './utils/filterItems';

function App() {

  const [itemSort,setItemSort]=useState(PRODUCTLIST);
  const [itemFilter,setItemFilter]=useState(PRODUCTLIST);

  const [valueSort,setValueSort] =useState('');
  const [valueFilter,setValueFilter] =useState('');


  useEffect( ()=>{
    setItemSort( sortedItems(valueSort,itemSort) );
    setItemFilter( filterItems(valueFilter,itemFilter) );
  },[valueSort,valueFilter]);

  const handleChangeSort = (event) => { 
    setValueSort(event.target.value);
  }
  const handleChangeFilter = (event) => { 
    setValueFilter(event.target.value);
  }

 
  return (
    <Box height='100vh'>
      <Flex justifyContent='flex-end' alignItems='center'mt='20px' >
       <Text mr='10px'>Sort</Text>
       <Select 
       placeholder='Select option' 
       width='200px' 
       value={valueSort}
       onChange={handleChangeSort}
       mr='110px'>
         <option value='Low-hight'>Low-hight</option>
         <option  value='Hight-low'>Hight-low</option>
       </Select>
       
       <Text mr='10px'>Filter</Text>
       <Select 
       placeholder='Select option' 
       width='200px' 
       value={valueFilter}
       onChange={handleChangeFilter}
       mr='110px'>
         <option value='Cell phones'>Cell phones</option>
         <option  value='Electronics'>Electronics</option>
         <option  value='Video Games'>Video Games</option>
       </Select>

       </Flex>

       
      
      <Flex justifyContent='center'>

      <Grid gap={5} templateColumns='repeat(3, 1fr)' mt='20px'>

      {itemSort.map( (item)=> 
      <GridItem key={item.id}>
       <Product 
       id={item.id} 
       image={item.image} 
       name={item.name}
       category={item.category}
       price={item.price}/> 
      </GridItem>
      )}

      </Grid>

      </Flex>

    </Box>
  )
}

export default App
