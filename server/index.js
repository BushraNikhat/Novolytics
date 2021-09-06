const express = require('express');
const cors = require('cors');
const {createApi} =require("unsplash-js");
global.fetch = require('node-fetch');
const app=express()

app.use(cors())
const unsplash = createApi({
    accessKey: '-WhBBTDd78zGJsRmpUICKZuFGPoF9E24fnA6YfHPeeM',
    secretKey:"y_KV2HieQm96KIJWdxD7Aom821JCCjijtDI4UU_1G7A"

  });

app.get("/api/photos",async(req,res)=>{
    try {
            // loading photos using unsplash route
    const result=await unsplash.search.getPhotos({
        query: 'cat',
        page: 1,
        perPage: 10,
      })
     if(result.type==="success"){
         return res.status(200).json(result)
     }
    } catch (error) {
        res.status(500).json(error.message)
    }

           
  
      

})
app.listen(5000,()=>{
    console.log("listening after long time in port 5000");
})