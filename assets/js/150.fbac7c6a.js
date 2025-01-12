(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{795:function(s,e,a){"use strict";a.r(e);var t=a(9),r=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-deploy-to-github-pages-a-vuepress-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-to-github-pages-a-vuepress-report"}},[s._v("#")]),s._v(" How to Deploy to GitHub Pages a VuePress Report")]),s._v(" "),a("p",[s._v("Estando en la raíz de nuestra práctica emitimos el comando:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx create-vuepress-site\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Respondemos a todas las preguntas con las respuestas por defecto")]),s._v(" "),a("p",[s._v("Instalamos:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd docs\nnpm install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Editamos el fichero "),a("code",[s._v("docs/src/.vuepress/config.js")]),s._v(" y añadimos como valor de "),a("code",[s._v("base")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("➜  docs git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ head "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("  src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" description "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../package'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("base")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/egg-parser-diego-perez-garcia-alu0101345918/report/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Sustituya "),a("code",[s._v("/egg-parser-diego-perez-garcia-alu0101345918")]),s._v(" por su correspondiente "),a("code",[s._v("assignmentName-team")])]),s._v(" "),a("p",[s._v("Nos vamos al "),a("code",[s._v("docs/package.json")]),s._v(" que "),a("code",[s._v("create-vuepress-site")]),s._v(" ha creado y modificamos el  script "),a("code",[s._v("build")]),s._v(" como sigue:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("➜  docs git"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("(master) ✗ jq '.scripts' package.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build src -d report"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Esto hará que los HTML generados por Vuepress queden en "),a("code",[s._v("docs/repotrt")]),s._v(".")]),s._v(" "),a("p",[s._v("Ahora comprobemos en local nuestro despliegue. Estando en "),a("code",[s._v("docs/src")]),s._v(" escribimos:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("La url de despliegue que estamos viendo en el browser debería ser algo con el patrón")]),s._v(" "),a("p",[a("code",[s._v("http://localhost:8081/egg-parser-diego-perez-garcia-alu0101345918/report/")])]),s._v(" "),a("p",[s._v("esto es, debe seguir el patrón  "),a("code",[s._v("/nombre-del-repo/report/")])]),s._v(" "),a("p",[s._v("A continuación construimos el site:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Esto debería producir un directorio "),a("code",[s._v("docs/report")]),s._v(" con los ficheros generados:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("➜  docs git:(master) ✗ ls report\n404.html   assets     config     guide      index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Añada "),a("code",[s._v("docs/report")]),s._v(" al control de versiones ("),a("code",[s._v("git add docs")]),s._v(", etc.).")]),s._v(" "),a("p",[s._v("Visite su repo en GitHub. Active las GitHub pages de su report desde la rama principal con directorio "),a("code",[s._v("docs")]),s._v(" como fuente y haga un "),a("code",[s._v("commit")]),s._v(" y un "),a("code",[s._v("push")]),s._v(".")]),s._v(" "),a("p",[s._v("Debería poder ver el informe en el subdirectorio "),a("code",[s._v("report")]),s._v(" de su despliegue.")]),s._v(" "),a("p",[s._v("Todo lo que escriba en "),a("code",[s._v("docs/src")]),s._v(" se verá reflejado en el informe.")])])}),[],!1,null,null,null);e.default=r.exports}}]);