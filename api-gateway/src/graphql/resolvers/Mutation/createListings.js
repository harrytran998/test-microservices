import ListingsService from '#root/adapters/ListingsService'

const createListingResolver = async (obj, { title, description }, { res }) => {
  if (!res.locals.userSession) throw new Error('Not logged in!')
  return await ListingsService.createListings({ title, description })
}

export default createListingResolver
