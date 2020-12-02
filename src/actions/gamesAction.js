import axios from 'axios'

import {popularGamesURL, upcomingGamesURL, newGamesURL} from '../api'

export const loadGames = () => async(dispatch) => {
    // can fetch with axios
    const popularData = await axios.get(popularGamesURL())
    const newData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular:popularData.data.results,
            newGames: newData.data.results,
            upcoming: upcomingData.data.results
        }
    })
}