import React from 'react';
import { compile, classes, templates, html } from 'core/js/reactHelpers';

export default function AboutUsItem (props) {
    const {
        className,
        title,
        description
    } = props

    return (
        <div>
            <button className={classes(['aboutus__item-btn', 'drawer__item-btn', 'js-aboutus-item-topic-click'], className ? className : '')} aria-expanded='false' aria-label='{title}'>
                <div className='aboutus__item-title drawer__item-title'>
                    <div className='aboutus__item-title-inner drawer__item-title-inner'>
                        {title}
                    </div>
                </div>
            </button>

            <div className='aboutus__item-body drawer__item-body' role='region' aria-label={title}>
                <div className='aboutus__item-body-inner drawer__item-body-inner'>
                    {description}
                </div>
            </div>
        </div>
    )
}