import "./FogLayer.css";

export function FogLayer() {
    return (
        <>
            <div
                className="fog fog--back"
                aria-hidden="true"
            />

            <div
                className="fog fog--front"
                aria-hidden="true"
            />
        </>
    );
}