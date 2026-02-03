/* Cute SVG illustrations - rounded, friendly style */
import Image from "next/image";

export function SwiftIllustration({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Cute Swift bird head/body */}
      <ellipse cx="32" cy="28" rx="12" ry="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Wing swoop */}
      <path d="M16 26 Q24 16 36 22 Q48 28 44 38 Q36 44 28 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85" />
      {/* Beak */}
      <path d="M40 26 L46 24 L44 20" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Eye */}
      <circle cx="36" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function SwiftIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <div className={`${className} filter brightness-0 invert-[0.6] sepia-[0.3] saturate(3) hue-rotate-[200deg]`}>
      <Image src="/swift.svg" alt="Swift" fill className="object-contain" />
    </div>
  );
}

export function FlutterIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <div className={`${className} filter brightness-0 invert-[0.4] sepia-[0.4] saturate(4) hue-rotate-[120deg]`}>
      <Image src="/flutter.svg" alt="Flutter" fill className="object-contain" />
    </div>
  );
}

export function UnityIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <div className={`${className} filter brightness-0 invert-[0.7] sepia-[0.2] saturate(2) hue-rotate-[280deg]`}>
      <Image src="/unity.svg" alt="Unity" fill className="object-contain" />
    </div>
  );
}

export function WebIcon({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <div className={`${className} filter brightness-0 invert-[0.5] sepia-[0.5] saturate(3) hue-rotate-[160deg]`}>
      <Image src="/nextjs.svg" alt="Web" fill className="object-contain" />
    </div>
  );
}

export function FlutterIllustration({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Flutter butterfly wings */}
      <path d="M18 20 Q24 12 32 20 Q40 12 46 20 Q40 28 32 20 Q24 28 18 20" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="32" cy="32" rx="12" ry="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M28 38 Q32 44 36 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function UnityIllustration({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Isometric Unity cube with depth */}
      <path d="M28 16 L44 24 L44 40 L28 48 L12 40 L12 24 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 16 L28 48" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
      <path d="M28 16 L44 24 L28 32 L12 24 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M28 32 L28 48 L12 40 L12 24" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M28 32 L44 40 L44 24" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Unity "U" hint */}
      <path d="M20 28 Q24 24 28 28 Q24 32 20 28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
    </svg>
  );
}

export function WebIllustration({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Browser window style globe */}
      <rect x="12" y="10" width="40" height="44" rx="6" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Window bar dots */}
      <circle cx="20" cy="16" r="2.2" fill="currentColor" fillOpacity="0.4" />
      <circle cx="26" cy="16" r="2.2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="32" cy="16" r="2.2" fill="currentColor" fillOpacity="0.4" />
      {/* Globe meridians */}
      <ellipse cx="32" cy="32" rx="18" ry="6" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
      <path d="M14 32 H50" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
      <path d="M20 22 Q32 28 44 22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M20 42 Q32 36 44 42" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function StarDecoration({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 4 L18 12 L26 14 L20 20 L22 28 L16 24 L10 28 L12 20 L6 14 L14 12 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CloudDecoration({ className = "h-12 w-16" }: { className?: string }) {
  return (
    
    <svg className={className} viewBox="0 0 64 48" fill="none">
      {/* Extra-round, cutesy cloud */}
      <path
        d="
          M12 32
          C12 25 17 20 23 20
          C24.5 15 29 12 34 12
          C40.5 12 45 16 46.5 21
          C51 21.5 56 25 56 31
          C56 37 51.5 40 47 40
          L18 40
          C13.5 40 10 37 10 33
          C10 29 12.5 26 16 25
          Z
        "
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
            {/* Optional cute face */}
            <circle cx="28" cy="30" r="1.1" fill="currentColor" />
      <circle cx="36" cy="30" r="1.1" fill="currentColor" />
      <path
        d="M30 33 Q32 34.5 34 33"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Tiny sparkle for extra cuteness */}
      <circle cx="24" cy="22" r="1.2" fill="currentColor" fillOpacity="0.3" />
      <circle cx="38" cy="18" r="0.9" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}


export function HeartDecoration({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 21 C12 21 2 14 2 8 C2 5 4 3 7 3 C9 3 11 4 12 6 C13 4 15 3 17 3 C20 3 22 5 22 8 C22 14 12 21 12 21 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function SunDecoration({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="10" fill="currentColor" fillOpacity="0.15" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 24 + Math.cos(angle) * 14;
        const y1 = 24 + Math.sin(angle) * 14;
        const x2 = 24 + Math.cos(angle) * 20;
        const y2 = 24 + Math.sin(angle) * 20;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

export function MoonDecoration({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M20 4
           C16 5 13 8.5 13 13
           C13 17.5 16 21 20 22
           C17.5 22.5 15 22 13 20.5
           C10 18.5 8.5 15.5 8.5 12.5
           C8.5 9.5 10 6.5 13 4.5
           C15 3 17.5 3 20 4Z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlantDecoration({ className = "h-12 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 56" fill="none">
      <rect
        x="10"
        y="34"
        width="20"
        height="16"
        rx="6"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 34 V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 20 C12 16 10 10 10 8 C16 8 20 12 20 20 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M20 20 C28 16 30 10 30 8 C24 8 20 12 20 20 Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
}
export function AppTileIllustration({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="10"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="18" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="30" cy="20" r="4" fill="currentColor" fillOpacity="0.3" />
      <rect
        x="16"
        y="28"
        width="16"
        height="6"
        rx="3"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}

export function SparkleDecoration({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 L13.5 8.5 L19 10
           L13.5 11.5 L12 17
           L10.5 11.5 L5 10
           L10.5 8.5 Z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlobDecoration({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="
          M10 6
          C14 4 19 4.5 22 7.5
          C25 10.5 26 15 24.5 18.5
          C23 22 19.5 24.5 15.5 25
          C11.5 25.5 8 24 6.5 20.5
          C5 17 6 12 8 9
          C8.8 7.8 9.4 7 10 6
        "
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
