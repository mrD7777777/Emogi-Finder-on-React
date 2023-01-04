import { Input } from "../Input/Input";
import { Card } from "../Card/Card";
import s from "./Main.module.css";
import { data } from "../../data/emoji";
import { useState } from "react";
import { getUnicData } from "../../utils/getUnicData";


export function Main({newData}) {
  const [value, setValue] = useState("")
  return (
    <main>
      <Input value={value} setValue={setValue} />
      {newData
        .filter(
          (el) =>
            el.title.toLowerCase().includes(value.trim().toLowerCase()) ||
            el.keywords.includes(value.trim().toLowerCase())
        )
        .map((el) => (
          // <Card title={el.title} symbol={el.symbol} keywords={el.keywords} />//полная запись map
          <Card key={JSON.stringify(el)} {...el} />
        ))}
    </main>
  );
}
