import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'button-green' | 'button-gray';
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flex-center gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};
export default Button;
