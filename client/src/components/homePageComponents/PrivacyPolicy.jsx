import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body: {
    padding: '50px 10px 20px 10px',
    [theme.breakpoints.up('sm')]: {
      padding: '50px'
    }
  },

  section: {
    marginBottom: '30px'
  }
});

const PrivacyPolicy = (props) => {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.body}>
        <Typography paragraph variant='headline' component='h1'>Privacy Policy</Typography>
        <div className={classes.section}>
          <div>
            <Typography paragraph variant='body1'>
              This privacy notice discloses the privacy practices for KeyUp. This privacy notice applies solely to information 
              collected by this website. It will notify you of the following:
            </Typography>
            <ol>
              <li>
                <Typography paragraph variant='body1'>
                  What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  What choices are available to you regarding the use of your data.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  The security procedures in place to protect the misuse of your information.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  How you can correct any inaccuracies in the information.
                </Typography>
              </li>
            </ol>
          </div>
        </div>
        <div className={classes.section}>
          <Typography paragraph variant='title' component='h2'>Information Collection, Use, and Sharing </Typography>
          <div>
            <Typography paragraph variant='body1'>
              We [KeyUp] are the sole owners of the information collected on this site. We only have access to/collect 
              information that you voluntarily give us via email or other direct contact from you. We will not sell or 
              rent this information to anyone.
            </Typography>
            <Typography paragraph variant='body1'>
              We will use your information to respond to you, regarding the reason you contacted us. We will not share 
              your information with any third party outside of our organization, other than as necessary to fulfill your 
              request, e.g. to set up an appointment with a training service admissions employee.
            </Typography>
            <Typography paragraph variant='body1'>
              Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products 
              or services, or changes to this privacy policy.
            </Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography paragraph variant='title' component='h2'>Your Access to and Control Over Information</Typography>
          <div>
            <Typography paragraph variant='body1'>
              You may opt out of any future contacts from us at any time. You can do the following at any time by contacting 
              us via the email address or phone number given on our website:
            </Typography>
            <ul>
              <li>
                <Typography paragraph variant='body1'>
                  See what data we have about you, if any.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  Change/correct any data we have about you.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  Have us delete any data we have about you.
                </Typography>
              </li>
              <li>
                <Typography paragraph variant='body1'>
                  Express any concern you have about our use of your data.
                </Typography>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.section}>
          <Typography paragraph variant='title' component='h2'>Security</Typography>
          <div>
            <Typography paragraph variant='body1'>
              We take precautions to protect your information. When you submit 
              sensitive information via the website, your information is protected both online and offline.
            </Typography>
            <Typography paragraph variant='body1'>
              Wherever we collect sensitive information (such as credit card data), that information is encrypted 
              and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address 
              bar and looking for "https" at the beginning of the address of the Web page.
            </Typography>
            <Typography paragraph variant='body1'>
              While we use encryption to protect sensitive information transmitted online, we also protect your 
              information offline. Only employees who need the information to perform a specific job (for example, 
              billing or customer service) are granted access to personally identifiable information. The computers/servers 
              in which we store personally identifiable information are kept in a secure environment.
            </Typography>
            <Typography paragraph variant='body1' style={{ fontWeight: 'bold' }}>
              If you feel that we are not abiding by this privacy policy, you should contact us immediately at <a href='mailto:maryhannah.duhon@keyup.services' style={{ textDecoration: 'none' }}>maryhannah.duhon@keyup.services</a>.
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(PrivacyPolicy);