import React,{useEffect, useState} from 'react';

import {Text,Flex,Box,Select,Grid, GridItem} from '@chakra-ui/react';

import PRODUCTLIST from './ProductsData';
import Product from './components/Product';
import sortedItems from './utils/sortedItems';

function App() {

  const [items,setItems]=useState(PRODUCTLIST);

  const [value,setValue] =useState('');

  useEffect( ()=>{
    setItems( sortedItems(value,items) );
  },[value]);

  const handleChange = (event) => { 
    setValue(event.target.value);
  }
 
  return (
    <Box height='100vh'>
      <Flex justifyContent='flex-end' alignItems='center'mt='20px' >
       <Text mr='10px'>Sort</Text>
       <Select 
       placeholder='Select option' 
       width='200px' 
       value={value}
       onChange={handleChange}
       mr='110px'>
         <option value='Low-hight'>Low-hight</option>
         <option  value='Hight-low'>Hight-low</option>
       </Select>
       </Flex>
      
      <Flex justifyContent='center'>

      <Grid gap={5} templateColumns='repeat(3, 1fr)' mt='20px'>

      {items.map( (item)=> 
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
