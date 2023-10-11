import React from 'react';
import { compile, classes, templates, html } from 'core/js/reactHelpers';

export default function AboutUs (props) {
    const {
        _graphic,
        headline
    } = props

    return (
        <div className='aboutus__inner'>
            <div className='aboutus__header-container'>
                {_graphic?.src && 
                    <img src={_graphic.src} alt={_graphic.alt}/>
                }
                <div className='aboutus__headline'>
                    <div className='aboutus__headline-inner' style={{width: _graphic.src ? auto : '100%'}}>
                        {headline}
                    </div>
                </div>
            </div>
            <div className='aboutus__items-container' role='list'>
            </div>
        </div>
    )
}