export const excerciseOptions = {   
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': '75513dbd93msh4089bc3bc628c0ap19a73djsn1868d2523e32'
        } 
};
export const fetchData= async (url,options)=> {
    const response =await fetch(url,options);
    // response.json() is a method in response object(in this case it is respnse) to extract json object(in this case data) from the response object(in this case it is response)
    const data= await response.json();
    return data;
}