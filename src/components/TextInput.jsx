import React from 'react'

export default function TextInput({ containerClassName, label, required, disabled, className, placeholder, type, min, minLength, max, name, id, onChange }) {
  id = id || '';
  disabled = disabled || false;
  required = required || true;
  min = min || '';
  minLength = minLength || '';
  max = max || '';
  name = name || '';
  type = type || 'text';
  return (
    <div className={`${containerClassName} flex flex-col gap-1`}>
      <label htmlFor={id} className="text-gray-600 text-sm">{label}</label>
      <input type={type} required={required} id={id} name={name} placeholder={placeholder} min={min} max={max} minLength={minLength} onChange={onChange} className={`outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70 ${className}`} />
    </div>
  )
}
