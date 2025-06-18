const express = require("express")
const router = express.Router()
const apiRouter = require("./api/index")

router.use(process.env.API_URL, apiRouter )

router.use((req,res)=>{
  res.status(404).json({ error: "Page not found" });
})


module.exports = router