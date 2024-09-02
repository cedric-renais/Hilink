import Button from '@/components/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="max-wrapper padding-wrapper flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          className="absolute left-[-5px] top-[-25px] w-10 lg:left-[-10px] lg:top-[-50px] lg:w-[75px]"
          src="/assets/images/camp.svg"
          alt=""
          width={50}
          height={50}
        />
        <h1 className="bold-52 lg:bold-88">Camping de Puruk Truno</h1>
        <p className="regular-16 mt-6 leading-6 text-gray-9 xl:max-w-[520px]">
          Nous souhaitons être présents à chaque étape de votre quête pour
          découvrir la beauté incorruptible de la nature. Nous pouvons vous
          aider à vivre une aventure autour du monde avec une seule application.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-9">
            198k
            <span className="regular-16 lg:regular-20 ml-1.5">
              Avis excellents
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <Button
            type="button"
            title="Télécharger l'application"
            variant="button-green"
          />
          <Button
            type="button"
            title="Comment nous travaillons ?"
            icon="/assets/icons/play.svg"
            variant="button-white"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl border border-gray-3 bg-gray-9 px-7 py-8 shadow shadow-gray-9">
          <div className="flex flex-col">
            <div className="flex-between">
              <p className="regular-16 text-gray-1">Localisation</p>
              <Image
                src="/assets/icons/close-white.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-gray-1">Aguas Calientes</p>
          </div>

          <div className="flex-between">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-1">Distance</p>
              <p className="bold-20 text-gray-1">278,41 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-1">Altitude </p>
              <p className="bold-20 text-gray-1">2,040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
