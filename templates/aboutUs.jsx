import React from 'react';
import { compile, templates } from 'core/js/reactHelpers';

export default function AboutUs (props) {
    const {
        _graphic,
        headline
    } = props

    console.log('test')

    return (
        <div className='aboutus__inner'>
            <templates.header {...props} />
            <div className='aboutus__header-container'>
                {_graphic?.src && 
                    <img src={_graphic.src} alt={_graphic.alt}/>
                }
                <div className='aboutus__headline'>
                    {console.log('test', props)}
                    <div className='aboutus__headline-inner' style={{width: _graphic.src ? auto : '100%'}}>
                        {compile(headline)}
                    </div>
                </div>
            </div>
            <div className='aboutus__items-container' role='list'>
            </div>
        </div>
    )
}