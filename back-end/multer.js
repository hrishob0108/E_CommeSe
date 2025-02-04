const multer = require('multer')

const storage = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,'upload/')//cb(throw new err, null)
},
filename:(req,file,cb)=>{
const uniqueSuffix = Date.now()+Math.round(Math.random()*1e9)
const filename = file.originalname.split('.')[0]
cb(null,filename+uniqueSuffix+'.png')//image+ghdyw6543456.png
}


})
const upload = multer({storage:storage})
module.export=upload