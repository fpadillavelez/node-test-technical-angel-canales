const express = require('express');

// App
const router = express.Router();
const {top3MostLentBooksQ22021} = require('./src/handler')


router.get("/report",  async (req, res)=>{
    const data = await top3MostLentBooksQ22021();
    res.status(200).send(data)
});


router.get("/books",  async(req, res)=>{
    
    const {orderBy, pages } = req.query;
    const axios = require( 'axios' );
    let url = 'https://hiring.condorlabs.io/api/books';
    const request = await axios.get( url );
    let {data } = request;

    if ( orderBy !== "pages") return res.status(400).send();

    const result  = data.map( d => d.pages).sort()

    if (pages !== "asc") result.sort().reverse()
        

    return res.status(200).send(result)
})

module.exports = router;