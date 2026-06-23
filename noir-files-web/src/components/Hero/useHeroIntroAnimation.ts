import { useEffect } from "react";
import gsap from "gsap";

export function useHeroIntroAnimation() {
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
            }
        });

        gsap.set([
            ".hero__title",
            ".hero__slogan",
            ".hero__cta",
            ".rain-canvas"
        ], {
            opacity: 0,
            y: 20,
            filter: "blur(8px)"
        });

        tl.to(
            ".rain-canvas",
            {
                opacity: 1,
                duration: 1
            }, 0.5);

        tl.to(".hero__title", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1
        }, 2);

        tl.to(".hero__slogan", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8
        }, 2.4);
        tl.to(".hero__cta", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8
        }, 2.8);

        return () => { tl.kill(); };
    }, []);
}