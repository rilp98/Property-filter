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

    const handleChangeSort = (event) => { 
        setValue(event.target.value);
    };
 
    return (
        <Box height='100vh'>
            <Flex justifyContent='flex-end' alignItems='center'mt='20px' >
                <Text mr='10px'>Sort</Text>
                <Select 
                    placeholder='Select option' 
                    width='200px' 
                    focusBorderColor='purple.500'
                    value={value}
                    onChange={handleChangeSort}
                    mr='110px'>
                    <option value='Low-hight'>Low-hight</option>
                    <option  value='Hight-low'>Hight-low</option>
                </Select>
            </Flex>

            <Flex justifyContent='center'>

                <Grid gap={{base:3,lg:5}} templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} my='40px'>

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

            <Box height='100px' display='flex' alignItems='center' justifyContent='center' bg='purple.300' >
                <Text> Made with ♥ by Paola Rossi </Text>
            </Box>

        </Box>
    );
}

export default App;
