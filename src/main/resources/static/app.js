angular.module('jolokiaWeb', ['ngRoute', 'ui.bootstrap', 'angular-websocket', 'chart.js', 'ui-notification'])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    template: "<dashboard-page></dashboard-page>",
  })
  .when('/mbean', {
    template: "<mbean-page></mbean-page>",
  })
  .when('/version', {
    template: "<version-page></version-page>",
  })
  .when('/settings', {
    template: "<settings-page></settings-page>",
  })
  .otherwise({redirectTo: '/'});
})
.constant('jsPath', {
  component: './static/component',
  api: './api',
  ws: (window.location.protocol.startsWith("https") ? "wss://" : "ws://") + window.location.host + window.location.pathname + ((window.location.pathname.endsWith("/")) ? "ws" : "/ws")
})
.run(function(DashboardService, JolokiaService, LocalStorageService, $rootScope){
  $rootScope.isMinView = function(){
    return LocalStorageService.get("minView");
  }
});
