import React from 'react';

class Create extends React.Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.addItem}>
                    <input placeholder="Title" ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handlePint}/>
                    <br/>
                    <button type="submit">Add title</button>
                    <br/>
                    <input placeholder="Task" ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handlePint} />
                    <br/>
                    <button type="submit">Add task</button>
                    <br/>
                    <input placeholder="Author" ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handlePint} />
                    <br/>
                    <button type="submit">Add Author</button>
                </form>
            </div>
        )
    }
}


export default Create