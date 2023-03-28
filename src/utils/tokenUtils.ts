import jwt_decode from "jwt-decode";

export function decodeJwt<T>(token: any) {
  if (token === null) return null;

  return jwt_decode<T>(token);
}
