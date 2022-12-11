import { axiosInstance } from "./config"

export const searchForMovie = async (searchValue) => {
    if (!searchValue) return

    return await axiosInstance.get(`/?t=${searchValue}&apiKey=422b0d85`)
}