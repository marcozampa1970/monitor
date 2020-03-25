// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  domain: 'localhost',
  production: false,
  urlSensorsGet: 'https://localhost/monitor/rest/sensor/get',
  urlSensorGet: 'https://localhost/monitor/rest/sensor/id/get',  
  urlSwitchesGet: 'https://localhost/monitor/rest/switch/get',  
  urlSwitchGet: 'https://localhost/monitor/rest/switch/id/get',
  urlSwitchSet: 'https://localhost/monitor/rest/switch/set',
  urlOauthToken: 'https://localhost/auth/oauth/token',
  urlUsersGet: 'https://localhost/auth/rest/users/get'
};
