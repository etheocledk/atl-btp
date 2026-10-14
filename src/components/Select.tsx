import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'

type Props = {
  name: string
  label: string
  options: string[]
  placeholder?: string
  className?: string
}

/**
 * Liste déroulante personnalisée (motif ARIA « listbox »).
 * La valeur est transmise au formulaire via un input caché portant `name`.
 */
export default function Select({ name, label, options, placeholder = 'Sélectionnez', className = '' }: Props) {
  const id = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [active, setActive] = useState(0)

  // Ferme au clic à l'extérieur
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Donne le focus à la liste à l'ouverture et garde l'option active visible
  useEffect(() => {
    if (!open) return
    listRef.current?.focus()
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  function openList() {
    const selected = options.indexOf(value)
    setActive(selected >= 0 ? selected : 0)
    setOpen(true)
  }

  function choose(index: number) {
    setValue(options[index])
    setOpen(false)
    buttonRef.current?.focus()
  }

  function onButtonKeyDown(e: KeyboardEvent) {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openList()
    }
  }

  function onListKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => Math.min(i + 1, options.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
        break
      case 'Home':
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        e.preventDefault()
        setActive(options.length - 1)
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        choose(active)
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        break
      case 'Tab':
        setOpen(false)
        break
    }
  }

  return (
    <div ref={rootRef} className={`grid gap-2 text-sm font-medium ${className}`}>
      <span id={`${id}-label`}>{label}</span>
      <input type="hidden" name={name} value={value} />

      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-value`}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onButtonKeyDown}
          className={`flex w-full items-center justify-between gap-3 rounded-lg border bg-white px-4 py-3 text-left text-sm font-normal outline-none transition focus:border-atl-light focus:ring-2 focus:ring-atl-light/20 ${
            open ? 'border-atl-light ring-2 ring-atl-light/20' : 'border-gray-200'
          }`}
        >
          <span id={`${id}-value`} className={value ? 'text-graphite' : 'text-gray-400'}>
            {value || placeholder}
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-atl transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={`${id}-label`}
            aria-activedescendant={`${id}-opt-${active}`}
            onKeyDown={onListKeyDown}
            className="absolute inset-x-0 top-full z-20 mt-2 max-h-64 overflow-auto rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl outline-none"
          >
            {options.map((option, i) => {
              const selected = option === value
              return (
                <li
                  key={option}
                  id={`${id}-opt-${i}`}
                  data-index={i}
                  role="option"
                  aria-selected={selected}
                  onPointerEnter={() => setActive(i)}
                  onClick={() => choose(i)}
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-normal transition-colors ${
                    i === active ? 'bg-atl/5 text-atl' : 'text-graphite'
                  } ${selected ? 'font-semibold text-atl' : ''}`}
                >
                  {option}
                  {selected && <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
