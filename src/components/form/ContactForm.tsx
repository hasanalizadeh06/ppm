"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import InjectableSvg from "../common/InjectableSvg"
import { useTranslations } from 'next-intl';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {
   const t = useTranslations("Contact.form")

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('eaglesthemes', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast(t("toast"), { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact__form" id="contact-form">
         <div className="row gutter-20">
            <div className="col-lg-4">
               <div className="form-grp">
                  
                  <input {...register("user_name")} type="text" placeholder={t("item1")} />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="form-grp">
                  <input {...register("user_email")} type="email" placeholder={t("item2")} />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="form-grp">
                  <input type="tel" name="phone" placeholder={t("item3")} />
               </div>
            </div>
         </div>
         <div className="form-grp">
            <input type="text" name="subject" placeholder={t("item4")} />
         </div>
         <div className="form-grp">
            <textarea {...register("message")} placeholder={t("item5")}></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button type="submit" className="btn red-btn">{t("button")} <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></button>
      </form>
   )
}

export default ContactForm
