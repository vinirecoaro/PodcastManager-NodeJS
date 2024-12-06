import { repositoryPodcast } from "../repositories/podcasts-repository"
import {PodcastTransferModel} from "../models/filter-podcast-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined) : Promise<PodcastTransferModel> => {

    // define return interface
    let responseFormat : PodcastTransferModel = {
        statusCode : 0,
        body : []
    }

    // fetching data
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}