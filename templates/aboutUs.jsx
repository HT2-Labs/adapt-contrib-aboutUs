import React from 'react';

export default function aboutUs (props) {
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
                        {compile(headline)}
                    </div>
                </div>
            </div>
            <div className='aboutus__items-container' role='list'>
            </div>
        </div>
    )
}