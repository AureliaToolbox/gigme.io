System.config({
  "baseURL": "/assets/aureliatoolkit",
  "transpiler": "traceur",
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "aurelia-skeleton-navigation/*": "lib/*.js"
  },
  "bundles": {
    "app-bundle": [
      "github:zloirock/core-js@0.8.4/modules/$.fw",
      "github:zloirock/core-js@0.8.4/modules/$.uid",
      "github:zloirock/core-js@0.8.4/modules/$.def",
      "github:zloirock/core-js@0.8.4/modules/$.invoke",
      "github:zloirock/core-js@0.8.4/modules/$.assert",
      "github:zloirock/core-js@0.8.4/modules/$.array-includes",
      "github:zloirock/core-js@0.8.4/modules/$.replacer",
      "github:zloirock/core-js@0.8.4/modules/$.keyof",
      "github:zloirock/core-js@0.8.4/modules/$.assign",
      "github:zloirock/core-js@0.8.4/modules/es6.object.is",
      "github:zloirock/core-js@0.8.4/modules/$.set-proto",
      "github:zloirock/core-js@0.8.4/modules/es6.object.to-string",
      "github:zloirock/core-js@0.8.4/modules/es6.object.statics-accept-primitives",
      "github:zloirock/core-js@0.8.4/modules/es6.function.name",
      "github:zloirock/core-js@0.8.4/modules/es6.number.constructor",
      "github:zloirock/core-js@0.8.4/modules/es6.number.statics",
      "github:zloirock/core-js@0.8.4/modules/es6.math",
      "github:zloirock/core-js@0.8.4/modules/es6.string.from-code-point",
      "github:zloirock/core-js@0.8.4/modules/es6.string.raw",
      "github:zloirock/core-js@0.8.4/modules/$.string-at",
      "github:zloirock/core-js@0.8.4/modules/$.iter",
      "github:zloirock/core-js@0.8.4/modules/es6.string.code-point-at",
      "github:zloirock/core-js@0.8.4/modules/es6.string.ends-with",
      "github:zloirock/core-js@0.8.4/modules/es6.string.includes",
      "github:zloirock/core-js@0.8.4/modules/es6.string.repeat",
      "github:zloirock/core-js@0.8.4/modules/es6.string.starts-with",
      "github:zloirock/core-js@0.8.4/modules/$.iter-detect",
      "github:zloirock/core-js@0.8.4/modules/es6.array.of",
      "github:zloirock/core-js@0.8.4/modules/$.unscope",
      "github:zloirock/core-js@0.8.4/modules/$.species",
      "github:zloirock/core-js@0.8.4/modules/es6.array.copy-within",
      "github:zloirock/core-js@0.8.4/modules/es6.array.fill",
      "github:zloirock/core-js@0.8.4/modules/es6.array.find",
      "github:zloirock/core-js@0.8.4/modules/es6.array.find-index",
      "github:zloirock/core-js@0.8.4/modules/es6.regexp",
      "github:zloirock/core-js@0.8.4/modules/$.task",
      "github:zloirock/core-js@0.8.4/modules/$.collection-strong",
      "github:zloirock/core-js@0.8.4/modules/$.collection",
      "github:zloirock/core-js@0.8.4/modules/es6.set",
      "github:zloirock/core-js@0.8.4/modules/$.collection-weak",
      "github:zloirock/core-js@0.8.4/modules/es6.weak-set",
      "github:zloirock/core-js@0.8.4/modules/$.own-keys",
      "github:zloirock/core-js@0.8.4/modules/es7.array.includes",
      "github:zloirock/core-js@0.8.4/modules/es7.string.at",
      "github:zloirock/core-js@0.8.4/modules/es7.regexp.escape",
      "github:zloirock/core-js@0.8.4/modules/es7.object.get-own-property-descriptors",
      "github:zloirock/core-js@0.8.4/modules/es7.object.to-array",
      "github:zloirock/core-js@0.8.4/modules/es7.set.to-json",
      "github:zloirock/core-js@0.8.4/modules/js.array.statics",
      "github:zloirock/core-js@0.8.4/modules/$.partial",
      "github:zloirock/core-js@0.8.4/modules/web.immediate",
      "github:zloirock/core-js@0.8.4/modules/web.dom.iterable",
      "github:zloirock/core-js@0.8.4/modules/core.dict",
      "github:zloirock/core-js@0.8.4/modules/core.iter-helpers",
      "github:zloirock/core-js@0.8.4/modules/core.$for",
      "github:zloirock/core-js@0.8.4/modules/core.delay",
      "github:zloirock/core-js@0.8.4/modules/core.binding",
      "github:zloirock/core-js@0.8.4/modules/core.object",
      "github:zloirock/core-js@0.8.4/modules/core.array.turn",
      "github:zloirock/core-js@0.8.4/modules/core.number.iterator",
      "github:zloirock/core-js@0.8.4/modules/core.number.math",
      "github:zloirock/core-js@0.8.4/modules/core.string.escape-html",
      "github:zloirock/core-js@0.8.4/modules/core.date",
      "github:zloirock/core-js@0.8.4/modules/core.global",
      "github:zloirock/core-js@0.8.4/modules/core.log",
      "github:aurelia/metadata@0.4.0/resource-type",
      "github:aurelia/metadata@0.4.0/metadata",
      "github:aurelia/metadata@0.4.0/decorator-applicator",
      "github:aurelia/path@0.5.0/index",
      "github:aurelia/loader@0.5.0/loader",
      "github:zloirock/core-js@0.8.4/modules/$",
      "github:zloirock/core-js@0.8.4/modules/$.wks",
      "github:zloirock/core-js@0.8.4/modules/$.ctx",
      "github:zloirock/core-js@0.8.4/modules/es6.symbol",
      "github:zloirock/core-js@0.8.4/modules/es6.object.assign",
      "github:zloirock/core-js@0.8.4/modules/es6.object.set-prototype-of",
      "github:zloirock/core-js@0.8.4/modules/es6.string.iterator",
      "github:zloirock/core-js@0.8.4/modules/es6.array.from",
      "github:zloirock/core-js@0.8.4/modules/es6.array.iterator",
      "github:zloirock/core-js@0.8.4/modules/es6.array.species",
      "github:zloirock/core-js@0.8.4/modules/es6.promise",
      "github:zloirock/core-js@0.8.4/modules/es6.map",
      "github:zloirock/core-js@0.8.4/modules/es6.weak-map",
      "github:zloirock/core-js@0.8.4/modules/es6.reflect",
      "github:zloirock/core-js@0.8.4/modules/web.timers",
      "github:aurelia/metadata@0.4.0/decorators",
      "github:aurelia/path@0.5.0",
      "github:zloirock/core-js@0.8.4/modules/$.cof",
      "github:zloirock/core-js@0.8.4/modules/$.array-methods",
      "github:aurelia/loader@0.5.0/template-registry-entry",
      "github:zloirock/core-js@0.8.4/modules/es5",
      "github:aurelia/loader@0.5.0/index",
      "github:zloirock/core-js@0.8.4/shim",
      "github:aurelia/loader@0.5.0",
      "github:zloirock/core-js@0.8.4/index",
      "github:zloirock/core-js@0.8.4",
      "github:aurelia/metadata@0.4.0/origin",
      "github:aurelia/metadata@0.4.0/index",
      "github:aurelia/metadata@0.4.0",
      "github:aurelia/loader-default@0.6.0/index",
      "github:aurelia/loader-default@0.6.0",
      "github:aurelia/binding@0.5.0/value-converter",
      "github:aurelia/binding@0.5.0/event-manager",
      "github:aurelia/task-queue@0.3.0/index",
      "github:aurelia/binding@0.5.0/array-change-records",
      "github:aurelia/binding@0.5.0/map-change-records",
      "github:aurelia/binding@0.5.0/map-observation",
      "github:aurelia/binding@0.5.0/dirty-checking",
      "github:aurelia/binding@0.5.0/property-observation",
      "github:aurelia/binding@0.5.0/element-observation",
      "github:aurelia/dependency-injection@0.6.0/metadata",
      "github:aurelia/logging@0.3.0/index",
      "github:aurelia/binding@0.5.0/computed-observation",
      "github:aurelia/binding@0.5.0/binding-modes",
      "github:aurelia/binding@0.5.0/lexer",
      "github:aurelia/binding@0.5.0/path-observer",
      "github:aurelia/binding@0.5.0/composite-observer",
      "github:aurelia/binding@0.5.0/binding-expression",
      "github:aurelia/binding@0.5.0/listener-expression",
      "github:aurelia/binding@0.5.0/name-expression",
      "github:aurelia/binding@0.5.0/call-expression",
      "github:aurelia/templating@0.10.3/resource-registry",
      "github:aurelia/templating@0.10.3/view",
      "github:aurelia/templating@0.10.3/content-selector",
      "github:aurelia/templating@0.10.3/animator",
      "github:aurelia/templating@0.10.3/binding-language",
      "github:aurelia/templating@0.10.3/util",
      "github:aurelia/templating@0.10.3/bindable-property",
      "github:aurelia/templating@0.10.3/behavior-instance",
      "github:aurelia/templating@0.10.3/children",
      "github:aurelia/templating@0.10.3/element-config",
      "github:aurelia/templating@0.10.3/composition-engine",
      "github:aurelia/templating@0.10.3/decorators",
      "github:aurelia/templating-binding@0.10.0/syntax-interpreter",
      "github:aurelia/task-queue@0.3.0",
      "github:aurelia/binding@0.5.0/collection-observation",
      "github:aurelia/logging@0.3.0",
      "github:aurelia/binding@0.5.0/ast",
      "github:aurelia/templating@0.10.3/view-slot",
      "github:aurelia/templating@0.10.3/module-analyzer",
      "github:aurelia/templating-binding@0.10.0/binding-language",
      "github:aurelia/binding@0.5.0/array-observation",
      "github:aurelia/dependency-injection@0.6.0/container",
      "github:aurelia/binding@0.5.0/parser",
      "github:aurelia/templating@0.10.3/view-strategy",
      "github:aurelia/templating@0.10.3/view-factory",
      "github:aurelia/dependency-injection@0.6.0/index",
      "github:aurelia/templating@0.10.3/view-compiler",
      "github:aurelia/dependency-injection@0.6.0",
      "github:aurelia/templating@0.10.3/view-engine",
      "github:aurelia/binding@0.5.0/observer-locator",
      "github:aurelia/binding@0.5.0/index",
      "github:aurelia/binding@0.5.0",
      "github:aurelia/templating@0.10.3/html-behavior",
      "github:aurelia/templating@0.10.3/index",
      "github:aurelia/templating@0.10.3",
      "github:aurelia/templating-binding@0.10.0/index",
      "github:aurelia/templating-binding@0.10.0",
      "github:aurelia/templating-resources@0.10.0/if",
      "github:aurelia/templating-resources@0.10.0/with",
      "github:aurelia/templating-resources@0.10.0/repeat",
      "github:aurelia/templating-resources@0.10.0/show",
      "github:aurelia/templating-resources@0.10.0/global-behavior",
      "github:aurelia/templating-resources@0.10.0/sanitize-html",
      "github:aurelia/templating-resources@0.10.0/compose",
      "github:aurelia/templating-resources@0.10.0/index",
      "github:aurelia/templating-resources@0.10.0",
      "github:aurelia/route-recognizer@0.3.0/dsl",
      "github:aurelia/router@0.7.2/navigation-commands",
      "github:aurelia/router@0.7.2/navigation-instruction",
      "github:aurelia/router@0.7.2/util",
      "github:aurelia/history@0.3.0/index",
      "github:aurelia/router@0.7.2/pipeline",
      "github:aurelia/router@0.7.2/route-loading",
      "github:aurelia/router@0.7.2/activation",
      "github:aurelia/event-aggregator@0.3.0/index",
      "github:aurelia/templating-router@0.11.0/router-view",
      "github:aurelia/route-recognizer@0.3.0/index",
      "github:aurelia/router@0.7.2/navigation-plan",
      "github:aurelia/history@0.3.0",
      "github:aurelia/router@0.7.2/pipeline-provider",
      "github:aurelia/event-aggregator@0.3.0",
      "github:aurelia/route-recognizer@0.3.0",
      "github:aurelia/router@0.7.2/navigation-context",
      "github:aurelia/router@0.7.2/app-router",
      "github:aurelia/router@0.7.2/route-filters",
      "github:aurelia/router@0.7.2/router-configuration",
      "github:aurelia/router@0.7.2/router",
      "github:aurelia/router@0.7.2/index",
      "github:aurelia/templating-router@0.11.0/route-loader",
      "github:aurelia/router@0.7.2",
      "github:aurelia/templating-router@0.11.0/index",
      "github:aurelia/templating-router@0.11.0",
      "github:aurelia/history-browser@0.3.0/index",
      "github:aurelia/history-browser@0.3.0",
      "github:aurelia/http-client@0.7.0/headers",
      "github:aurelia/http-client@0.7.0/http-response-message",
      "github:aurelia/http-client@0.7.0/transformers",
      "github:aurelia/http-client@0.7.0/jsonp-request-message",
      "github:aurelia/http-client@0.7.0/request-message-processor",
      "github:aurelia/http-client@0.7.0/http-request-message",
      "github:aurelia/http-client@0.7.0/request-builder",
      "github:aurelia/http-client@0.7.0/http-client",
      "github:aurelia/http-client@0.7.0/index",
      "github:aurelia/http-client@0.7.0",
      "github:aurelia/framework@0.10.0/plugins",
      "github:aurelia/logging-console@0.3.0/index",
      "github:aurelia/logging-console@0.3.0",
      "github:aurelia/framework@0.10.0/aurelia",
      "github:aurelia/framework@0.10.0/index",
      "github:aurelia/framework@0.10.0",
      "github:aurelia/bootstrapper@0.11.0/index",
      "github:aurelia/bootstrapper@0.11.0"
    ]
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.11.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
    "aurelia-framework": "github:aurelia/framework@0.10.0",
    "aurelia-http-client": "github:aurelia/http-client@0.7.0",
    "aurelia-router": "github:aurelia/router@0.7.2",
    "bootstrap": "github:twbs/bootstrap@3.3.4",
    "bootstrap-material": "github:fezVrasta/bootstrap-material-design@0.3.0",
    "css": "github:systemjs/plugin-css@0.1.10",
    "font-awesome": "npm:font-awesome@4.3.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "github:aurelia/binding@0.5.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/bootstrapper@0.11.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.3.0",
      "aurelia-framework": "github:aurelia/framework@0.10.0",
      "aurelia-history": "github:aurelia/history@0.3.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.3.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.6.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.3.0",
      "aurelia-router": "github:aurelia/router@0.7.2",
      "aurelia-templating": "github:aurelia/templating@0.10.3",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.10.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.10.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.11.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/dependency-injection@0.6.0": {
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/framework@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.3",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/history-browser@0.3.0": {
      "aurelia-history": "github:aurelia/history@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/http-client@0.7.0": {
      "aurelia-path": "github:aurelia/path@0.5.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/loader-default@0.6.0": {
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0"
    },
    "github:aurelia/loader@0.5.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "core-js": "github:zloirock/core-js@0.8.4",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/metadata@0.4.0": {
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/route-recognizer@0.3.0": {
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/router@0.7.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.3.0",
      "aurelia-history": "github:aurelia/history@0.3.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/templating-binding@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.3"
    },
    "github:aurelia/templating-resources@0.10.0": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.10.3",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:aurelia/templating-router@0.11.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-router": "github:aurelia/router@0.7.2",
      "aurelia-templating": "github:aurelia/templating@0.10.3"
    },
    "github:aurelia/templating@0.10.3": {
      "aurelia-binding": "github:aurelia/binding@0.5.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.6.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.5.0",
      "aurelia-logging": "github:aurelia/logging@0.3.0",
      "aurelia-metadata": "github:aurelia/metadata@0.4.0",
      "aurelia-path": "github:aurelia/path@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.3.0",
      "core-js": "github:zloirock/core-js@0.8.4"
    },
    "github:fezVrasta/bootstrap-material-design@0.3.0": {
      "css": "github:systemjs/plugin-css@0.1.10",
      "jquery": "github:components/jquery@2.1.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.1"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:systemjs/plugin-css@0.1.10": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "github:twbs/bootstrap@3.3.4": {
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.2.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.10"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

