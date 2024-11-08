import { ButtonContainer } from './styles';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}