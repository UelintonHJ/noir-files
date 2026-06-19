import "./Hero.css";
import heroBackground from "../../assets/hero-background.webp";
import { RainCanvas } from "../RainCanvas/RainCanvas"
import { FogLayer } from "../FogLayer/FogLayer";
import { FilmGrain } from "../FilmGrain/FilmGrain";
import { Vignette } from "../Vignette/Vignette";

export function Hero() {
    return (
        <section className="hero">
            <div
                className="hero__background"
                style={{
                    ["--hero-background" as string]: `url(${heroBackground})`,
                }}
            />

            <div className="hero__overlay" />

            <div className="hero__content">
                <h1 className="hero__title">
                    Noir Files
                </h1>

                <p className="hero__slogan">
                    Entre sombras e evidências
                </p>

                <button
                    className="hero__cta"
                    type="button"
                    aria-label="Acessar casos do Noir Files"
                   // onClick={handleAccessCases}
                >
                    Acessar Casos
                </button>
            </div>

            <div className="hero__effects"> 
                <RainCanvas />
                <FogLayer />
                <FilmGrain />
                <Vignette />
            </div>
        </section>
    )
}