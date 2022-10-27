import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://educational-app-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <div className='categories-box bg-dark'>
                
                        {
                            categories.map(categorie => <p key={categorie.id}>
                                <Link to={`/cources/${categorie.id}`} className='categorie-link'>{categorie.name}</Link>
                            </p>)
                        }
                   

            </div>
        </div>
    );
};

export default LeftNav;