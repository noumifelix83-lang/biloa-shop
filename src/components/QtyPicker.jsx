import { MinusIcon, PlusIcon } from './Icons.jsx';

export default function QtyPicker({ value, onChange, min = 1, max = 20, small = false, label = 'Quantity' }) {
  return (
    <div className={`qty${small ? ' qty-sm' : ''}`} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="Decrease quantity">
        <MinusIcon size={16} />
      </button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="Increase quantity">
        <PlusIcon size={16} />
      </button>
    </div>
  );
}
