// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:10010/v1',
  websocketUrl: 'ws://localhost:8080',
  entityName: '[Entity]',
  callbackUrl: 'http://localhost:10010/v1',
  authToken: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlbnRpdHlJc3N1ZXIiLCJpYXQiOjE1ODczNjc3MjcsImV4cCI6MTYxODkwMzcyNywiYXVkIjoiRXhhbXBsZSBhdXRob3JpemF0aW9uIFRva2VuIiwic3ViIjoiaWRlbnRpdHlTdWJqZWN0In0.zujXluegmpfzWLqoFECL_X6h8gaRIHkQrg5kh9fvSyg"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
