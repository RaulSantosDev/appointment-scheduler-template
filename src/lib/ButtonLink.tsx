type ButtonLinkProps = {
  label: string;
  link: string;
  iconButton: string;
};

export const ButtonLink = ({ label, link, iconButton }: ButtonLinkProps) => {
  return (
    <button
      className="
        w-full p-2 mt-2 bg-yellow-400/80 text-black rounded-xl font-bold text-lg
        transition-all duration-300 transform active:scale-[0.98]
        hover:bg-primary hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none hover:cursor-pointer
      "
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium text-bg-h"
      >
        <img
          src={iconButton}
          alt="WhatsApp"
          className="w-[1.5em] h-[1.5em] mr-2"
        />
        {label}
      </a>
    </button>
  );
};
