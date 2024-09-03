import { features } from '@/constants';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="flex-center bg-feature flex-col overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-wrapper padding-wrapper relative flex w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            className="feature-phone"
            src="/assets/images/phone.webp"
            alt="Smartphone affichant l'application à l'écran."
            width={440}
            height={1000}
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[66%]">
          <div className="relative">
            <Image
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              src="/assets/images/camp.svg"
              alt=""
              width={50}
              height={50}
            />
            <h2 className="bold-40 lg:bold-64">Nos fonctionnalités</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {features.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full bg-green-9 p-4 lg:p-7">
        <Image src={icon} alt="" width={28} height={28} />
      </div>
      <h3 className="bold-20 lg:bold-32 mt-5">{title}</h3>
      <p className="regular-16 mt-5 bg-gray-1/80 text-gray-9 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
