import { useNavigate } from 'react-router-dom';

interface ButtonProps{
    text: string;
    navigateTo?: string
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {

    const navigate = useNavigate();

    const handleClick = () => {
      if (props.navigateTo) {
        navigate(props.navigateTo); // Naviga alla route specificata
      }
      if (props.onClick) {
        props.onClick()
      }
    };

    return <button 
      onClick={handleClick}>
      {props.text}
    </button>
} 