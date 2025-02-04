const app = require('./app')
const connectDB=require('./db/db')

process.on('uncaughtException',(error)=>{
    console.log(`server shutthing down ${error.message}`)
    process.exit(1)
})

 if(process.env.NODE_ENV !== 'PRODUCTION'){
     require('dotenv').config({path:'config/.env'})}
 
connectDB()

const port =5000
console.log(process.env.PORT)
app.listen(port,()=>{
    console.log(`Server suceessfully listen at port http://localhost:${port}`)
})

            

process.on('unhandledRejection',()=>{process.exit(1)})