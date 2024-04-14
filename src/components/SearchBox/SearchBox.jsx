import css from "./SearchBox.module.css"
export default function SearchBox({value, onChange}) {
    return <div className={css.SearchBox}>
        <label>Find contacts by name</label>
        <input className={css.Input} type="text" value={value} onChange={(el) => {onChange(el.target.value)}} />
    </div>
}