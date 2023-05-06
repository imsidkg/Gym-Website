import React from 'react'
import {Box} from '@mui/material';
import {useState} from 'react';
import HeroBanner from '../Components/HeroBanner'
import SearchExcercises from '../Components/SearchExcercises'
import Excercise from '../Components/Excercise'

const Home = () => {
    return (
       <Box>
           <HeroBanner/>
           <SearchExcercises/>
           <Excercise/>

       </Box>
    )
}

export default Home
