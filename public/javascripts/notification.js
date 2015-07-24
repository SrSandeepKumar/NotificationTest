/** @jsx React.DOM */
var React = require('react');
var NotificationSystem = require('react-notification-system');

var NotificationPartial = React.createClass({

    _notificationSystem: null,

	componentDidMount: function() {
	    this._notificationSystem = this.refs.notificationSystem;
	    debugger;
	    this._notificationSystem.addNotification({
	      	message: 'Notification message',
	      	level: 'info'
	    });
	    debugger;
	},

    render : function(){
    	debugger;
        return (
        	<NotificationSystem ref="notificationSystem"/>
        )
    }

});

module.exports = NotificationPartial;
