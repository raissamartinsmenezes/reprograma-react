import protocolo from './api'

// default é só para uma exportação principal 
// this é para classe 
export function postTweets(tweet, token) {
    // /tweets?X-AUTH-TOKEN=${token}&conteudo= 
    // ? espera um parâmetro & (é tipo um mais)
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet) // ele vai concatenar a baseURL + url 
}