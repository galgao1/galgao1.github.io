const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')
const router = express.Router()

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'))
//     res.end
// })

router.use(express.static(path.join(__dirname,+'css')))
router.use(express.static(path.join(__dirname,+'js')))
router.use(express.static(path.join(__dirname,+'assets')))

app.use(router)


app.listen(port, () => console.log(`Running at port ${port}`))
