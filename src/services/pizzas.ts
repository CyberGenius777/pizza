import { URL_BASE } from '../config'

export const getPizzas = async (categoryId?: number | '') => {
  return await fetch(`${URL_BASE}/?category=${categoryId}`).then((res) => res.json())
}
