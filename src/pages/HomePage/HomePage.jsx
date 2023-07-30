import {useNavigate} from "react-router-dom"
import {goToBlackJackPage, goToJokenPoPage} from "../../router/Coordinator"

export const HomePage = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <h1>Games</h1>
            <ul>
                <li
                onClick={()=> goToBlackJackPage(navigate)}
                >BlackJack(21)</li>
                <li
                onClick={() => goToJokenPoPage(navigate)}
                >JokenPo(Pedra, Papel, Tesoura)</li>
            </ul>
        </div>
    )
}