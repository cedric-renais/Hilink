'use client';

import { peole_url } from '@/constants';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] max-lg:min-w-[750px] max-md:min-w-[550px] max-sm:min-w-[270px] ${backgroundImage} rounded-5xl bg-cover bg-no-repeat`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:py-10">
        <div className="flex-center gap-4 rounded-2xl border border-gray-8 bg-gray-9 p-5">
          <div className="rounded-full bg-green-9 p-4">
            <Image
              src="/assets/icons/folded-map.svg"
              alt=""
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="bold-18 text-gray-1">{title}</span>
            <span className="regular-14 text-gray-1">{subtitle}</span>
          </div>
        </div>
        <div className="flex-center gap-2 rounded-2xl border border-gray-8 bg-gray-9 p-5">
          <span className="flex -space-x-4 overflow-hidden">
            {peole_url.map((url) => (
              <Image
                className="inline-block"
                key={url}
                src={url}
                alt=""
                width={40}
                height={40}
              />
            ))}
          </span>
          <span className="bold-16 md:bold-20 text-gray-1">{peopleJoined}</span>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -2200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 2200,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check

      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className="max-wrapper padding-wrapper relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="relative">
        <button
          className={`ml-8 rounded-full border border-green-3 ${
            isAtStart ? 'bg-gray-7' : 'bg-green-9 hover:bg-green-10'
          } transition-colors`}
          aria-label={
            isAtStart
              ? 'Début du contenu, bouton désactivé'
              : 'Défiler vers la gauche'
          }
          aria-disabled={isAtStart}
          onClick={scrollLeft}
          disabled={isAtStart}
        >
          <Image
            src="/assets/icons/chevron-left.svg"
            alt=""
            width={40}
            height={40}
          />
        </button>
        <button
          className={`ml-8 rounded-full border border-green-3 ${
            isAtEnd ? 'bg-gray-7' : 'bg-green-9 hover:bg-green-10'
          } transition-colors`}
          aria-label={
            isAtEnd
              ? 'Fin du contenu, bouton désactivé'
              : 'Défiler vers la droite'
          }
          aria-disabled={isAtEnd}
          onClick={scrollRight}
          disabled={isAtEnd}
        >
          <Image
            src="/assets/icons/chevron-right.svg"
            alt=""
            width={40}
            height={40}
          />
        </button>
        <div
          ref={scrollContainerRef}
          className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
        >
          <CampSite
            backgroundImage="bg-img-1"
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Participants"
          />
          <CampSite
            backgroundImage="bg-img-2"
            title="Mountain View Camp"
            subtitle="Quelque part en pleine nature"
            peopleJoined="50+ Participants"
          />
        </div>
      </div>
      <div className="flex-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl border border-green-3 bg-green-9 p-8 lg:max-w-[500px] xl:max-w-[730px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 lg:regular-40 text-gray-1">
            <strong>Vous vous sentez perdu</strong> et ne savez pas où aller ?
          </h2>
          <p className="regular-14 md:regular-16 mt-5 text-gray-1">
            Partant de l'anxiété des grimpeurs lorsqu'ils visitent un nouveau
            site d'escalade, le risque de se perdre est très élevé. C'est
            pourquoi nous sommes là pour ceux qui souhaitent commencer une
            aventure.
          </p>
          <Image
            className="camp-quote"
            src="/assets/images/quote.svg"
            alt=""
            width={186}
            height={219}
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
