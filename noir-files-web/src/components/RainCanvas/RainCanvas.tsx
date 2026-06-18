import { useEffect, useRef } from "react";

import "./RainCanvas.css";

type Raindrop = {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
};

export function RainCanvas() {
    const canvasRef =
        useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const context =
            canvas.getContext("2d");

        if (!context) return;

        const canvasElement = canvas;
        const ctx = context;

        let animationId = 0;

        const raindrops: Raindrop[] = [];

        function resizeCanvas() {
            const dpr = 
                window.devicePixelRatio || 1;

            canvasElement.width = 
                window.innerWidth * dpr;

            canvasElement.height =
                window.innerHeight * dpr;

            ctx.scale(dpr, dpr);
        }

        resizeCanvas();

        const dropsCount = 
            window.innerWidth <= 768
                ? 80
                : 220;

        for (
            let index = 0;
            index < dropsCount;
            index++
        ) {
            raindrops.push({
                x:
                    Math.random() *
                    canvasElement.width,

                y: 
                    Math.random() *
                    canvasElement.height,

                length:
                    10 +
                    Math.random() * 12,

                speed: 
                    4 +
                    Math.random() * 4,

                opacity: 
                    0.05 +
                    Math.random() * 0.15
            });
        }

        function drawRain() {
            ctx.clearRect(
                0,
                0,
                canvasElement.width,
                canvasElement.height
            );

            ctx.strokeStyle =
                "rgba(255,255,255,0.12)";

            ctx.lineWidth = 1;

            ctx.beginPath();

            raindrops.forEach((drop) => {
                ctx.moveTo(
                    drop.x,
                    drop.y
                );

                ctx.lineTo(
                    drop.x - 6,
                    drop.y + drop.length
                );
            });

            ctx.stroke();
        }

        function updateRain() {
            raindrops.forEach((drop) => {
                drop.y += drop.speed;
                drop.x -= 0.4;

                if (
                    drop.y >
                    canvasElement.height
                ) {
                    drop.y = -20;

                    drop.x = 
                        Math.random() *
                        canvasElement.width;
                }

                if (
                    drop.x < -20
                ) {
                    drop.x = 
                        canvasElement.width +
                        20;
                }
            });
        }

        function animate() {
            drawRain();
            updateRain();
            animationId = 
                requestAnimationFrame(
                    animate
                );
        }

        animate();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        return () => {
            cancelAnimationFrame(
                animationId
            );

            window.removeEventListener(
                "resize",
                resizeCanvas
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="rain-canvas"
            aria-hidden="true"
        />
    );
}