/* eslint-disable no-console */
import axios from "axios";
import * as FormData from "form-data";
import http from "http";

const querystring = require("querystring");

export default async function handler(req, res) {
  console.log(req.body);

  const formQueryString = querystring.stringify(req.body);
  const submitted = formQueryString.concat(`&submit=submit`);

  const form = new FormData();

  for (const key in req.body) {
    form.append(key, req.body[key]);
  }
  form.append("submit", "submit");
  // form.submit(
  //   {
  //     host: "webto.salesforce.com",
  //     path: "/servlet/servlet.WebToLead?encoding=UTF-8",
  //     headers: {
  //       "Content-Type": "text/html; charset=UTF-8",
  //     },
  //   },
  //   function (err, response) {
  //     // response – response object (http.IncomingMessage)  //
  //     console.log(response);
  //     response.resume();
  //   }
  // );

  const formHeaders = form.getHeaders();
  axios
    .post(
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
      form,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          ...formHeaders,
        },
      }
    )
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return res.status(200).json({ msg: "success!", data: response.data });
      }
      throw new Error("non 200 response");
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "Error 500" });
    });
}
