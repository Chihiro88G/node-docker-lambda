exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify('NODEJS DOCKER LAMBDA!'),
  };
}


//   to invoke lambda locally after build and run
//      curl 'http://localhost:9000/2015-03-31/functions/function/invocations' -d '{}'
//      output: {"statusCode":200,"body":"\"NODEJS DOCKER LAMBDA!\""}%   

//   to invoke lambda that is deployed on AWS using AWS CLI
//   aws lambda invoke --function-name node-docker-lambda response.json