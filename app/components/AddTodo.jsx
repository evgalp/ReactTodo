var React = require('react');

var AddTodo = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();

		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value="";
			this.props.onAddTodo(todoText);
		} else{
			alert('error')
		}
		
	},
	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit}>
					<input ref="todoText" type="text" placeholder="Type in to do item"/>
					<button className="button">Add item</button>
				</form>
			</div>
		)
	}
});

module.exports = AddTodo;