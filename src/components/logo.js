import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AttentionSeeker } from 'react-awesome-reveal';
import './path/styled.css';
import '../App';

function LogoPage() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/main');
        }, 2000);
        
        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    return (
        <div className="logo-page"> {}
            <AttentionSeeker effect="tada">
                <img alt='logo_image' src='/image/rich.png' width={1000} height={800}></img>
            </AttentionSeeker>
        </div>
    );
};

export default LogoPage;
