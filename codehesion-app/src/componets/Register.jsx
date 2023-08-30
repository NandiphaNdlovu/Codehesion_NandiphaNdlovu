//need a router so that after register then go login 

import { Formik, Field, Form } from "formik"

import axios from "axios"
export const Register = () => {
    //like in login but the data comes from the user
    let name=''
    let surname=''
    let email=''
    let role=''
    //user input 
    let data =({
        "name": name,
        "surname": surname,
        "email": email,
        "role": role
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://edeaf-api-staging.azurewebsites.net/v1/admin/Users',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjRDRDlGNDg5RDEwOTg4QjA5NDk3RjVBM0Y0OTc4M0Q4MUFEMkI2MDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlRObjBpZEVKaUxDVWxfV2o5SmVEMkJyU3RnQSJ9.eyJuYmYiOjE2OTM0MDcyMDUsImV4cCI6MTY5MzQxMDgwNSwiaXNzIjoiaHR0cHM6Ly9lZGVhZi1hcGktc3RhZ2luZy5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6ImVEZWFmQXBpIiwiY2xpZW50X2lkIjoid2ViLWRhc2hib2FyZCIsInN1YiI6IjFiY2QzMWYyLWIxZTgtNGU3ZS1hMTA4LTY0ZjgyZTFkMzMwYSIsImF1dGhfdGltZSI6MTY5MzQwNzIwNSwiaWRwIjoibG9jYWwiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsImp0aSI6IkVERTdGNEY1RDdBMTIwOTY4RDg3N0JBOEJFM0I2MTVGIiwiaWF0IjoxNjkzNDA3MjA1LCJzY29wZSI6WyJhZG1pbkFwaSIsImVtYWlsIiwibW9iaWxlQXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.rS3jF4Qd50g0-VkGo3zq2rtMPZ6rxYjZLCheZB3IOJNCa2DPzKhr2a-qw-GpWN4njeCtMXq3QjBHRag2C8mUxK5qNsKokjI9F-84VqE-g1ODx11c13XJy1B3wixriS3sfuXAnjUovZ7-aY3_2I74uYoOzlGuUCbbNutzc66M2yfdw_-tJFKf5TKZ7LT3ehfGQl6HslI5wod3t7e8w_82R_Eb6WrVobtELqxnfSVET0DvKKitUiGb_PpowvSLgX02xwjsnc_gBb0TMSvgKj9jVGvTogsCqDjRg596SQiMuPulWEOl6Q6Du-vLn1Efj2Etc11m75M06p1AfvY1l88WyA',
            'Cookie': 'ARRAffinity=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07; ARRAffinitySameSite=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        //have a user input form 
        <div>
            <div className="login-container">
        <h1>Register</h1>
        <Formik
          initialValues={{ name: "", surname: "" ,email:"",role:""}}
          onSubmit={async (values) => {
            //call axios 
            //shouldnt be here must b in separate use the layers to make it look good 
            if (values.uname === data.username && values.pword === data.password) {
              console.log(values,"correct",token_o)
              //ehat does this code do?
              login()
              await new Promise((resolve) => setTimeout(resolve, 5000));
              }else{
                  console.log(values,'incorrect')
              }
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <Field name="surname" type="text" />
            {/* it will then go into showing the categories if credentials correct*/}
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
        </div>
    )
}