import React, { Component } from 'react';
import { setDefaultBreakpoints } from 'react-socks';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Data from './Data';

// import colorCode from '../Utils/ColorCode';
import './ResponsiveStatBar.css';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 1100 }, // smaller laptops
  { xlarge: 1200 }, // laptops and desktops
]);

const GET_STATS = gql`
    query {
        stats {
            website_id
            website {
                url
            }
            performance
            accessibility
            best_practices
            seo
            time_fetch
            method
        }
    }
`;

class ResponsiveStatBar extends Component {
  render() {
    return (

      <Query query={GET_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          return(
            <Data stats = {stats}/>
          )
}
}
      </Query>
    );
  }
}

export default ResponsiveStatBar;
