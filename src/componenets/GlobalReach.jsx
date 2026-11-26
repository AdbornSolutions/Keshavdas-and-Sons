import { geoNaturalEarth1, geoPath } from "d3-geo";
import { useId, useMemo } from "react";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";

const MAP_WIDTH = 1240;
const MAP_HEIGHT = 646;

// Origin: India
const INDIA = {
  name: "India",
  coordinates: [78.9629, 20.5937],
};

// All requested destination countries
const destinations = [
  {
    id: "usa",
    name: "USA",
    coordinates: [-98.5795, 39.8283],
    delay: 0,
    labelOffset: [-16, 21],
    labelAnchor: "end",
  },
  {
    id: "uk",
    name: "UK",
    coordinates: [-3.436, 55.3781],
    delay: 0.5,
    labelOffset: [-14, -13],
    labelAnchor: "end",
  },
  {
    id: "australia",
    name: "Australia",
    coordinates: [133.7751, -25.2744],
    delay: 1,
    labelOffset: [-12, 28],
    labelAnchor: "end",
  },
  {
    id: "japan",
    name: "Japan",
    coordinates: [138.2529, 36.2048],
    delay: 1.5,
    labelOffset: [14, -14],
    labelAnchor: "start",
  },
  {
    id: "south-korea",
    name: "South Korea",
    coordinates: [127.7669, 35.9078],
    delay: 2,
    labelOffset: [-15, -24],
    labelAnchor: "end",
  },
  {
    id: "philippines",
    name: "Philippines",
    coordinates: [121.774, 12.8797],
    delay: 2.5,
    labelOffset: [15, 22],
    labelAnchor: "start",
  },
  {
    id: "thailand",
    name: "Thailand",
    coordinates: [100.9925, 15.87],
    delay: 3,
    labelOffset: [12, -20],
    labelAnchor: "start",
  },
  {
    id: "canada",
    name: "Canada",
    coordinates: [-106.3468, 56.1304],
    delay: 3.5,
    labelOffset: [14, -15],
    labelAnchor: "start",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    coordinates: [172.5, -41.5],
    delay: 4,
    labelOffset: [-14, 26],
    labelAnchor: "end",
  },
];

// Create curved animated connection paths
function createCurve(start, end) {
  const [x1, y1] = start;
  const [x2, y2] = end;

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const distance = Math.hypot(x2 - x1, y2 - y1);
  const curveHeight = Math.min(distance * 0.2, 95);

  return `
    M ${x1} ${y1}
    Q ${midX} ${midY - curveHeight}
    ${x2} ${y2}
  `;
}

// Reusable destination marker and country label
function DestinationMarker({ route, glowId }) {
  const [x, y] = route.position;
  const [offsetX, offsetY] = route.labelOffset;

  const labelX = x + offsetX;
  const labelY = y + offsetY;

  const labelWidth = Math.max(38, route.name.length * 7 + 20);

  const labelHeight = 24;

  let rectX = labelX;

  if (route.labelAnchor === "end") {
    rectX = labelX - labelWidth;
  } else if (route.labelAnchor === "middle") {
    rectX = labelX - labelWidth / 2;
  }

  return (
    <g>
      {/* Animated outer glow */}
      <circle
        cx={x}
        cy={y}
        r="10"
        fill="#FFCA61"
        className="global-destination-pulse"
        style={{
          animationDelay: `${route.delay}s`,
        }}
      />

      {/* Destination point */}
      <circle
        cx={x}
        cy={y}
        r="4"
        fill="#FFD57B"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        filter={`url(#${glowId})`}
      />

      {/* Connection to country label */}
      <line
        x1={x}
        y1={y}
        x2={labelX}
        y2={labelY}
        stroke="#FFD57B"
        strokeWidth="0.7"
        strokeOpacity="0.75"
      />

      {/* Country name background */}
      <rect
        x={rectX}
        y={labelY - 18}
        width={labelWidth}
        height={labelHeight}
        rx="6"
        fill="#102C5C"
        fillOpacity="0.93"
        stroke="#E4BC69"
        strokeWidth="0.7"
        strokeOpacity="0.6"
      />

      {/* Country name */}
      <text
        x={rectX + labelWidth / 2}
        y={labelY - 2}
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="500"
        textAnchor="middle"
      >
        {route.name}
      </text>
    </g>
  );
}

function AnimatedGlobalMap() {
  const instanceId = useId().replace(/:/g, "");

  const glowId = `global-glow-${instanceId}`;
  const gradientId = `route-gradient-${instanceId}`;
  const indiaGlowId = `india-glow-${instanceId}`;

  // Generate SVG country shapes
  const { countries, projection, pathGenerator } = useMemo(() => {
    const countryFeatures = feature(
      worldData,
      worldData.objects.countries,
    ).features;

    const mapProjection = geoNaturalEarth1().fitExtent(
      [
        [25, 25],
        [MAP_WIDTH - 25, MAP_HEIGHT - 25],
      ],
      {
        type: "FeatureCollection",
        features: countryFeatures,
      },
    );

    return {
      countries: countryFeatures,
      projection: mapProjection,
      pathGenerator: geoPath(mapProjection),
    };
  }, []);

  const indiaPosition = projection(INDIA.coordinates);

  const indiaX = indiaPosition?.[0] ?? 0;
  const indiaY = indiaPosition?.[1] ?? 0;

  // Calculate map coordinates and animation paths
  const routes = destinations
    .map((destination) => {
      const targetPosition = projection(destination.coordinates);

      if (!targetPosition || !indiaPosition) {
        return null;
      }

      return {
        ...destination,
        position: targetPosition,
        path: createCurve(indiaPosition, targetPosition),
      };
    })
    .filter(Boolean);

  return (
    <div
      className="
        relative w-full
        aspect-[1240/646]
        overflow-hidden
      "
    >
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="Animated connections from India to USA, UK, Australia, Japan, South Korea, Philippines, Thailand, Canada, and New Zealand"
      >
        <defs>
          {/* Glow filter */}
          <filter id={glowId} x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="4" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Golden route gradient */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9436" />
            <stop offset="55%" stopColor="#FBCB61" />
            <stop offset="100%" stopColor="#FFE3A2" />
          </linearGradient>

          {/* India glow */}
          <radialGradient id={indiaGlowId}>
            <stop offset="0%" stopColor="#FF9436" stopOpacity="0.6" />

            <stop offset="100%" stopColor="#FF9436" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* WORLD MAP */}
        <g>
          {countries.map((country, index) => {
            const isIndia = Number(country.id) === 356;

            return (
              <path
                key={country.id ?? index}
                d={pathGenerator(country) || ""}
                fill={isIndia ? "#FFAD47" : "#9DAFC7"}
                fillOpacity={isIndia ? 0.95 : 0.8}
                stroke={isIndia ? "#FFD98A" : "#54749D"}
                strokeWidth={isIndia ? 1.5 : 0.65}
                strokeLinejoin="round"
              />
            );
          })}
        </g>

        {/* ANIMATED CONNECTION ROUTES */}
        <g>
          {routes.map((route) => (
            <g key={route.id}>
              {/* Subtle background path */}
              <path
                d={route.path}
                fill="none"
                stroke="#FFD077"
                strokeWidth="1"
                strokeOpacity="0.16"
              />

              {/* Animated gold line */}
              <path
                d={route.path}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                className="global-route-line"
                style={{
                  animationDelay: `${route.delay}s`,
                }}
              />

              {/* Moving light particle */}
              <circle
                r="3.5"
                fill="#FFF1C2"
                className="global-moving-particle"
                filter={`url(#${glowId})`}
              >
                <animateMotion
                  path={route.path}
                  dur="6s"
                  begin={`${route.delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </g>

        {/* DESTINATION MARKERS AND COUNTRY NAMES */}
        <g>
          {routes.map((route) => (
            <DestinationMarker key={route.id} route={route} glowId={glowId} />
          ))}
        </g>

        {/* INDIA ORIGIN */}
        <g>
          {/* Orange glowing area */}
          <circle
            cx={indiaX}
            cy={indiaY}
            r="32"
            fill={`url(#${indiaGlowId})`}
            className="india-main-glow"
          />

          {/* Pulsing rings */}
          <circle
            cx={indiaX}
            cy={indiaY}
            r="12"
            fill="none"
            stroke="#FFD27A"
            strokeWidth="2"
            className="india-pulse-ring"
          />

          <circle
            cx={indiaX}
            cy={indiaY}
            r="12"
            fill="none"
            stroke="#FFD27A"
            strokeWidth="2"
            className="india-pulse-ring"
            style={{
              animationDelay: "1.2s",
            }}
          />

          {/* India point */}
          <circle
            cx={indiaX}
            cy={indiaY}
            r="6"
            fill="#FF9436"
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* India name label */}
          <g transform={`translate(${indiaX - 85}, ${indiaY + 15})`}>
            <rect
              width="87"
              height="30"
              rx="8"
              fill="#102C5C"
              stroke="#FFD27A"
              strokeOpacity="0.7"
            />

            <text
              x="43.5"
              y="19"
              fill="#FFFFFF"
              fontSize="12"
              fontWeight="600"
              letterSpacing="1"
              textAnchor="middle"
            >
              INDIA
            </text>
          </g>
        </g>
      </svg>

      {/* Animation CSS */}
      <style>{`
        .global-route-line {
          stroke-dashoffset: 1;
          animation: drawGlobalRoute 6s ease-in-out infinite;
        }

        @keyframes drawGlobalRoute {
          0% {
            stroke-dashoffset: 1;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          65% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          90% {
            stroke-dashoffset: 0;
            opacity: 0.9;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 0.25;
          }
        }

        .global-destination-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: destinationPulse 3s ease-in-out infinite;
        }

        @keyframes destinationPulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.55;
            transform: scale(1.7);
          }
        }

        .india-pulse-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: indiaRing 2.5s ease-out infinite;
        }

        @keyframes indiaRing {
          0% {
            transform: scale(0.6);
            opacity: 1;
          }

          100% {
            transform: scale(3.4);
            opacity: 0;
          }
        }

        .india-main-glow {
          transform-box: fill-box;
          transform-origin: center;
          animation: indiaGlow 3s ease-in-out infinite;
        }

        @keyframes indiaGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-route-line,
          .global-destination-pulse,
          .india-pulse-ring,
          .india-main-glow {
            animation: none !important;
          }

          .global-route-line {
            stroke-dashoffset: 0;
            opacity: 0.9;
          }

          .global-moving-particle {
            display: none;
          }

          .global-destination-pulse {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      className="
        w-full overflow-hidden
        bg-[#29436D] text-white
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1440px] lg:min-w-[90%]
          px-5 py-12
          sm:px-10 sm:py-16
          lg:px-[80px]
          xl:min-h-[1284px]
          xl:px-[100px]
          xl:pt-[140px]
          xl:pb-[90px]
        "
      >
        {/* HEADING */}
        <div
          className="
            flex flex-col justify-between
            gap-6
            lg:flex-row lg:items-end
          "
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-white/70" />

              <span className="text-[12px] font-medium">Our Global Reach</span>
            </div>

            <h2
              className="
                text-[32px] font-semibold
                leading-[1.12] tracking-[-1px]
                sm:text-[45px]
                lg:text-[55px]
                xl:text-[59px]
              "
            >
              Connecting <span className="text-[#FF9436]">Healthcare</span>
              <br />
              <span className="text-[#FF9436]">Markets</span> Worldwide.
            </h2>
          </div>

          <p
            className="
              max-w-[390px]
              text-[13px] leading-[1.6]
              text-[#CDD8E8]
              sm:text-[15px]
              lg:mb-2
              xl:text-[17px]
            "
          >
            Supporting pharmaceutical sourcing and export inquiries across
            international markets.
          </p>
        </div>

        {/* ANIMATED GLOBAL MAP */}
        <div
          className="
            mt-10 w-full
            sm:mt-14
            xl:mt-[85px]
          "
        >
          <AnimatedGlobalMap />
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 sm:mt-14 xl:mt-[30px]">
          <div
            className="
              mb-6 h-px w-[60%]
              max-w-[625px]
              bg-[#466084]
            "
          />

          <p
            className="
              max-w-[1100px]
              text-[11px] leading-[1.7]
              text-[#A9BDD6]
              sm:text-[12px]
              xl:text-[13px]
            "
          >
            Routes displayed are illustrative of international pharmaceutical
            sourcing opportunities. Actual availability and service coverage
            depend on each inquiry and destination-country regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
