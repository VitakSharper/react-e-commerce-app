import React from 'react';
import './directory.styles.scss';

import MenuItem from "../menu-item/menu-item.component";


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    linkUrl: 'shop/hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    linkUrl: 'shop/jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    linkUrl: 'shop/sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'womens',
                    linkUrl: 'shop/womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'mens',
                    linkUrl: 'shop/mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large'
                }
            ]
        }
    }

    render() {

        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, size, id}) => {
                        return (
                            <MenuItem
                                key={id}
                                title={title}
                                imageUrl={imageUrl}
                                size={size}
                            />)
                    })
                }
            </div>
        )
    }
}

export default Directory;
