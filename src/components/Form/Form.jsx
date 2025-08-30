import "./Form.css";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Button from "../Button/Button";

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmittable, setIsSubmittable] = useState(false);

  useEffect(() => {
    const formHasValues = !!name?.length && !!email?.length && !!message?.length;

    if (formHasValues) {
      setIsSubmittable(true);
    } else setIsSubmittable(false);
  }, [name, email, message])

  const {t} = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      name,
      email,
      message,
    }

    console.log("From values to submit", formValues);
  }

  return (
    <div className="form-block">
       <form
         className="form-wrap"
         onSubmit={onSubmit}
       >
         <input
           type="text"
           className="form-input"
           placeholder={t("Ваше имя")}
           onChange={(e) => setName(e.target.value)}
         />
         <input
           type="email"
           className="form-input"
           placeholder={t("Ваш email")}
           onChange={(e) => setEmail(e.target.value)}
         />
         <textarea
           className="form-input"
           placeholder={t("Сообщение")}
           rows={7}
           onChange={(e) => setMessage(e.target.value)}
         />
         <Button
           type="submit"
           className="form-button"
           text={t("Отправить")}
           disabled={!isSubmittable}
         />
       </form>
    </div>
  )
}

export default Form;
