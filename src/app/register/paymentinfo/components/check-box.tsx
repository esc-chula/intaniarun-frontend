// CheckBox.jsx or CheckBox.tsx if using TypeScript
export default function CheckBox ({
    label, 
    checked, 
    onChange 
}:{
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
      <div className='inline-flex items-center space-x-2'>
        <div
          className={`relative h-5 w-5 ${
            checked ? 'bg-[#941214]' : 'bg-white'
          } rounded border border-gray-300`}
        >
          <input
            type='checkbox'
            className='absolute opacity-0'
            checked={checked}
            onChange={onChange}
          />
          {checked && (
            <svg
              className='pointer-events-none absolute inset-0 m-auto h-4 w-4 fill-current text-white'
              viewBox='0 0 20 20'
            >
              <path
                d='M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                            s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z'
              />
            </svg>
          )}
        </div>
        <label className='text-gray-700 text-[12px] items-start justify-start'>
          {label}
        </label>
      </div>
    );
  };
  