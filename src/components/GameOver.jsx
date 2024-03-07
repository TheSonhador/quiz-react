import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import sl02 from '../img/sl02.jpg'

import "./GameOver.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    let msg = () => {
      if (quizState.score <= 3) {
        return "Lixo! Lixo! Lixo!"  
      } else if (quizState.score <= 7) {
        return "Nada mal... pra um lixo"
      } else if (quizState.score == 8) {
        return "Isso sim é um fã de verdade, Parabéns!"
      }
    }

  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <p className="msg">{msg()}</p>
        <img src={sl02} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver