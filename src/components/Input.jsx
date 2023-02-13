export function Input({ label, value, ...rest }) {
  return (
    <div className="w-full">
      <label className="flex flex-col items-start gap-2 text-light-400 ">
        {label}
        <input
          value={value}
          type="email"
          {...rest}
          className="w-full bg-dark-900 text-light-100 px-3.5 py-4 border-0 rounded-lg"
        />
      </label>
    </div>
  )
}
