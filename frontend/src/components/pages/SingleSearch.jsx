import React, { Component, Fragment } from 'react';
import SingleContent from './SingleContent';
import Common from '../inc/Common';


const pagelocation = "Single Search Result";

class SingleSearch extends Component {
    render() {
        return (
            <Fragment>
                <Common />
                <SingleContent
                    detailId={this.props.match.params.id}
                />
            </Fragment>
        );
    }
}

export default SingleSearch;