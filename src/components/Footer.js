import React from 'react'
import { resource } from './Resource'

const footer = () => (
  <div className='footer'>
    <p>
      <a href={resource.PRIVACY_POLICY_URL} target='_new'>
        {resource.PB_FORM_PRIVACY_POLICY}

      </a>
      |
      <a href={resource.TERMS_OF_USE} target='_new'>
        {resource.PB_FORM_TERMS}
      </a>
    </p>

    <div> {resource.PB_FORM_COPYRIGHT}</div>
    <div> {resource.PB_TAGLINE}</div>

  </div>
)

export default footer
