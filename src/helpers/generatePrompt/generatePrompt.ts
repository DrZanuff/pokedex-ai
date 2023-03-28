const sufix = `
I'll describe a pokemon and you have to guess or suggest based on the description.
You must answer with only one word, that will be the name of the pokemon.
Always suggest only one pokemon and this pokemon must be official.
Just answer if one word.
If the input is just one word, return the same input.
If you can't find any pokemon with the criteria answer: error

What pokemon is a rat and its color is yellow?
pikachu

What pokemon is a blue turtle?
squirtle

charmander
charmander
\n
`

export function generatePrompt(prompt: string) {
  return sufix + prompt
}
