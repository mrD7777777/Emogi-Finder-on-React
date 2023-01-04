import s from "./Card.module.css";


export function Card({ title, symbol, keywords }) {
  return (
    <div className={s.card}>
      <h2 className={s.card_emoji}>{symbol}</h2>
      <p className={s.card_title}>{title}</p>
      <p className={s.card_text}>{keywords}</p>
    </div>
  );
}