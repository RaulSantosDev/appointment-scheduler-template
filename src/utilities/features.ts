import { Clock, Facebook, User } from "lucide-react";

export const features = [
  {
    icon: User,
    title: "Barbero Certificado",
    description: "Barber's Name",
    link: "https://wa.link/",
    label: "WhatsApp",
    iconButton: "https://www.svgrepo.com/show/521923/whatsapp.svg",
    target: "_blank",
  },
  {
    icon: Facebook,
    title: "Redes sociales",
    description: "Facebook",
    link: "https://www.facebook.com/profile.php?",
    label: "Facebook",
    iconButton: "https://www.svgrepo.com/show/509923/facebook.svg",
    target: "_blank",
  },
  {
    icon: Clock,
    title: "De lunes a domingo",
    description: `8:00 am - 7:00 pm`,
    link: "/schedule",
    label: "Agendar",
    iconButton: "https://www.svgrepo.com/show/533396/calendar-lines-pen.svg",
  },
];
