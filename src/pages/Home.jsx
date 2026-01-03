import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* HOME SECTIONS */
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Work from "../components/Work";
import About from "../components/About";
import Reviews from "../components/Reviews";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTarget;
    if (!target) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (!el) return;

      const headerOffset = 120;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  }, [location]);

  return (
    <>
    <Reveal><Hero /></Reveal>
    <Reveal><Services /></Reveal>
    <Reveal><Benefits /></Reveal>
    <Reveal><Work /></Reveal>
    <Reveal><About /></Reveal>
    <Reveal><Reviews /></Reveal>
    <Reveal><FAQs /></Reveal>
    <Reveal><Contact /></Reveal>
    </>
  );
};

export default Home;
