export interface PokemonAPI {
    count: number
    next: string
    previous: any
    results: Result[]
}

export interface Result {
    name: string
    url: string
}