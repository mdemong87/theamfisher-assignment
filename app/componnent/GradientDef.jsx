const GradientDef = ({ colorOne, colorTwo }) => (
    <svg style={{ height: 0, width: 0 }}>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: colorOne }} />
            <stop offset="100%" style={{ stopColor: colorTwo }} />
        </linearGradient>
    </svg>
);

export default GradientDef;