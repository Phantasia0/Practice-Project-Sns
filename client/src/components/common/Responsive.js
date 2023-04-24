import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ResponsiveLayout = styled.div`
  /* 미디어 쿼리 작성 */
`;

const Responsive = ({ children, ...rest }) => (
  <ResponsiveLayout {...rest}>{children}</ResponsiveLayout>
);

export default Responsive;

Responsive.propTypes = {
  children: PropTypes.string.isRequired,
};
