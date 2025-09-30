import BackArrow from '../../assets/arrow2.png';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)} className="mt-6 mb-4 px-8 flex flex-row gap-2"><img src={BackArrow} className="w-8 h-auto"></img></button>
        </div>
    );
}