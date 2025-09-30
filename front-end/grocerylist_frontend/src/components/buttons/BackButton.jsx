import BackArrow from '../../assets/arrow2.png';
import { useNavigate } from 'react-router-dom';

export default function BackButton({type}) {

    const navigate = useNavigate();

    const handleBack = () => {
        if (type == "backOne"){
            navigate(-1);
        } 

        if (type == "backTwo"){
            navigate(-2);
        }
    }

    return (
        <div>
            <button onClick={handleBack} className="mt-6 mb-4 px-8 flex flex-row gap-2"><img src={BackArrow} className="w-8 h-auto"></img></button>
        </div>
    );
}