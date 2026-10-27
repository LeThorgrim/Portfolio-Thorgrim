// Petites icônes SVG (trait, 16 px) — ajoute les tiennes dans PATHS.
const PATHS = {
  book: 'M2.5 3.5c1.8-1 4-1 5.5.5 1.5-1.5 3.7-1.5 5.5-.5v9c-1.8-1-4-1-5.5.5-1.5-1.5-3.7-1.5-5.5-.5zM8 4v9.5',
  briefcase: 'M2 5.5h12v7.5H2zM5.5 5.5V3.5h5v2M2 9h12',
  trophy: 'M5 2.5h6v3.5a3 3 0 0 1-6 0zM5 3.5H2.5v1a2 2 0 0 0 2.5 2M11 3.5h2.5v1a2 2 0 0 1-2.5 2M8 9v2.5M5.5 13.5h5M6.5 11.5h3v2h-3z',
  location: 'M8 14.5s-4.5-4-4.5-7.5a4.5 4.5 0 0 1 9 0c0 3.5-4.5 7.5-4.5 7.5zM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
  link: 'M6.5 9.5l3-3M7 4.5l1-1a2.8 2.8 0 0 1 4 4l-1 1M9 11.5l-1 1a2.8 2.8 0 0 1-4-4l1-1',
  email: 'M2 3.5h12v9H2zM2 4l6 5 6-5',
  github: 'M6 13c-3 1-3-1.5-4.5-2M10 14.5v-2.2a2 2 0 0 0-.5-1.5c2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.4 3.2 3.2 0 0 0 0-2.4s-.8-.2-2.5 1a8.6 8.6 0 0 0-4.5 0C3.8 1.3 3 1.5 3 1.5a3.2 3.2 0 0 0 0 2.4 3.5 3.5 0 0 0-1 2.4c0 3.5 2 4.3 4 4.5a2 2 0 0 0-.5 1.5v2.2',
  linkedin: 'M2.5 2.5h11v11h-11zM5 7v4.5M5 5v.01M7.5 11.5V7M7.5 9a2 2 0 0 1 4 0v2.5',
  website: 'M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM1.5 8h13M8 1.5c2 2 2.5 4 2.5 6.5S10 12.5 8 14.5C6 12.5 5.5 10.5 5.5 8S6 3.5 8 1.5z',
  download: 'M8 2v8M4.5 7 8 10.5 11.5 7M2.5 13.5h11',
  star: 'M8 1.8l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.6l-3.8 2 .7-4.3-3.1-3 4.3-.6z',
  pin: 'M10 2l4 4-2.5 1L9 9.5l.5 3-1 1-3-3L2.5 13.5 2 14l.5-.5 3-3-3-3 1-1 3 .5L9 4.5z',
  calendar: 'M2.5 3.5h11v10h-11zM2.5 6.5h11M5.5 2v3M10.5 2v3',
  search: 'M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM10.5 10.5 14 14',
  sun: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1',
  moon: 'M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z',
  external: 'M9.5 2.5h4v4M13.5 2.5 7.5 8.5M11.5 9.5v4h-9v-9h4',
}

export default function Icon({ name, size = 16, className = '' }) {
  const d = PATHS[name] ?? PATHS.link
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
