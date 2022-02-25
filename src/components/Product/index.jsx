import React from 'react';

import {Box,Flex,Image,Text,} from '@chakra-ui/react';

const Product = ({image,name,category,price})=>{
 return(
  <Box bg='gray.100' width='348px' height='350px'>

    <Flex justifyContent='center'>
    <Image src={image} alt='product'/>
    </Flex>
    <Box mx='32px' my='24px'>
    <Text fontSize='20px' fontWeight='semibold'>{name}</Text>
    <Text fontSize='20px' fontWeight='light' mt='8px'>{category}</Text>
    <Text fontSize='20px' fontWeight='semibold' mt='8px'>${price}</Text>
    </Box>
  </Box>
 )
}

export default Product;