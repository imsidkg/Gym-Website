import React from 'react'
import {Box} from '@mui/material';
import {useState} from 'react';
import HeroBanner from '../Components/HeroBanner'
import SearchExcercise from '../Components/SearchExcercise'
import Excercise from '../Components/Excercise'

const Home = () => {
    return (
       <Box>
           <HeroBanner/>
           <SearchExcercise/>
           <Excercise/>

       </Box>
    )
}

export default Home
