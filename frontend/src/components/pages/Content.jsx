import React from 'react';
import { Link } from 'react-router-dom';
import search from '../data/search.json';
import Searchsidebar from '../inc/Searchsidebar';
import Pagination from "react-js-pagination";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: search,
            activePage: 1,
            itemPerpage: 4
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <article  key={i} className={item.format === 'video' ? 'sigma_post style-7 post-format-video' : 'sigma_post style-7 ' && item.format === 'quote' ? 'sigma_post style-7 post-format-quote' : 'sigma_post style-7 ' && item.format === 'audio' ? 'sigma_post style-7 post-format-audio' : 'sigma_post style-7 ' && item.format === 'link' ? 'sigma_post style-7 post-format-link' : 'sigma_post style-7 '}>
                {/* Standard */}
               
                {/* Standard */}
                {/* Quote */}
                
                
                <div className="sigma_post-body">
                    <div className="sigma_post-content">
                        <h5>
                            <Link className="text-green" style={{ fontSize: '16pt' }} to={"/single-search/100"}>{item.title}</Link>
                        </h5>
                        <p>{item.shorttext.slice(0, 250)}</p>
                        <div className="sigma_post-meta">
                            <ul>
                                
                                <li>
                                    
                                    <b>Dimensions: </b> &nbsp;&nbsp; {item.htmltext}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        });
        return (
            <div className="sidebar-style-8">
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-5">
                                <Searchsidebar />
                            </div>
                            <div className="col-lg-7 ">
                                {/* style 7 */}
                                {paginationData}
                                {/* style 7 */}
                                {/* Pagination */}
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination mb-md-80"
                                    activeClass="active"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;