import ListingsService from '#root/adapters/ListingsService'

const createListingResolver = async (obj, { title, description }) => {
  return await ListingsService.createListings({ title, description })
}

export default createListingResolver
