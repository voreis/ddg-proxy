import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitSearchAction, fetchSearchs, fetchSearchHistory } from '../../../actions/search/SearchAction';


const SearchFormFunc = props => {
    const { handleSubmit } = props

    const submit = (data, submitSearchAction) => {
        props.fetchSearchHistory();
        props.fetchSearchs(data);       
    }

    return (
        <div style={{margin: '0 auto', padding: '20px 0px'}}>
            <form onSubmit={handleSubmit((fields) => submit(fields, submitSearchAction))}>
                <h3>DuckDuckGo Search Proxy</h3>
                <br />
                <Field type="text" placeholder="term to search..." component="input" name="term"></Field>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

const SearchForm = (reduxForm({
    form: 'searchForm'
}))(SearchFormFunc)

SearchForm.propTypes = {
    fetchSearchs: PropTypes.func.isRequired,
    fetchSearchHistory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { submitSearchAction, fetchSearchs, fetchSearchHistory })(SearchForm)