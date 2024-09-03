import Image from 'next/image';

const Guide = () => {
  return (
    <section className="flex-center flex-col">
      <div className="padding-wrapper max-wrapper w-full pb-24">
        <Image src="/assets/images/camp.svg" alt="" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 uppercase text-green-9">
          Nous sommes là pour vous
        </p>
        <div className="flex flex-wrap items-center justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[575px]">
            Vous guide vers des chemins faciles
          </h2>
          <p className="regular-16 text-gray-9 xl:max-w-[520px]">
            Avec l'application Hilink, vous ne vous perdrez plus jamais, même
            sans connexion Internet, grâce à nos cartes hors ligne. Invitez vos
            amis, vos proches et vos connaissances à profiter de la nature
            sauvage, des vallées et des sommets de montagnes.
          </p>
        </div>
      </div>
      <div className="flex-center max-xrapper relative w-full">
        <Image
          className="object-cover object-center 2xl:rounded-5xl"
          src="/assets/images/boat.webp"
          alt="La proue d'un kayak orange sur une eau calme."
          width={1440}
          height={580}
        />
        <div className="absolute flex gap-3 rounded-3xl border border-gray-5 bg-gray-1 py-8 pl-5 pr-7 shadow shadow-gray-1 md:top-20 lg:left-[25%]">
          <Image
            className="h-full w-auto"
            src="/assets/images/meter.svg"
            alt=""
            width={16}
            height={158}
          />
          <div className="flex-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex-between w-full">
                <span className="regalar-16 text-gray-9">Destination</span>
                <span className="bold-16 text-green-9">48 min</span>
              </div>
              <span className="bold-20 mt-2">Aguas Calientes</span>
            </div>
            <div className="flex w-full flex-col">
              <span className="regalar-16 text-gray-9">Début du trajet</span>
              <span className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Guide;
