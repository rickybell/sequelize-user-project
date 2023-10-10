import express from "express"
import logger from "morgan"
import path from "path"

const app = express()
const port = 4000

app.use(logger("tiny"))

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "app/views","index.html"))
})

app.listen(port, () =>
  console.log(`The server is listning on port ${port}`)
)
