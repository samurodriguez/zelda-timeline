import "./style.css";
import { CardBand } from "../CardBand";

export const GameCard = ({ game }) => {
  return (
    <article className="gameCard">
      <img src={game.image} alt={game.title} />
      <h2>
        {game.title} ({game.date}) ({game.platform})
      </h2>

      <p>{game.text}</p>

      <CardBand condition={game.goty} className="goldText">
        GOTY
      </CardBand>
    </article>
  );
};
