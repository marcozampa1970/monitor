// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  domain: '192.168.1.101',
  production: false,
  urlSensorsGet: 'https://192.168.1.101/monitor/rest/sensor/get',
  urlSensorGet: 'https://192.168.1.101/monitor/rest/sensor/id/get',  
  urlSwitchesGet: 'https://192.168.1.101/monitor/rest/switch/get',  
  urlSwitchGet: 'https://192.168.1.101/monitor/rest/switch/id/get',
  urlSwitchSet: 'https://192.168.1.101/monitor/rest/switch/set',
  urlOauthToken: 'https://192.168.1.101/auth/oauth/token',
  urlUsersGet: 'https://192.168.1.101/auth/rest/users/get'
};
