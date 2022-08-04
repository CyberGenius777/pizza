import { URL_BASE } from '../config'

export const getPizzas = async () => {
  return await fetch(URL_BASE).then((res) => res.json())
}
