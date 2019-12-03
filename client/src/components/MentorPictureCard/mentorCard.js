import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import images from '../../images.json'
// import image from '../MentorPictureCard/MentorCard.json'
import name from '../MentorPictureCard/MentorCard.json'


const extra = (
  <a>
    <Icon name='user' />
    Email me
  </a>
)


const CardProps = () => (
  <Card
    image={images[0].src}
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default CardProps
