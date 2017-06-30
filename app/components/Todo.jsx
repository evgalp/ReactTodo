var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
	render: function () {
		var {id, text, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created: ';
			var timestamp = createdAt;

			if (completed) {
				message = 'Completed: ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('Do MMM YYYY @ hh:mm');
		};
		return (
			<div className={todoClassName} onClick={() => {
				this.props.onToggle(id);
			}}>
				<div>
					<input type="checkbox" checked={completed}/> 
				</div>
				<div className="todo__subtext">
					<p>{text}</p>
					<p>{renderDate()}</p>
				</div>
			</div>
		)
	}
});

module.exports = Todo;