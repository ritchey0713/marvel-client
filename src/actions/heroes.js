const API_URL = 'https://developer.marvel.com/v1/public/characters?apikey='
const API_PUBLIC_KEY = process.env.REACT_APP_API_KEY

const getHeroes = heroes => {
  return {
    type: "GET_ALL_HEROES",
    heroes
  }
}

export const getAllHeroes = async () => {
  const response = await fetch(`API_URL${API_PUBLIC_KEY}`, {})
  if(response.status === 200){
    const data = await response.json()
    return data
  }else{
    throw new Error('Fetch Failed!')
  }
}
