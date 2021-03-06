import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import Game from '../components/Game'
import styled from "styled-components"
import {motion} from 'framer-motion'

const Home = () => {
    
    const dispatch= useDispatch()
    const {popular, newGames, upcoming} = useSelector((state)=> state.games)

    useEffect(() => {
        dispatch(loadGames())
      }, [])

      return (
          <GameList>
              <h2>Upcoming Games</h2>
              <Games>
                  {upcoming.map(game => (
                      <Game key={game.id} info={game} />
                  ))}
              </Games>
          </GameList>
      )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    /* the minimum is 500px */
    grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home