/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode'
const router = useRouter()

export default function () {
  const token = window.localStorage.getItem('accessToken') // Get the access token from the cookie
  if (token) {
    const decoded = getDecodedAccessToken(token as string)
    const expirationDate = new Date(decoded.exp * 1000) // Convert the expiration timestamp to a date object
    if (expirationDate < new Date()) {
      // If the token is expired, redirect the user to the login page
      return router.push('/')
    }
  } else {
    // If no token is present, redirect the user to the login page
    return router.push('/')
  }
}

function getDecodedAccessToken (token: string): any {
  try {
    return jwt_decode(token)
  } catch (Error) {
    return null
  }
}
