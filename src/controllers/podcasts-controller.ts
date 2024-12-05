import {IncomingMessage, ServerResponse} from "http"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify([{
        podcastName: "flow",
        episode: "Ramon DINO foi supreendido e PERDEU O TÍTULO",
        videoid: "CUdQTF-yueg",
        categorias: ["healthy", "bodybuilder", "sport"]
    },
    {
        podcastName: "flow",
        episode: "GUTO GALAMBA - Flow #366",
        videoid: "ymJ0K76DeU4",
        categorias: ["healthy", "bodybuilder"]
    }]))
}