import s from "./Footer.module.css"

export function Footer({children}) {
  return (
    <>
      <footer>
        <div className={s.container}>
          <div>
            <button className={s.btn}>First</button>
            <button className={s.btn}>1</button>
            <button className={s.btn}>Last</button>
          </div>
          <div>
            <label for="p.num">Per page</label>
            <select name="p.num">
              <option>12</option>
              <option>24</option>
              <option>48</option>
            </select>
          </div>
        </div>
      </footer>
    </>
  );
}
