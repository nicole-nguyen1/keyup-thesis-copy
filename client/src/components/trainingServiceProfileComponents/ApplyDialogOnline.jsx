import React from 'react';
import Button from '@material-ui/core/Button';

const ApplyDialogOnline = (props) => {
  return <Button onClick={props.toggleDialog} href={props.service.app_url} style={{ color: '4e74ff' }}>GO TO APPLICATION</Button>;
};

export default ApplyDialogOnline;