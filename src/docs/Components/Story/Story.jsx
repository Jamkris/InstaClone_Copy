import React from 'react';
import * as S from './Story.style.jsx';
import { data } from './StoryData.js';

//IMG
const LeftSvg = '../../Img/Story/Left.svg'
const RightSvg = '../../Img/Story/Right.svg'

const Story = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };

    return (
        <>
            
        </>
    );
};

export default Story;
