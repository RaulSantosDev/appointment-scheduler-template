import { Link } from "react-router-dom";

type ButtonLinkProps = {
  label: string;
  iconButton: string;
  link: string
};

export const ButtonLink = ({ label, iconButton, link }: ButtonLinkProps) => {
  return (
    
      <Link
        to={link}
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium w-full justify-center 
        mt-2 bg-yellow-400/80 text-black rounded-xl p-4 text-lg
        transition-all duration-300 transform active:scale-[0.98]
        hover:bg-primary hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
        "
      >
        <img
          src={iconButton}
          alt="WhatsApp"
          className="w-[1.5em] h-[1.5em] mr-2"
        />
        {label}
      </Link>
  );
};
