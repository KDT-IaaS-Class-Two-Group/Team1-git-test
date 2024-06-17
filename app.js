const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log('서버연결됨');
});

server.listen(PORT,(err)=>{
  if(err){
    throw new Error('에러가 발생했습니다. :' + err.code);
  } else {
    console.log('server open!');
    console.log(`http://localhost:${PORT}`);
  }
});

const app = "서버";
