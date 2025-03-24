import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useId } from 'react';
import * as Yup from 'yup';

import styles from './FeedbackForm.module.css';
import Button from '../Button/Button.jsx';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  date: Yup.string().required('Required'),
  message: Yup.string().min(3, 'Too short').max(256, 'Too long'),
});

const initialValues = {
  name: '',
  email: '',
  message: '',
  date: '',
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log('object');
    toast.success('Your reservation has been successfully sent!');
    actions.resetForm();
  };

  return (
    <section className={styles.form_section}>
      <ToastContainer />
      <div className={styles.title}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={styles.form}>
          <div>
            <label htmlFor={nameFieldId}></label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name*"
              className={styles.input}
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label htmlFor={emailFieldId}></label>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email*"
              className={styles.input}
            />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label htmlFor={dateFieldId}></label>
            <Field
              type="text"
              name="date"
              id={dateFieldId}
              placeholder="Booking date*"
              className={styles.input}
            />
            <ErrorMessage name="date" component="span" />
          </div>

          <div>
            <label htmlFor={msgFieldId}></label>
            <Field
              as="textarea"
              name="message"
              id={msgFieldId}
              rows="5"
              placeholder="Comment"
              className={`${styles.textarea} ${styles.input}`}
            />
            <ErrorMessage name="message" component="span" />
          </div>

          <Button type="submit" variant="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </section>
  );
}
