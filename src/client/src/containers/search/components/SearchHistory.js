import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchSearchHistory } from '../../../actions/search/SearchAction';
import { ListGroup } from 'react-bootstrap';


class SearchHistory extends Component {
    componentWillMount() {
        this.props.fetchSearchHistory();
    }
    render() {

        const { searchHistory } = this.props;
        return (
            <div>
                <h4>Search History</h4>
                <ListGroup variant="flush">
                    {searchHistory.map((item, index) => {
                        return <ListGroup.Item key={index} style={{textAlign:"right"}}>
                            {item.term}
                            <br />
                            <i>{item.date.replace(/T/, ' ').replace(/\..+/, '')}</i>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </div>
        );
    }
}

SearchHistory.propTypes = {
    fetchSearchHistory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    searchHistory: state.searchs.history,
})

export default connect(mapStateToProps, { fetchSearchHistory })(SearchHistory)
