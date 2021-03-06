import React from 'react';
import './directory.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectDirectoryItems} from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";


const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...sectionsProps}) => {
                return (
                    <MenuItem
                        key={id}
                        {...sectionsProps}
                    />)
            })
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectoryItems
});

export default connect(mapStateToProps)(Directory);
