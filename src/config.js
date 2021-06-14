const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-hdbnp7zw4tt4",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://plnyism5e9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9mJck3p9J",
    APP_CLIENT_ID: "363ddourd9krggsjr5t668q3nq",
    IDENTITY_POOL_ID: "us-east-1:c57f9cf5-4d6f-480a-a487-3a1179b76f7a",
  },
};

export default config;

