import { Request } from "~~/server/models/request-model";

export default defineEventHandler( async (event) => {
    const data = await Request.find().sort({ date: -1 });
    return {
      data: data
    }
})