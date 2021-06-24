import React, { ReactElement } from 'react'
import CardComponent from '../Card/CardComponent';
// import menuImage from '../../images/Mahen.jpg';

const cardata = {
    title: "Mahendra Pratap Singh",
    // image: menuImage,
    description: <p>I will fill it later</p>
  } 

export default function WhoAmIComponent(): ReactElement {
    return (
        <CardComponent title={cardata.title} children={cardata.description} />
    )
}
