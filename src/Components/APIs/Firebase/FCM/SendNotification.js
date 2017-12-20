import React, {Component} from 'react';
import firebase from 'firebase';
import DevicesCarousel from './../../../Carousel/Slider/DevicesCarousel';

class SendNotification extends Component {
    state = {
        usersData: [],
        notificationTitle: '',
        notificationMessage: ''
    }

    componentDidMount() {
        this.getDataFromFirebase();
    }

    getDataFromFirebase = () => {
        const ODM_Android = "data/devices";
        const epicbase = "devices";

        let ref = firebase.database().ref(epicbase);
        ref.on('value', snapshot => {
            this.setState({usersData: snapshot.val()})
            // console.log(snapshot.val())
        })
    }

    sendNotification = (token_id, title, message) => {
        
        const ODM_Android = 'key=AAAAR0zSFec:APA91bFIffH7BcenCr8Ppe7wOrga0DEQk_guNtkKA9XPt5pJRSNPMNXC6naixk8y9lWsIazjunkDO_SUJOLzI4Dn3mQpKFgOy_mlh8p0oygDUkoN_8FI_FxajRTUNgijkoIz6XPyUXl8';
        const epicbase = 'key=AAAARGxbfW8:APA91bElC5mW0qmiDS1RSFSozZ_TrtsirIfVpOO1SWjaa_uKbDXIGD-dWBNU29qp4dlEtIrmlg1V4vjLhlUOmM69K-nKFbND4xtxaCawIr0vxUJVIWi7EmVgiZg-oPbG7BrfKspGO6lD';

        fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
                'Authorization': epicbase,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: token_id,
                notification: {
                    body: message
                }
            })
        })
        .then((res) => res.json)
        .then((res) => {
            document.getElementById("fetch-post-response-output").innerHTML = "Sent";
        })
        .catch((error) => {
            document.getElementById("fetch-post-response-output").innerHTML = "Error";
        })
    }

    handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        

        switch(id) {
            case "notification-title": this.setState({notificationTitle: target.value}); break;
            case "notification-message": this.setState({notificationMessage: target.value}); break;

            default: break;
        }
    }

    sendNotificationToAllDevices = () => {
        let usersData = this.state.usersData;
        
        //handle inputs here
        const title = document.getElementById("notification-title").value;
        const message = document.getElementById("notification-message").value;
        //this.setState({notificationTitle: title, notificationMessage: message});
        console.log('title - ',title)
        console.log('message',message)

        Object.keys(usersData).map((item,index) => {
            let token_id = usersData[item].token_id;

            //pass token id of each device
            this.sendNotification(token_id, title, message);
        })
    }

    sendNotificationToOneDevice = (token) => {
        //handle inputs here
        const title = document.getElementById("notification-title").value;
        const message = document.getElementById("notification-message").value;

        this.sendNotification(token, title, message);
    }

    render() {
        return(
            <div>
                <DevicesCarousel data={this.state.usersData} sendNotificationToOneDevice={this.sendNotificationToOneDevice}/>

                <div style={{marginLeft: 80}}>
                    
                </div>

                <div style={{margin: 50, backgroundColor: '#FAFAFA'}}>
                    <input type="text" placeholder="Title" id="notification-title"  style={{width: `50%`, height: 30, margin: 8}}/>
                    <br />
                    <input type="text" placeholder="Message" id="notification-message"  style={{width: `50%`, height: 30, margin: 8}}/>
                    <br />
                    <button style={{margin: 8}} onClick={this.sendNotificationToAllDevices}>Send to all devices</button>

                    <div style={{marginTop: 16, marginBottom: 8, marginLeft: 8, marginRight: 8}}>
                        <span style={{fontSize: 16}} id="fetch-post-response-output"></span>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
export default SendNotification;