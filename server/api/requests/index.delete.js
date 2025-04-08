import { Request } from "~~/server/models/request-model";

export default defineEventHandler( async (event) => {
  const body = await readBody(event)
  const deleted = await Request.deleteOne({ _id: body._id })
  if (!deleted) return false;
  const data = await Request.find()
  return {
    success: true,
    message: 'Request deleted successfully',
    data: data
  }

})