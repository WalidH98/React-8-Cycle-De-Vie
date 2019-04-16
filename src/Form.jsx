import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        title: '',
        globalTitle: 'Global Title',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        this.setState({
            globalTitle: this.state.title
        })
    }

    componentDidMount() {
        console.log('Formulaire Rendu');
      }

    render() {
        return (
            <div className="Form">
                <h1>{this.state.globalTitle}</h1>

                <form onSubmit={this.submitForm}>
                <fieldset>
                    <div className="form-data">
                    <label htmlFor="title">Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                        placeholder="Change the title"
                    />
                    </div>
                    <div className="form-data">
                    <input type="submit" value="Send" />
                    </div>
                </fieldset>
                </form>
            </div>
        )
    }
    componentDidUpdate(prevProps) {
        console.log('Titre Changé');
      }
}

export default Form;