import { footer_contact_info, footer_links, socials } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="padding-wrapper max-wrapper flex w-full flex-col gap-14">
      <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
        <Link className="mb-10" href="#">
          <Image
            src="/assets/images/hilink-logo.webp"
            alt="Retour en haut de la page."
            width={74}
            height={29}
          />
        </Link>
        <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
          {footer_links.map((columns) => (
            <FooterColumn key={columns.title} title={columns.title}>
              <ul className="regular-16 flex flex-col gap-4 text-gray-9">
                {columns.links.map((link) => (
                  <li key={link}>
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
          <div className="flex flex-col gap-5">
            <FooterColumn title={footer_contact_info.title}>
              <ul className="regular-16 flex flex-col gap-4 text-gray-9">
                {footer_contact_info.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      className="flex gap-4 md:flex-col lg:flex-row"
                      href="#"
                    >
                      <p className="whitespace-nowrap">
                        {link.title} :{' '}
                        <span className="text-gray-9">{link.value}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
          <div className="flex flex-row gap-5">
            <FooterColumn title={socials.title}>
              <ul className="regular-16 flex flex-row gap-4 text-gray-9">
                {socials.links.map((link) => (
                  <li key={link.name}>
                    <Link href="#">
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-6">
        <p className="regular-16 mt-6 text-center text-gray-9">
          © {date} Hilink. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="bold-18 whitespace-nowrap">{title}</h3>
      {children}
    </div>
  );
};

export default Footer;
