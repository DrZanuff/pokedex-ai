module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Gerador de Componentes React",
    prompts: [
      {
        type: "rawlist",
        name: "language",
        message: "Typescript ou Javascript?",
        choices: ["Typescript", "Javascript"],
        filter(val) {
          return val == "Typescript" ? "ts" : "js"
        },
      },
      {
        type: "rawlist",
        name: "style",
        message: "styled-components ou vanilla-extract?",
        choices: ["styled-components", "vanilla-extract"],
        filter(val) {
          return val == "styled-components" ? "styles" : "css"
        },
      },
      {
        type: "input",
        name: "name",
        message: "Nome do Componente",
      },
    ],
    actions: function (data) {
      const actions = []

      actions.push({
        type: "add",
        path: `./src/components/{{name}}/index.{{language}}x`,
        templateFile: "./plop/component-index-template.hbs",
      })

      if (data.style === "styles") {
        actions.push({
          type: "add",
          path: `./src/components/{{name}}/{{name}}.{{language}}x`,
          templateFile: "./plop/component-name-template-{{language}}.hbs",
        })
      } else {
        actions.push({
          type: "add",
          path: `./src/components/{{name}}/{{name}}.{{language}}x`,
          templateFile: "./plop/component-name-css-template-{{language}}.hbs",
        })
      }
      actions.push({
        type: "add",
        path: `./src/components/{{name}}/{{name}}.{{style}}.{{language}}`,
        templateFile: "./plop/component-{{style}}-template.hbs",
      })

      if (data.language == "ts") {
        actions.push({
          type: "add",
          path: `./src/components/{{name}}/{{name}}.types.{{language}}x`,
          templateFile: "./plop/component-types-template.hbs",
        })
      }

      return actions
    },
  })
}
