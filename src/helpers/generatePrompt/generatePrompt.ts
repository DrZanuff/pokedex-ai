const sufix = `
I'll describe a pokemon and you have to guess or suggest based on the description.
You must answer with only one word, that will be the name of the pokemon.
Always suggest only one pokemon and this pokemon must be official.
If you can't find any pokemon with the criteria answer like: "Sorry, no pokemon found..."

What pokemon is a rat and its color is yellow?
pikachu

What pokemon is a blue turtle?
squirtle
\n
`

export function generatePrompt(prompt: string) {
  return sufix + prompt
}
