import React from 'react';
import { compile, templates } from 'core/js/reactHelpers';

export default function AboutUs (props) {
    const {
        _graphic,
        headline,
        _aboutUsItems
    } = props?.model

    return (
        <div className='aboutus__inner'>
            <templates.header {...props} />
            <div className='aboutus__header-container'>
                {_graphic?.src && 
                    <img src={_graphic.src} alt={_graphic.alt}/>
                }
                <div className='aboutus__headline'>
                    <div className='aboutus__headline-inner' style={{width: (_graphic?.src ?? '100%')}}>
                        {headline}
                    </div>
                </div>
            </div>
            <div className='aboutus__items-container' role='list'>
              {_aboutUsItems.map((item) => {
                return (
                  <templates.aboutUsItem item={item}/>
                )
              })}
            </div>
        </div>
    )
}