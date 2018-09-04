import React from 'react';
import ApplyDialogOnline from './ApplyDialogOnline.jsx';
import ApplyDialogPhone from './ApplyDialogPhone.jsx';

const ConditionalApplyDialogButton = (props) => {
  if (props.service.app_type === 'online') {
    return <ApplyDialogOnline service={props.service}/>;
  } else if (props.service.app_type === 'phone') {
    return <ApplyDialogPhone service={props.service} />;
  } else {
    return null;
  }
};

export default ConditionalApplyDialogButton;