import { LightningElement , track, api} from 'lwc';

export default class FormOfAppointment extends LightningElement {


    @api objectname = 'Account';
    @api  fieldname ='Contact';
    @api  parentidfield ='ContactId';
    @api iconname ='utility:contact';
    @api label ='Contact';
 
@track appRecord ={

    Subject__c:'',
    Contact__c :'',
    Description__c	: '',
    Appointment_Time__c : null,
    Appointment_Date__c : null
}

handlechange(event){
    let value = event.target.value;
    let name = event.target.name;
}
@api recordId;

checkAvailability() {
    // Get the selected date and time
    const selectedDateTime = this.template.querySelector('lightning-input-field[data-field="Appointment_Date_Time__c"]').value;

    // Call the Apex method to check availability
    checkAvailability({ selectedDateTime })
        .then(result => {
            if (result) {
                // Handle availability logic here
                console.log('Appointment is available.');
            } else {
                console.log('Appointment is not available.');
            }
        })
        .catch(error => {
            console.error('Error checking availability', error);
        });
}
}