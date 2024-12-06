import * as http from "http";
import { app } from "./app";

const server = http.createServer(app)

const port = parseInt(process.env.PORT || "3000", 10)

const host = "0.0.0.0"

server.listen(port, host, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})