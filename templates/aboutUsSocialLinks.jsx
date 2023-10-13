import React from 'react';

export default function AboutUsSocialLinks (props) {
    const {
      _link,
      _service
    } = props

    return (
      <div className='aboutus__sociallinks' role='list'>
        {this.map(() => {
          if (_link){
            <a href={_link} className={`icon icon-${lowercase(_service)}`}
              target='_blank' title={`Follow us on ${_service}`} aria-label={`Follow us on ${_service}`}>
            </a>    
          }})}
      </div>
    )
}
