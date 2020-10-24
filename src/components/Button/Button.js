import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function PageButton({ page, children, configMargin }) {
  const history = useHistory();
  return (
    <Button
      onClick={() => history.push(page)}
      style={{
        fontSize: '15px', margin: configMargin, color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
      }}
    >
      {children}
    </Button>
  );
}
export default PageButton;
