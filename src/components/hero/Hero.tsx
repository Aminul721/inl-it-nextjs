"use client";

import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./Hero.module.css";

export type HeroSlideItem = {
  id?: string | number;
  title: React.ReactNode;
};

export type HeroProps = {
  videoSrc?: string;
  videoPoster?: string;
  slides?: HeroSlideItem[];
  effect?: "fade" | "slide";
};

const defaultSlides: HeroSlideItem[] = [
  {
    id: 1,
    title: (
      <>
        <span> Engineering </span>
        <br />
        the Future with <small className={styles.aiMark}>AI</small>.
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        We design.
        <br />
        <span> We deliver. </span>
        <br />
        we host.
      </>
    ),
  },
];

export default function Hero({
  videoSrc = "/videos/hero-video2-1.mp4",
  videoPoster = "/images/video-poster.jpg",
  slides = defaultSlides,
  effect = "fade",
}: HeroProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Provide at least 4 slides so Swiper's loop engine has enough clones to cycle infinitely
  const displaySlides = React.useMemo(() => {
    if (!slides || slides.length === 0) return [];
    if (slides.length < 4) {
      return [...slides, ...slides, ...slides];
    }
    return slides;
  }, [slides]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiperInstance = new Swiper(sliderRef.current, {
      modules: [Autoplay, EffectFade],
      loop: true,
      loopPreventsSliding: false,
      speed: 1200,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false, // Essential: avoids freezing when wrapper has no transition
      },
      effect: effect,
      fadeEffect: {
        crossFade: true,
      },
    });

    // Explicitly start autoplay on mount
    swiperInstance.autoplay.start();

    // Fallback interval to guarantee slides change one by one
    const timer = setInterval(() => {
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.slideNext();
      }
    }, 4000);

    return () => {
      clearInterval(timer);
      swiperInstance.destroy(true, true);
    };
  }, [displaySlides, effect]);

  return (
    <section
      className={`section section-hero ${styles.sectionHero} relative w-full overflow-hidden bg-black`}
    >
      <div
        className={`section-hero-wrap ${styles.sectionHeroWrap} relative z-10 w-full`}
      >
        {/* Background Video */}
        <div
          className={`section-hero-bg ${styles.sectionHeroBg} absolute inset-0 z-0 h-full w-full overflow-hidden`}
        >
          <video
            poster={videoPoster}
            className={`video-size ${styles.videoSize} h-full w-full object-cover`}
            muted
            loop
            autoPlay
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Swiper Hero Slider */}
        <div
          ref={sliderRef}
          className={`swiper hero-slider ${styles.heroSlider} relative z-10 h-full w-full`}
        >
          <div className="swiper-wrapper h-full w-full">
            {displaySlides.map((slide, index) => (
              <div
                key={`${slide.id ?? index}-${index}`}
                className="swiper-slide h-full w-full"
              >
                <div
                  className={`section-hero-contentwrap ${styles.sectionHeroContentwrap} container relative z-10 mx-auto flex h-full max-w-[1320px] flex-col items-center justify-center px-4 text-center`}
                >
                  <h1
                    className={`section-hero-content-title ${styles.sectionHeroContentTitle} font-heading select-none text-center font-black uppercase text-white`}
                  >
                    {slide.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
