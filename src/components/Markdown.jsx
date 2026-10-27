// Mini-rendu markdown pour le « README » : paragraphes, listes « - », **gras**, `code`, [lien](url).
import { Fragment } from 'react'

function inline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((p, i) => {
    if (p.startsWith('**')) return <strong key={i}>{p.slice(2, -2)}</strong>
    if (p.startsWith('`')) return <code key={i}>{p.slice(1, -1)}</code>
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link)
      return (
        <a key={i} href={link[2]} target="_blank" rel="noreferrer">
          {link[1]}
        </a>
      )
    return <Fragment key={i}>{p}</Fragment>
  })
}

export default function Markdown({ source = '' }) {
  const blocks = source.trim().split(/\n\s*\n/)
  return (
    <div className="markdown">
      {blocks.map((block, i) => {
        const lines = block.split('\n')
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.trim().slice(2))}</li>
              ))}
            </ul>
          )
        }
        return <p key={i}>{inline(lines.join(' '))}</p>
      })}
    </div>
  )
}
