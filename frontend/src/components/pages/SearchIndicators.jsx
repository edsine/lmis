import React, { Component, Fragment } from 'react';
import Content from './Content';
import Common from '../inc/Common';

const pagelocation = "Search Results";

class SearchIndicators extends React.Component {
    render() {
        return (
            <>
            <Common />
            
            <div style={{ maxWidth: '990px',margin: 'auto' }}>
                <Content
                    detailId={this.props.match.params.id}
                />
            </div>
            </>
        );
    }
}

export default SearchIndicators;