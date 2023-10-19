import React, { useState } from 'react';
import { classes, compile, html } from 'core/js/reactHelpers';

export default function AboutUsItem (props) {
    const {
        className,
        title,
        description
    } = props

    const [descriptionOpen, setDescription] = useState(false)

    function onAboutUsItemClicked(event) {
      event && event.preventDefault();
      setDescription(!descriptionOpen)
    }

    return (
        <div className='aboutus__item' role='listitem'>
            <button
              className={classes(['aboutus__item-btn', 'drawer__item-btn', 'js-aboutus-item-topic-click'], className ? className : '', descriptionOpen ? 'is-selected' : '')}
              aria-expanded={descriptionOpen}
              aria-label={`${title}`}
              onClick={(e) => onAboutUsItemClicked(e)}>
                <div className='aboutus__item-title drawer__item-title'>
                    <div className='aboutus__item-title-inner drawer__item-title-inner'>
                        {title}
                    </div>
                </div>
            </button>

            <div className={classes(['aboutus__item-body', 'drawer__item-body'], !descriptionOpen ? 'u-display-none' : '')} role='region' aria-label={title}>
                <div className='aboutus__item-body-inner drawer__item-body-inner'>
                    { 
                      descriptionOpen ? html(compile(description)) : ''
                    }
                </div>
            </div>
        </div>
    )
}