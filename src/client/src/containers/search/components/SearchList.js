import React, { Component } from 'react';
import { connect } from "react-redux";
import { ListGroup } from 'react-bootstrap';


class SearchList extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.search) {
            this.props.searchs.unshift(nextProps.search);
        }
    }
    render() {
        const { searchs } = this.props;
        return (
            <div>
                <h4>Search Result</h4>
                <ListGroup variant="flush">
                    {searchs.map((item, index) => {
                        return <ListGroup.Item key={index} style={{textAlign:"left"}}>
                            {item.title}
                            <br />
                            <a rel="noopener noreferrer" target="_blank" href={item.link}>{item.link}</a>                            
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchs: state.searchs.items,
    loading: state.searchs.loading,
    error: state.searchs.error
})

export default connect(mapStateToProps)(SearchList)
