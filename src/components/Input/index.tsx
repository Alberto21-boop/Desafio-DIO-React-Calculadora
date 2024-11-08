import { InputContainer, StyledInput } from './styles';

interface InputProps {
    placeholder?: string;
    value?: string | number;
    onChange?: (value: number) => void;
}

export function Input({ placeholder = " ", value, onChange }: InputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = parseFloat(e.target.value);
        if (!isNaN(numericValue) && onChange) {
            onChange(numericValue);
        }
    };
    return (
        <InputContainer>
            <StyledInput
                type="number"
                placeholder={placeholder}
                value={value !== undefined ? value : ''}
                onChange={handleChange}
            />
        </InputContainer>
    );
}