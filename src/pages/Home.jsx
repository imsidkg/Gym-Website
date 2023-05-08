import React from 'react'
import {Box} from '@mui/material';
import {useState} from 'react';
import HeroBanner from '../Components/HeroBanner'
import SearchExcercises from '../Components/SearchExcercises'
import Excercise from '../Components/Excercise'

const Home = () => {
    const [excercises, setExcercises]=useState([]);
    const [bodyPart, setbodyPart] = useState('all')
    return (
       <Box>
           <HeroBanner/>
           <SearchExcercises
           setExcercises={setExcercises}
           setbodyPart={setbodyPart}
           bodyPart={bodyPart}
           />
           <Excercise 
           setExcercises={setExcercises}
           setbodyPart={setbodyPart}
           bodyPart={bodyPart}/>

       </Box>
    )
}

export default Home
