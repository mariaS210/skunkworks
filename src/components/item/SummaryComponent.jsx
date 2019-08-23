import React from 'react';
import ReactDOM from 'react-dom';

import ApiEndpoints from '../../utils/ApiEndpoints';


class SummaryComponent extends React.Component {
    render() {
        let item = ApiEndpoints.getNewsItem(8863);
        return <h1>Hello, {item}</h1>;
      }
}

export default SummaryComponent;