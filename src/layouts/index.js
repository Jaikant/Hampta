import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import MobileNavigation from '../components/navigation-mobile';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';
import presets from "../utils/presets"


export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isHomepage = this.props.location.pathname == `/`

    return (
      <div>
        <Helmet defaultTitle={`Hampta Treks`}>
          <meta name="twitter:site" content="@ravithakur5950" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Hampta Treks" />
          <html lang="en" />
        </Helmet>
        <Navigation pathname={this.props.location.pathname} />
        <div css={{
            paddingTop: 0,
            [presets.Tablet]: {
              margin: `0 auto`,
              paddingTop: isHomepage ? 0 : presets.headerHeight,
            },
            }}
        >
        {this.props.children()}
        </div>
        <Footer />
        <MobileNavigation />
      </div>
    );
  }
}
