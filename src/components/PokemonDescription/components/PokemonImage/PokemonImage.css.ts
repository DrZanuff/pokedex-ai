import { style } from "@vanilla-extract/css"

export const PokemonImageContainer = style({
  display: "flex",
})

export const EmpytImageHolder = style({
  display: "flex",
  width: "120px",
  height: "120px",
  borderRadius: "10px",
  backgroundColor: "#C3C3C3",
})

export const ImageContainer = style({
  display: "flex",
  width: "120px",
  height: "fit-content",
  borderRadius: "10px",
  backgroundColor: "#C3C3C3",
  padding: "10px",
})

export const ImageElement = style({
  border: "2px solid red",
})
