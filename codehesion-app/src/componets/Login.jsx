//need to make this global some how so i dont have to keep repeating this 

import { Formik, Field, Form } from "formik"
import axios from "axios"
import { useState, useEffect } from 'react'
//why refurse to use unsafe cookie on load
//must put client_id and _secret in .env cant let everyone see it 
export const Login = () => {
  const [token_o, setToken_o] = useState("")
  //should be in separate js file
  const client_id = import.meta.env.REACT_APP_client_id;
  const client_secret = import.meta.env.REACT_APP_client_secret;
  let data = ({
    //register these come from the form 
    'grant_type': 'password',
    'client_id': client_id,
    'client_secret': client_secret,
    'scope': 'openid profile role email offline_access adminApi mobileApi',
    'username': 'admin@codehesion.co.za',
    'password': 'P@ssword1'
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://edeaf-api-staging.azurewebsites.net/connect/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRDRDlGNDg5RDEwOTg4QjA5NDk3RjVBM0Y0OTc4M0Q4MUFEMkI2MDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IlRObjBpZEVKaUxDVWxfV2o5SmVEMkJyU3RnQSJ9.eyJuYmYiOjE2OTM0NjIxNzcsImV4cCI6MTY5MzQ2NTc3NywiaXNzIjoiaHR0cHM6Ly9lZGVhZi1hcGktc3RhZ2luZy5henVyZXdlYnNpdGVzLm5ldCIsImF1ZCI6ImVEZWFmQXBpIiwiY2xpZW50X2lkIjoid2ViLWRhc2hib2FyZCIsInN1YiI6IjFiY2QzMWYyLWIxZTgtNGU3ZS1hMTA4LTY0ZjgyZTFkMzMwYSIsImF1dGhfdGltZSI6MTY5MzQ2MjE3NywiaWRwIjoibG9jYWwiLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsImp0aSI6IkFFRkUzMjgwMjg1MzcxQ0RCNjAwRjQ4RTNCRUMzN0Y5IiwiaWF0IjoxNjkzNDYyMTc3LCJzY29wZSI6WyJhZG1pbkFwaSIsImVtYWlsIiwibW9iaWxlQXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInJvbGUiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.cnzPKtpi-gaY7faHAQ_2xQd-xh6pf-bpz51l46i1DC_MhasH33HowRN3qMs8dBC7fkZzLe9KBWdyjcAgAxQVxngGi0DxuU5vgIxCR9ehFLSYlYDXA-YkfT9u9r5XEF_DpkQF1NP4UP2yae3oGSO4-GHHr7XTp7qTchaUwq_U4IXIxRepBsLX-c-kkCyMdQjai01JZqhxT8TSrxzAkl_HBIgotHDlJzb3N_QDppkmvcYHR2cemm4Hv1ZGnIySaYNvO1by5OINAQ1SyNpALlx0c1GGuYWIz7vd5Eirog3Wky3mGHKdr-khiqPiHXxlYWACmWTkl9Eg9IK2SiDcXdrF6g', 
      'Cookie': 'ARRAffinity=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07; ARRAffinitySameSite=c03b4673f6f23ebd4ee8b0530ffb43a9bf80e737379a4092ddb472e0648d0a07'
    },
    data : data
  };
  //trying useState and use effect
  useEffect(()=>{
      console.log(token_o)
    },[token_o])

  const login = () => {
    //do login validation here then part means that correct 
    //local storage check if something correct 

    //do error  
    axios.request(config)
      .then((response) => {
        setToken_o(response.data.access_token)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="login-container">
        <h1>Login</h1>
        <Formik
          initialValues={{ uname: "", pword: "" }}
          onSubmit={async (values) => {
            //call axios 
            //shouldnt be here must b in separate use the layers to make it look good 
            if (values.uname === data.username && values.pword === data.password) {
              console.log(values,"correct")
              //ehat does this code do?
              login()
              await new Promise((resolve) => setTimeout(resolve, 5000));
              }else{
                  console.log(values,'incorrect')
              }
          }}
        >
          <Form>
            <Field name="uname" type="email" />
            <Field name="pword" type="text" />
            {/* it will then go into showing the categories if credentials correct*/}
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}
//why is my github not commiting my changes 