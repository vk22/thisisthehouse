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
    if (saving) {
      return result.success
    } else {
      return result.error
    }
})