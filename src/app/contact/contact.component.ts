import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formData = {
    name: '',
    from_email: '',
    subject: '',
    message: '',
    phone: '',
  };

  constructor() {
    emailjs.init('nxg-yD77C077gzAlo');
  }

  sendEmail(form: any) {
    const serviceId = 'service_ta42lcr'; 
    const templateId = 'template_u2w3jws'; 

    const templateParams = {
      name: this.formData.name,
      from_email: this.formData.from_email,
      subject: this.formData.subject,
      message: this.formData.message,
      phone: this.formData.phone || 'Não informado',
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then(
        (response) => {
          console.log('E-mail enviado com sucesso!', response);
          alert('E-mail enviado com sucesso!');
          form.reset();
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error);
          alert('Erro ao enviar e-mail, tente novamente.');
        }
      );
  }
}