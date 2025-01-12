(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{732:function(e,t,a){"use strict";a.r(t);var r=a(9),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"practica-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practica-frontmatter-title"}},[e._v("#")]),e._v(" Práctica "+e._s(e.$frontmatter.title))]),e._v(" "),a("ul",[a("li",[e._v("Siguiendo las instrucciones en el  "),a("a",{attrs:{href:"https://github.com/SYTW/iaas-ull-es",target:"_blank",rel:"noopener noreferrer"}},[e._v("repositorio SYTW/iaas-ull-es"),a("OutboundLink")],1),e._v(" despliegue un ejemplo como el que aparece en "),a("a",{attrs:{href:"https://github.com/crguezl/express-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("crguezl/express-start"),a("OutboundLink")],1),e._v(" en su máquina virtual del servicio "),a("a",{attrs:{href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"}},[e._v("iaas.ull.es"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Puede encontrar un vídeo del profesor introduciendo el "),a("a",{attrs:{href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"}},[e._v("iaas.ull.es aquí"),a("OutboundLink")],1),e._v(".\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i3.ytimg.com/vi/qKHgbV0lYbA/hqdefault.jpg",alt:"iaas.ull.es"}}),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("El vídeo es de 2018 y varias de las apps usadas han cambiado de versión pero la esencia de la metodología es la misma")])])]),e._v(" "),a("li",[e._v("Añada en el "),a("code",[e._v("README.md")]),e._v(" un pequeño tutorial de como usar y desplegar una aplicación web en "),a("a",{attrs:{href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"}},[e._v("iaas.ull.es"),a("OutboundLink")],1),e._v(".\n"),a("ul",[a("li",[e._v("Haga capturas de pantalla que muestren que su máquina esta bien configurada y funcionando")])])]),e._v(" "),a("li",[e._v("La IP dinámica de su máquina virtual no debería cambiar si no la apaga. Publique la URL de despliegue en su máquina")]),e._v(" "),a("li",[e._v("Prepare la máquina para poder trabajar:\n"),a("ul",[a("li",[a("p",[e._v("Instale git si es necesario")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configura git"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Procure que la rama actual aparezca en el prompt de la terminal. Ejemplo para una bash. Pon en el fichero "),a("code",[e._v("~/.bash_profile")]),e._v(" o "),a("code",[e._v("~/.bashrc")]),e._v(" estas líneas:")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[e._v("parse_git_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/^[^*]/d'")]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/* \\(.*\\)/ (\\1)/'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PS1")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\u@\\h \\['),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[e._v("\\033")]),e._v("[32m\\]\\w\\["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[e._v("\\033")]),e._v("[33m\\]\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("parse_git_branch"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\\["),a("span",{pre:!0,attrs:{class:"token entity",title:"\\033"}},[e._v("\\033")]),e._v('[00m\\] $ "')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ul",[a("li",[e._v("También puede usar "),a("a",{attrs:{href:"https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("git prompt"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Puede añadir algo como esto a su PS1: "),a("code",[e._v("PS1=\"\\$(git branch 2>/dev/null | sed -n 's/* \\(.*\\)/\\1 /p')$ \"")])]),e._v(" "),a("li",[e._v("Recuerde que si su prompt es muy largo siempre puede acortarlo con "),a("code",[e._v("PROMPT_DIRTRIM=1")])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases",target:"_blank",rel:"noopener noreferrer"}},[e._v("git aliases"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/cli/cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instale GitHub CLI"),a("OutboundLink")],1),e._v(" y aprenda a usarla")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cli.github.com/manual/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manual"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("Opcionalmente puede instalar "),a("a",{attrs:{href:"https://linuxbrew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxbrew"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Instale "),a("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Instale nodeJS usando nvm")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://jshint.com/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jshint"),a("OutboundLink")],1),e._v(" y "),a("a",{attrs:{href:"https://coderwall.com/p/zfhquw/jshint-in-vim",target:"_blank",rel:"noopener noreferrer"}},[e._v("jshint on vim"),a("OutboundLink")],1),e._v(" o JSLint o "),a("a",{attrs:{href:"https://www.slant.co/topics/2411/~best-javascript-linting-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("equivalente"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Instale "),a("a",{attrs:{href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"}},[e._v("NERDTree"),a("OutboundLink")],1),e._v(" para vim")])])]),e._v(" "),a("li",[a("p",[e._v("Instale Express.js")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express Web Framework (Node.js/JavaScript)"),a("OutboundLink")],1),e._v(" (Mozilla)")])])])])])]),e._v(" "),a("h2",{attrs:{id:"campus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#campus"}},[e._v("#")]),e._v(" Campus")]),e._v(" "),a("p",[a("campus")],1),e._v(" "),a("h2",{attrs:{id:"repos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repos"}},[e._v("#")]),e._v(" Repos")]),e._v(" "),a("p",[a("repos")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);