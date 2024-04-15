import { Link } from 'react-router-dom';
import './header.css';

export default function header() {
    return (
        <header className='help'>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className='header_logo'>
                        </Link>
                    </li>
                    <li>
                        <Link to="/accounts">예적금</Link>
                    </li>
                    <li>
                        <Link to="/Age">연령대별 추천</Link>
                    </li>
                    <li>
                        <Link to="Chatbot">챗봇에게 물어봐!</Link>
                    </li>
                    <li>
                        <Link to="dict">경제사전</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

