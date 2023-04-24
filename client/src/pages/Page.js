import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import Responsive from 'components/common/Responsive';
import Header from 'components/common/Header';

const Page = ({ title, children }) => (
  <Responsive>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <br />
    {children}
  </Responsive>
);

export default Page;

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
