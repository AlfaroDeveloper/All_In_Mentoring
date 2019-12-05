import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import MentorCard from '../MentorPictureCard/MentorCard.json'

const CardProps = () => (
<Card.Group >
  <Card>
    <Image
      src={MentorCard[0].image}
    />
    <Card.Content
        header={MentorCard[0].header}
        description={MentorCard[0].description}
    />
    <Card.Content extra>
      <a
        href={`mailto:${MentorCard[0].email}`}
      >
        <Icon name='user' />
        Email
      </a>
    </Card.Content>
    </Card>

    <Card>
    <Image
      src={MentorCard[1].image}
    />
    <Card.Content
        header={MentorCard[1].header}
        description={MentorCard[1].description}
    />
    <Card.Content extra>
      <a
        href={`mailto:${MentorCard[1].email}`}
      >
        <Icon name='user' />
        Email
      </a>
    </Card.Content>
    </Card>

    <Card>
    <Image
      src={MentorCard[2].image}
    />
    <Card.Content
        header={MentorCard[2].header}
        description={MentorCard[2].description}
    />
    <Card.Content extra>
      <a
        href={`mailto:${MentorCard[2].email}`}
      >
        <Icon name='user' />
        Email
      </a>
    </Card.Content>
    </Card>

    <Card>
    <Image
      src={MentorCard[3].image}
    />
    <Card.Content
        header={MentorCard[3].header}
        description={MentorCard[3].description}
    />
    <Card.Content extra>
      <a
        href={`mailto:${MentorCard[3].email}`}
      >
        <Icon name='user' />
        Email
      </a>
    </Card.Content>
    </Card>

    <Card>
    <Image
      src={MentorCard[4].image}
    />
    <Card.Content
        header={MentorCard[4].header}
        description={MentorCard[4].description}
    />
    <Card.Content extra>
      <a
        href={`mailto:${MentorCard[4].email}`}
      >
        <Icon name='user' />
        Email
      </a>
    </Card.Content>
    </Card>
</Card.Group>
)

export default CardProps
