import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import style from './ContactForm.module.css';

const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
  id: '',
};

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onAdd}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form} autocomplete="off">
        <div className={style.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} placeholder="Name" />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={style.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            placeholder="123-45-67"
          />
          <ErrorMessage
            className={style.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
