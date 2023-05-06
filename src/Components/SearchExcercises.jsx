import React,{useState,useEffect} from 'react'
import {Box, Button, TextField, Typography, Stack} from '@mui/material';
import {excerciseOptions, fetchData} from '../utils/fetchData';


const SearchExcercise = () => {
    const [search, setSearch]=useState('')
    const [excercises, setExcercises]=useState([])
    useEffect(() => {
        const fetchExcercisesData=async()=>{
            const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions)
            setBodyParts(['all', ...bodyPartsData]);
            //  if bodyPartsData is an array itself, the syntax creates a new array with the first element being the string "all", and then all the elements from bodyPartsData added after that.
            /*const other_data = ['apple', 'banana', 'orange'];
                    const arr = ['all', ...other_data];
                    console.log(arr); // Output: ['all', 'apple', 'banana', 'orange']
 */
        }
    }, [])
    const handleSearch = async () =>{
        if(search){
            const excercisesData=await fetchData( 'https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);
            const searchedExcercises=excerciseData.fitler(
                (excercise)=> excercise.name.toLowerCase().includes(search)||
                  excercise.target.toLowerCase().includes(search)||
                 excercise.equipment.toLowerCase().includes(search)||
                 excercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('');
            setExcercises(searchedExcercises);
        }
    }
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
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
            onClick={handleSearch}
              
            >
                
                Search
            </Button>
            </Box>
        </Stack>
        
    )   
}

export default SearchExcercise
