import { Formik, Field, Form } from "formik"
import axios from "axios"
//why refurse to use unsafe cookie on load
export const Login = () => {
    let data = {
        'grant_type': 'password',
        'client_id': 'web-dashboard',
        'client_secret': 'SuperSecretPassword',
        'scope': 'openid profile role email offline_access adminApi mobileApi',
        'username': 'admin@codehesion.co.za',
        'password': 'P@ssword1' 
      };
      
      let config = {
        //i think its the same rest but method different 
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://edeaf-api-staging.azurewebsites.net/connect/token',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjRDRDlGNDg5RDEwOTg4QjA5NDk3RjVBM0Y0OTc4M0Q4MUFEMkI2MDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlRObjBpZEVKaUxDVWxfV2o5SmVEMkJyU3RnQSJ9.eyJuYmYiOjE2OTMzNzY5ODYsImV4cCI6MTY5MzM4MDU4NiwiaXNzIjoiaHR0cHM6Ly9lZGVhZi1hcGktc3RhZ2luZy5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6ImVEZWFmQXBpIiwiY2xpZW50X2lkIjoid2ViLWRhc2hib2FyZCIsInN1YiI6IjFiY2QzMWYyLWIxZTgtNGU3ZS1hMTA4LTY0ZjgyZTFkMzMwYSIsImF1dGhfdGltZSI6MTY5MzM3Njk4NiwiaWRwIjoibG9jYWwiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsImp0aSI6IjY2RTEzRjRFQUI4OTQ0RTY1QTU0QTdEMTNBQzZERkRCIiwiaWF0IjoxNjkzMzc2OTg2LCJzY29wZSI6WyJhZG1pbkFwaSIsImVtYWlsIiwibW9iaWxlQXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.N26hFn_qoElZi_QK7khLYDBvzJMSHdtk1ryiVWetgFGQoUuXm2TE5EBfCKFTsW9X0rzatAVUZJbVMqYB4svq1CZdYmMgSQ1dTe-pRX-5HmPqKTGjlhG1RrMHSsl83p2nPXHoik-yfJoKjm4_v2iVTl6iECEUu9hM4SvQ6WXeyhVQYsW-sfXp3lBKKcNf2hmSLTl7iZj0AofQffigcZAAZMgPo6Jq_HtCGJs7-kdKTTZacCndZhLliQNdOAsIS5jOQInCurVa_1w1289rcNxK132U-2MGG85lROd3bKkjO783GmUWAhFYFG8JvM_Il657qkdsnc7QO9E_GgvpBCy_kw', 
          'Cookie': 'ARRAffinity=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07; ARRAffinitySameSite=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    return (
        <div>
            <div className="login-container">
                <h1>Login</h1>
                <Formik
                    initialValues={{ uname: "", pword: "" }}
                    onSubmit={async (values) => {
                        //call axios 
                        if (values.uname === data.username && values.pword === data.password) {
                        console.log("correct")
                        //ehat does this code do?
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        }else{
                            console.log('incorrect')
                        }
                    }}
                >
                    <Form>
                        <Field name="uname" type="email" />
                        <Field name="pword" type="text" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}