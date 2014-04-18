define(["mvc/user/user-model","utils/metrics-logger","utils/add-logging","utils/localization","bootstrapped-data"],function(b,d,g,e,a){function h(n){var m=this;return m._init(n||{})}g(h,"GalaxyApp");h.prototype.defaultOptions={patchExisting:true,root:"/"};h.prototype._init=function k(n){var m=this;_.extend(m,Backbone.Events);m._processOptions(n);m.debug("GalaxyApp.options: ",m.options);m._patchGalaxy(window.Galaxy);m.debug("GalaxyApp.options: ",m.options);m._initLogger(n.loggerOptions||{});m.debug("GalaxyApp.logger: ",m.logger);m._initLocale();m.debug("GalaxyApp.localize: ",m.localize);m.config=n.config||a.config||{};m.debug("GalaxyApp.config: ",m.config);m._initUser(n.user||a.user||{});m.debug("GalaxyApp.user: ",m.user);m.trigger("ready",m);return m};h.prototype._processOptions=function f(o){var n=this,p=n.defaultOptions;n.debug("_processOptions: ",o);n.options={};for(var m in p){if(p.hasOwnProperty(m)){n.options[m]=(o.hasOwnProperty(m))?(o[m]):(p[m])}}return n};h.prototype._patchGalaxy=function f(m){var o=this;if(o.options.patchExisting&&m){o.debug("found existing Galaxy object:",m);for(var n in m){if(m.hasOwnProperty(n)){o.debug("\t patching in "+n+" to Galaxy");o[n]=m[n]}}}};h.prototype._initLogger=function l(n){var m=this;m.debug("_initLogger:",n);m.logger=new d.MetricsLogger(n);return m};h.prototype._initLocale=function j(n){var m=this;m.debug("_initLocale:",n);m.localize=e;window._l=m.localize;return m};h.prototype._initUser=function i(n){var m=this;m.debug("_initUser:",n);m.user=new b.User(n);m.currUser=m.user;return m};h.prototype.toString=function c(){var m=this.user.get("email")||"(anonymous)";return"GalaxyApp("+m+")"};return{GalaxyApp:h}});