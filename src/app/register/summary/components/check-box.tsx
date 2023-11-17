export default function CheckBox({
    id,
    label,
    checked,
    onChange,
}: {
    id: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className='flex items-start space-x-3'>
            <div
                className={`relative aspect-square h-5 w-5 rounded border border-gray-300 ${
                    checked ? 'bg-[#941214]' : 'bg-white'
                }`}
            >
                <input
                    id={id}
                    type='checkbox'
                    className='absolute bottom-0 left-0 right-0 top-0 opacity-0'
                    checked={checked}
                    onChange={onChange}
                />
                {checked && (
                    <svg
                        className='pointer-events-none absolute h-5 w-5 fill-current text-white'
                        viewBox='0 0 20 20'
                    >
                        <path
                            d='M16.7,5.3c-0.4-0.4-1-0.4-1.4,0L7.4,13.2L4.7,10.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3.3,3.3c0.2,0.2,0.4,0.3,0.7,0.3
                            s0.5-0.1,0.7-0.3l8.7-8.7C17.1,6.3,17.1,5.7,16.7,5.3z'
                        />
                    </svg>
                )}
            </div>
            <label
                htmlFor={id}
                className='w-full text-left text-sm text-gray-700'
            >
                {label}
            </label>
        </div>
    );
}
