/** @jsx React.DOM */
var NotificationPartial = require('./notification.js');

var Notify = React.createClass({
    render : function(){
    	return (
    		<div>
	    		<NotificationPartial /> 
	    	</div>
    	)
    }
});

React.render(<Notify />, document.getElementById("notify"));