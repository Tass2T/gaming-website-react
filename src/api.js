// base URL
const base_url= 'https://api.rawg.io/api/'

// getting current date
const getCurrentMonth = () => {
    const month = new Date().getMonth()+1
    return month< 10 ? `0${month}` : month
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    return day< 10 ? `0${day}` : day
}
const getCurrentYear = () => {
    const year = new Date().getFullYear()
    return year
}

const currentYear = getCurrentYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popular_games= `games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`