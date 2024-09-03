import Button from '@/components/Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="flex-center w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-20">
          <h2 className="bold-40 lg:bold-64 text-gray-1 xl:max-w-[320px]">
            Télécharger gratuitement
          </h2>
          <p className="regular-16 text-gray-1">
            Disponible sur iOS et Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Apple Store"
              icon="/assets/icons/apple.svg"
              variant="button-white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/assets/icons/android.svg"
              variant="button-green"
              full
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/assets/images/phones.webp"
            alt="Deux smartphones superposés affichant l'application sur leurs écrans."
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};
export default GetApp;
