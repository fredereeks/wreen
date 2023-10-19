import React from 'react'

export default function TextInput({ containerClassName, label, required, disabled, className, placeholder, type, min, minLength, max, name, id, onChange }) {
  containerClassName = containerClassName || '';
  disabled = disabled || false;
  id = id || '';
  min = min || '';
  minLength = minLength || '';
  max = max || '';
  name = name || '';
  required = required || true;
  type = type || 'text';
  return (
    <div className={`${containerClassName} flex flex-col gap-1`}>
      <label htmlFor={id} className="text-gray-600 text-sm">{label} {required === true || required === 'true' ? <span className='text-red-500 text-xs -translate-y-2'>*</span> : ''} </label>
      {required === true || required === 'true' ? 
      <input type={type} required={required} id={id} name={name} placeholder={placeholder} min={min} max={max} minLength={minLength} onChange={onChange} className={`outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70 ${className}`} /> :
      <input type={type} id={id} name={name} placeholder={placeholder} min={min} max={max} minLength={minLength} onChange={onChange} className={`outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70 ${className}`} /> }
    </div>
  )
}
