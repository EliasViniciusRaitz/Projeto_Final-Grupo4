import app from "./src/app.js"
import https from "https"
import fs from "fs"


const server = https.createServer({
    key:  fs.readFileSync("privatekey.pem", "utf-8"),
    cert: fs.readFileSync("certificate.pem", "utf-8")
}, app)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server Rodando em http://localhost:${PORT}`);
} )