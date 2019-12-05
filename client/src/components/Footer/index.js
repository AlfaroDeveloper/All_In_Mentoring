import React from "react";
import { Header } from 'semantic-ui-react';

class Footer extends React.Component {
    render() {
        return (
        <div style={{ background: '#387d7a', padding: '20px 0'}}>
            {/*  class="ui horizontal inverted divider" */}
            <Header as='h4' 
            textAlign='center'
            horizontal 
            > 
                Our Mission: To create a safe place for youth to have fun, be creative, mentored and empowered.
            </Header>,

            <form class='form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="9PH74HTW36C52" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <h4 class='form'>All iiN Mentoring is supported entirely by donations.  The money you donate goes directly to programming.  Your support is appreciated!</h4>
        </div>
        );
    }
}

export default Footer;