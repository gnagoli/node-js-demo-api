const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader(`Content-Type`, `application/json`);

    res.end(`{
        "Name": "Luckmann",
        "Age": 31,
        "Profile": "Engineer"
    }`)
})

server.listen(3000, ()=>{
    console.log("runing on port : 3000")
});
