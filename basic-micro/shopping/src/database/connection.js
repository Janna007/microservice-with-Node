const mongoose=require('mongoose')

const dbConnection=async ()=>{
      try {
        const connection=await mongoose.connect(process.env.MONGODB_URL)
        console.log("shopping db connected")
      } catch (error) {
        console.log(error)
        process.exit(1)
      }
}

module.exports=dbConnection;