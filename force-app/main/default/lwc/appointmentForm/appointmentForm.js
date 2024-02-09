import { LightningElement, api } from 'lwc';
import checkAvailability from '@salesforce/apex/AppointmentController.checkAvailability';

export default class AppointmentForm extends LightningElement {
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
