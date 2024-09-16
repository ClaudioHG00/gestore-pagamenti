import { useNavigate } from 'react-router-dom';

interface ButtonProps{
    text: string;
    navigateTo?: string
}

export const Button = (props: ButtonProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
      if (props.navigateTo) {
        navigate(props.navigateTo); // Naviga alla route specificata
      }
    };

    return <button onClick={handleClick}>
        {props.text}
    </button>
} 