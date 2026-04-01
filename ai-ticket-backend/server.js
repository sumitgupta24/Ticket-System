import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./routes/user.route.js"

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", userRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDb connected successfully");
    app.listen(PORT, () => {
        console.log(`Server connected at PORT: ${PORT}`)
    })
})
.catch((err) => {
    console.error("Mongo DB error !!!!!!!!!")
})