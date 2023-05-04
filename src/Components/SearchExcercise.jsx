import React,{useState,useEffect} from 'react'
import {Box, Button, TextField, Typography, Stack} from '@mui/material';

const SearchExcercise = () => {
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
            <Typography 
                fontWeight="700"
                sx={{fontSize:{lg:'44px', xs:'30px'}}}
                mb="50px" textAlign="center"
                >
                Awesome Excercises You <br/> Should Know
            </Typography>
            <Box display="flex" flexDirection="row-reverse">
            <TextField
                sx={{
                    input:{
                        fontWeight:700,
                        border:'none',
                        borderRadius:'4px'

                    },
                    width:{lg:'800px', xs:'350px'},
                    backgroundColor:'#fff',
                    borderRadius:'40px'

                }}
                height="76px"
                value=""
                onChange={(e) => {}}
                placeholder="Search Excercises"
                type="text"
                
            />

            <Button className="search-btn"
            sx={{
                backgroundColor:'#FF2625',
                color:'#fff',
                width:{lg:'175px', sm:'80px'},
                fontSize:{lg:'20px', sm:'14px'},
                height:"56px",
                position:' absolute',
                
            }}
              
            >
                
                Search
            </Button>
            </Box>
        </Stack>
        
    )   
}

export default SearchExcercise
