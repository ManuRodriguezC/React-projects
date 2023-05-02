import { Square } from "./Square"

export function WinnerModal ({ resetGame, winner }) { 
    if (winner == null) return null

    const winnerText = winner === false ? 'Empate' : 'Gano'

    return (
          <section>
            <div className='winner'>
              <h2>{winnerText}</h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }