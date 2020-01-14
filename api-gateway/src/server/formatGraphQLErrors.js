import get from 'lodash.get'

const formatGraphQLErrors = error => {
  const errorDetails = get(error, 'originalError.response.body')
  console.log(errorDetails)
  try {
    if (errorDetails) return JSON.parse(errorDetails)
  } catch (e) {}

  return null
}

export default formatGraphQLErrors
