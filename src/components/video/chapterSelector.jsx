import { useState, useEffect } from 'react';
import '../../assets/styles/video/chapterSelector.css';
import CaretDown from '../../assets/icons/caret-down-fill.svg?react';

export const ChapterSelector = () => {

    const [btnSelect, setBtnSelect] = useState(0);
    const [rotateArrow, setRotateArrow] = useState(0);

    useEffect(() => {

        document.documentElement.style.setProperty("--btnSelect", btnSelect);
        document.documentElement.style.setProperty("--rotateArrow", `${rotateArrow}deg`);

    }, [btnSelect, rotateArrow]);

    const handleBtnSelect = () => {
        setBtnSelect(prev => (prev == 0 ? 1 : 0));
        setRotateArrow(prev => (prev == 0 ? 180 : 0));
        console.log(rotateArrow)
    }
    
    return (
        <div className="root-chapter-selector">
            <div className="content-form-chapter">

                <div className="btn-select" onClick={handleBtnSelect}>
                    <span className='btn-text'>Select your option</span>
                    <i className='icono-btn-select'>
                        <CaretDown className="icon-svg"/>
                    </i>
                </div>
                <ul className="options">
                    <li className="option">
                        <span className="option-text">Temporada 1</span>
                        <span className='option-sub-text'>12 episodios</span>
                    </li>
                    <li className="option">
                        <span className="option-text">Temporada 2</span>
                        <span className='option-sub-text'>145 episodios</span>
                    </li>
                    <li className="option">
                        <span className="option-text">Temporada 3</span>
                        <span className='option-sub-text'>38 episodios</span>
                    </li>
                </ul>

            </div>
            <div className="table-chapter">
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
                <div className="box">5</div>
                <div className="box">6</div>
            </div>
        </div> 
    );
}


