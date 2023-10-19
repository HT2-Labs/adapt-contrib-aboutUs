import React from 'react';

export default function AboutUsSocialLinks (props) {
  const {
    socialLinks
  } = props

  return (
    <div className='aboutus__sociallinks' role='list'>
      {socialLinks.map((socialLink) => {
        if (socialLink._link){
          return (
            <a href={socialLink._link} className={`icon icon-${socialLink._service?.toLowerCase()}`}
              target='_blank' title={`Follow us on ${socialLink._service}`} aria-label={`Follow us on ${socialLink._service}`}>
            </a>
          )
        }
      })}
    </div>
  )
}
