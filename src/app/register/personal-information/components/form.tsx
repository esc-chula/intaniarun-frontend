import Image from "next/image";

export default function FormComponent  ({
    label,
    id,
    placeholder,
    type = 'text', // default type is text
    required = false,
    className,
    options,
    onChange,
    name,
    value,
}:{
    label: string;
    id: string;
    placeholder: string;
    type?: string;
    required?: boolean;
    className?: string;
    options?: {value: string,label: string}[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    value: string | number;
}) {
    const baseClass = `mb-6 rounded-[10px] px-2 w-[350px] h-[48px] text-[13px] px-4 py-2 ${className}`;

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-2 text-[16px] font-bold">
                {label}
            </label>
            {options ? (
                <div className="relative rounded-lg w-full">
                    <select
                        id={id}
                        required={required}
                        className={`appearance-none rounded-lg w-full text-sm bg-white placeholder-[#B3B3B3] ${baseClass}`}
                        defaultValue=""

                    >
                        <option disabled value="">
                            {placeholder}
                        </option>
                        {options.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="flex items-center absolute right-3 h-full top-[-8px]">
                        <Image src="/dropdown-arrow.svg" width={19} height={19}></Image>
                    </div>
                </div>
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className={baseClass}
                />
            )}
        </div>
    );
};
  
  