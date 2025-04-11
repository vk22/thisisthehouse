import { Request } from "~~/server/models/request-model";
const result = {
  success: {
    success: true,
    status: 'success',
    message: {
      title: "Your request has been accepted",
      subtitle: "We will reply to you as soon as possible"
    }
  },
  error: {
    success: false,
    status: 'error',
    message: {
      title: "There was an error",
      subtitle: "The error has been sent to our quality officer."
    }
  }
}
export default defineEventHandler( async (event) => {
    const body = await readBody(event);
    console.log('body ', body)
    const newRequest = new Request(body);
    const saving = await newRequest.save();

    //// 
    const { sendMail } = useNodeMailer();
    console.log('sendMail', sendMail)
    const emailTo = 'sales@thisisthehouse.com';
    const userMessage = body.message ? body.message : ''
    const html = `<p>First Name: ${body.name1}</p> 
                  <p>Last Name: ${body.name2}</p> 
                  <p>Email: ${body.email}</p> 
                  <p>Phone: ${body.phone}</p>
                  <p>Message: ${userMessage}</p>`; 
    const message = {
      to: emailTo,
      subject: 'Site Request',
      text: '',
      html: html,
    };

    const sendMailResponse = await sendMail(message);
    console.log('sendMailResponse ', sendMailResponse)

    if (saving) {
      return result.success
    } else {
      return result.error
    }
})