import {  Clock, Facebook, User} from "lucide-react";

const urlWhatsapp = import.meta.env.VITE_URL_WHATSAPP;
const urlFacebook = import.meta.env.VITE_URL_FACEBOOK;


export const features = [
    {
      icon: User,
      title: "Barbero Certificado",
      description: "Barber's Name",
      link: urlWhatsapp ,
      label: "WhatsApp",
      iconButton: "https://www.svgrepo.com/show/521923/whatsapp.svg"

    },
    {
      icon: Facebook,
      title: "Redes sociales",
      description: "Facebook",
      link: urlFacebook,
      label: "Facebook",
      iconButton: "https://www.svgrepo.com/show/509923/facebook.svg"
    },
    {
      icon: Clock,
      title: "De lunes a domingo",
      description: `8:00 am - 7:00 pm`,
      link: "/schedule",
      label: "Agendar",
      iconButton: "https://www.svgrepo.com/show/533396/calendar-lines-pen.svg"
      
    },
  ];