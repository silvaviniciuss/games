import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { BlackJack } from "../pages/BlackJackPage/BlackJack"
import { JokenPo } from "../pages/JokenPoPage/JokenPo"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/blackjack" element={<BlackJack/>}/>
                <Route path="/jokenpo" element={<JokenPo/>} />
            </Routes>
        </BrowserRouter>
    )
}