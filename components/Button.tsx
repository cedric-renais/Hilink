import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'button-green' | 'button-gray' | 'button-white';
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex-center gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      <span className="bold-16 cursor-pointer whitespace-nowrap">{title}</span>
    </button>
  );
};
export default Button;
