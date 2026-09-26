import { useId, useState } from 'react';
import { ChevronDown } from './Icons.jsx';

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={`acc-item${open ? ' open' : ''}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          <span>{title}</span>
          <ChevronDown size={18} />
        </button>
      </h3>
      <div id={id} className="acc-panel" role="region" hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export default function Accordion({ children }) {
  return <div className="accordion">{children}</div>;
}
