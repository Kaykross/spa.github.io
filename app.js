const express = require('express');
const path = require('path');
const app = express();
const port = 4050;

const indexHTMLPath = path.resolve(__dirname,"public","index.html",);
const src = path.join(__dirname,"public","src",);

console.log(src);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/src',express.static(src));

app.get("*",(req,res)=>{
    console.log(req.headers);
    res.sendFile(indexHTMLPath);
});

app.listen(port,()=>console.log(`server running on ${port}`));
