import React, { Component } from "react";
import emailjs from 'emailjs-com';

export class Email extends Component {

    state = {
        email: '',
        name: '',
        text: '',
    }


    componentDidMount() {
        window.scrollTo(0, 0);
    }

    createEmail = () => {
        return `email = ${this.state.email} ${this.state.text}`
    }

    checkName = () => {
        if (this.state.name.length > 0) {
            return true
        }
        else {
            return false
        }
    }
    checkEmail = () => {
        if (this.state.email.length > 0) {
            return true
        }
        else {
            return false
        }
    }
    checkBody = () => {
        if (this.state.text.length > 0) {
            return true
        }
        else {
            return false
        }
    }

    reachOut = () => {
        return `${this.state.name} who can be reached at ${this.state.email} says:`
    }

    sendEmail = () => {
        let templateParams = {
            from_name: this.state.name,
            to_name: '<YOUR_EMAIL_ID>',
            subject: 'subject',
            contact: this.reachOut(),
            message: this.createEmail(),
        }
        console.log('email should say: ', this.createEmail())
        // emailjs.sendForm('service_m8qm1fe', 'template_jw39141', this.createEmail(), 'user_fsr7vl0Mp1zwzsbgJAwzD')
        emailjs.send(
            'service_cg3qrle',
            'template_x310b58',
            templateParams,
            'user_QVk8iS4m4muaujEByRXzS'
        )
            .then((result) => {
                console.log('success result', result.text);
            }, (error) => {
                console.log('error result', error.text);
            })
            .then(()=>{
                this.setState({ email: '', name: '', text: '',})
            })
    }

    render() {
        return (
            <div style={{ width: this.props.isSmallScreen ? '80%' : '100%', margin: this.props.isSmallScreen ?'auto':''}}>
                <div style={{ marginTop: 50, width: '100%', marginTop: 15, }}>
                    <div style={{ zIndex: 20, width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                            <p style={{ fontSize: 22, color: this.props.darkMode ? 'rgb(230,230,230)' : 'rgb(17,17,17)' }}>
                                Have a question or want to work together?
                            </p>
                        </div>
                        <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 10, margin: 'auto', marginBottom: 20, flexDirection:this.props.isSmallScreen? 'column':'row' }}>
                            <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} style={{ paddingLeft: 8, paddingRight: 8 }} />
                            <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} style={{ paddingLeft: 8, paddingRight: 8, marginTop:this.props.isSmallScreen?10:'' }} />
                        </div>
                        <div style={{ width: '100%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                            <textarea placeholder="Say hi!" style={{ height: 200, width: '60%', padding: '1%', fontFamily:'inherit' }} value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div
                                onClick={this.checkBody && this.checkEmail() && this.checkName() ? () => this.sendEmail() : null}
                                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 200 }}
                            >
                                <p style={{ fontSize: 18, margin: 0, color:'rgb(17,17,17)' }}>Submit</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }

}

export default Email;