class AppointmentForm extends React.Component {
    handleChange (e) {
        const name = e.target.name;
        obj = {};
        obj[name] = e.target.value;
        console.log(obj);
        console.log(this.props.onUserInput);
        this.props.onUserInput(obj);
    }
    handleSubmit (e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }
    
    setApptTime (e) {
        const name = 'appt_time';
        const obj = {};
        if(obj[name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    }
    
    render () {
        const inputProps = {
            name: 'appt_time'
        };
        return(
            <div>
                <h2>Make a New Appointment</h2>
                <Label label='Enter a title, date and time' />
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name='title'
                    value={this.props.title}
                    onChange={this.handleChange.bind(this)} 
                    className='form-control' id='appttitle' autoFocus={true} />
                    <Datetime input={false} open={true} inputProps={inputProps}
                        value={this.props.appt_time}
                        onChange={this.setApptTime.bind(this)} />
                    <input type='submit' value='Make Appointment' className='btn btn-success' />
                </form>
            </div>    
            )
    }
}