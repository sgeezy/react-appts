var Appointments = React.createClass({
    getInitialState: function() {
        return {
            appointments: this.props.appointments,
            title: 'Team meeting in foyer',
            appt_time: 'Tomorrow at 9am'
        }    
    },
    handleUserInput: function(obj) {
        this.setState(obj)    
    },
    handleFormSubmit: function() {
        var appointment = {title: this.state.title, appt_time: this.state.appt_time}
        $.post('/appointments',
                {appointment: appointment})
                .done(function(data) {
                    this.addNewAppointment(data);
                });
    },
    
    
    addNewAppointment: function(appointment) {
        
    },
    
    render: function() {
        return (
            <div>
                <AppointmentForm input_title={this.state.title} 
                    input_appt_time={this.state.appt_time}
                    onUserInput={this.handleUserInput}
                    onFormSubmit={this.handleFormSubmit} />
                <AppointmentsList appointments={this.state.appointments} />
            </div>
            )
    }
});