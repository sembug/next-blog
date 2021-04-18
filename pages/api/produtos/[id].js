// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (request, response) => {
  const id = request.query.id;
  response.status(200).json({ productId: id })
}
