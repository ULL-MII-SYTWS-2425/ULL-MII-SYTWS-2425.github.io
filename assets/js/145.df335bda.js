(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{789:function(t,s,e){"use strict";e.r(s);var a=e(9),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("p",[t._v("pnpm has built-in support for monorepositories (AKA multi-package repositories,\nmulti-project repositories, or monolithic repositories). You can create a\nworkspace to unite multiple projects inside a single repository.")]),t._v(" "),e("p",[t._v("A workspace must have a "),e("a",{attrs:{href:"https://github.com/gh-cli-for-education/nextra/blob/casiano/pnpm-workspace.yaml",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("pnpm-workspace.yaml")]),e("OutboundLink")],1),t._v(" file in its\nroot. A workspace also may have an "),e("a",{attrs:{href:"https://github.com/gh-cli-for-education/nextra/blob/casiano/.npmrc",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v(".npmrc")]),e("OutboundLink")],1),t._v(" in its root.")]),t._v(" "),e("h3",{attrs:{id:"publishing-workspace-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing-workspace-packages"}},[t._v("#")]),t._v(" Publishing workspace packages")]),t._v(" "),e("p",[t._v("When a workspace package is packed into an archive (whether it's through\n"),e("code",[t._v("pnpm pack")]),t._v(" or one of the publish commands like "),e("code",[t._v("pnpm publish")]),t._v("), they dynamically\nreplace any "),e("code",[t._v("workspace:")]),t._v(" dependency by:")]),t._v(" "),e("ul",[e("li",[t._v("The corresponding version in the target workspace (if you use "),e("code",[t._v("workspace:*")]),t._v(", "),e("code",[t._v("workspace:~")]),t._v(", or "),e("code",[t._v("workspace:^")]),t._v(")")]),t._v(" "),e("li",[t._v("The associated semver range (for any other range type)")])]),t._v(" "),e("p",[t._v("So for example, if we have "),e("code",[t._v("foo")]),t._v(", "),e("code",[t._v("bar")]),t._v(", "),e("code",[t._v("qar")]),t._v(", "),e("code",[t._v("zoo")]),t._v(" in the workspace and they all are at version "),e("code",[t._v("1.5.0")]),t._v(", the following:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workspace:*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workspace:~"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"qar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workspace:^"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zoo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workspace:^1.5.0"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("Will be transformed into:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.5.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~1.5.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"qar"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.5.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"zoo"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.5.0"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("This feature allows you to depend on your local workspace packages while still\nbeing able to publish the resulting packages to the remote registry without\nneeding intermediary publish steps - your consumers will be able to use your\npublished workspaces as any other package, still benefitting from the guarantees\nsemver offers.")]),t._v(" "),e("p",[t._v("In the case of the Nextra monorepo, we have examples of this in several  "),e("code",[t._v("package.json")]),t._v(" files. Among them:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/gh-cli-for-education/nextra/blob/casiano/packages/nextra-theme-docs/package.json#L34-L56",target:"_blank",rel:"noopener noreferrer"}},[t._v("packages/nextra-theme-docs/package.json"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/gh-cli-for-education/nextra/blob/casiano/examples/docs/package.json#L13-L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("/examples/docs/package.json"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);