# **PokedexAI**

<p align="center">
  <img src="https://user-images.githubusercontent.com/23051495/228877951-1a787f86-abc3-404b-a270-c9949ac34ff5.png" />
</p>

PokedexAI is a small open-source web app that use Gemini API (originally the project used Open AI) and the PokemonAPI to provide information about Pokemon based on user prompts.
You can test the APP here: [PokedexAI](https://pokedex-ai.vercel.app/)

## **Technologies Used**

- Next.js
- Vanilla Extract
- Recoil for State Management
- React + TypeScript

## **Background Image**

- [Midjourney](https://www.npmjs.com/package/midjourney)

## **Features**

- Retrieve data from the GEMINI API to generate Pokemon names based on user prompts
- Retrieve data from the PokemonAPI to display information about the generated Pokemon, including stats, name, and image
- Uses CSS to create a Pokedex-like interface for displaying the Pokemon information

## **Installation**

- Create a `.env.local` on the root of the project and add two variables with you API keys from
  [OpenAI](https://ai.google.dev/gemini-api/docs/api-key)

  - GEMINI_API=YOUR_API_KEY
  - GEMINI_URL=MODEL_URL // e.g https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=

- Clone the repository

```bash
* Run `npm install`
# or
* Run `yarn`
```

- To start the app in development mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Access the app at `http://localhost:3000`

## **Usage**

- Enter a prompt in the input field to generate a Pokemon name
- Click the "PROMPT" button to retrieve information about the generated Pokemon
- Information about the Pokemon will be displayed in the Pokedex-like interface

## **Contributing**

Contributions are welcome! Please submit any issues or pull requests to the[ GitHub repository](https://github.com/DrZanuff/pokedex-ai).

## **License**

This project is licensed under the MIT License - see the[ LICENSE](https://ai.google.dev/gemini-api/terms) file for details.

Pokémon and Pokémon character names are trademarks of Nintendo.
