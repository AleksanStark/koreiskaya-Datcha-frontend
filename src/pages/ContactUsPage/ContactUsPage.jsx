import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { sendUserData } from "../../api/api";

const ContactUsPage = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be 3 symbols minimum")
      .max(30, "Name must be 30 symbols maximum")
      .required("Name is required"),
    email: Yup.string()
      .min(3, "Email must be 3 symbols minimum")
      .max(30, "Email must be 30 symbols maximum")
      .email("Must be a valid email!")
      .required("Email is required"),
    telegram: Yup.string().required("Telegram is required"),
    phoneNumber: Yup.string()
      .max(12, "Phone number must be 12 digits maximum")
      .required("Phone number is required"),
    description: Yup.string().required("Description is required"),
  });

  const nameId = useId();
  const emailId = useId();
  const telegramId = useId();
  const phoneNumberId = useId();
  const descriptionId = useId();

  const initialValues = {
    name: "",
    email: "",
    telegram: "",
    phoneNumber: "",
    description: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      await sendUserData(values); // Отправляем данные на сервер
      actions.resetForm(); // Очищаем форму после успешной отправки
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <label htmlFor={nameId}>Имя</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="span" />

            <label htmlFor={emailId}>Электронная почта</label>
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage name="email" component="span" />

            <label htmlFor={telegramId}>Телеграм</label>
            <Field type="text" name="telegram" id={telegramId} />
            <ErrorMessage name="telegram" component="span" />

            <label htmlFor={phoneNumberId}>Номер телефона</label>
            <Field type="text" name="phoneNumber" id={phoneNumberId} />
            <ErrorMessage name="phoneNumber" component="span" />

            <label htmlFor={descriptionId}>Опишите ваши проблемы</label>
            <Field as="textarea" name="description" id={descriptionId} />
            <ErrorMessage name="description" component="span" />

            <button type="submit">Отправить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsPage;
