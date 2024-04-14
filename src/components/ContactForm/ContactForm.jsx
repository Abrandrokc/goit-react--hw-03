import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: ""
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(3, "Too small").required("Required").max(50),
        number: Yup.string().min(3, "Too small").required("Required").max(50)
      })}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <Form className={css.form}>
        <div className={css.name}>
          <label htmlFor="name" >Name</label>
          <Field className={css.nameInput} type="text"  name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.number}>
          <label htmlFor="number" >Number</label>
          <Field className={css.numberInput} type="text"  name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.sumbit} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
