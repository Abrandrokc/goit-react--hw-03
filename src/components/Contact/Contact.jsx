import css from "./Contact.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function Contact({ contact: { name, number, id }, deleteContack }) {
    const handelDelete = () => {deleteContack(id)}
    return <li className={css.li} >
        <div className={css.div}>
            <p><FaUserAlt  /> {name}</p>
        <p> <FaPhone/> {number}</p>
        </div>
        
         <button className={css.click} type="button" onClick={handelDelete}>Delete</button>
    </li>
}