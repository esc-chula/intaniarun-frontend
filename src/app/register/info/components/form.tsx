import Image from 'next/image';

export default function FormComponent({
    label,
    id,
    placeholder,
    type = 'text', // default type is text
    required = false,
    options,
    onChange,
    name,
    value,
    description,
}: {
    label?: string;
    id: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    className?: string;
    options?: { value: string; label: string }[];
    onChange?: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => void;
    name?: string;
    value?: string | number;
    description?: string;
}) {
    return (
        <>
            <div className='grid gap-2 text-left'>
                <label htmlFor={id} className='font-bold'>
                    {label}
                </label>
                {options ? (
                    <div className='relative w-full rounded-lg'>
                        <select
                            name={name}
                            id={id}
                            required={required}
                            className={`h-[48px] w-full appearance-none rounded-lg bg-white px-4 py-2 text-sm accent-primary-100`}
                            defaultValue=''
                            value={value}
                            onChange={onChange}
                        >
                            <option disabled value=''>
                                {placeholder}
                            </option>
                            {options.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute bottom-0 right-5 flex h-full items-center'>
                            <Image
                                src='/dropdown-arrow.svg'
                                alt='dropdown-arrow'
                                width={16}
                                height={16}
                            ></Image>
                        </div>
                    </div>
                ) : (
                    <input
                        name={name}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        className={`h-[48px] w-full rounded-[10px] px-4 py-2 text-sm accent-primary-100`}
                        onChange={onChange}
                        value={value}
                    />
                )}
                <p className='text-sm text-slate-600'>{description}</p>
            </div>
            {name === 'shirtSize' && (
                <Image
                    src='/shirt-size.png'
                    alt='shirt-size'
                    width={700}
                    height={220}
                />
            )}
        </>
    );
}
