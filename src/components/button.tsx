import { twMerge } from 'tailwind-merge';

export default function Button({
    children,
    disabled,
    className,
    onClick,
    type,
}: {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
    type?: 'submit' | 'button';
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={twMerge(
                'h-14 w-full rounded-full bg-[#941214] font-bold text-white shadow-2xl disabled:cursor-not-allowed disabled:bg-[#999999]',
                className
            )}
        >
            {children}
        </button>
    );
}
