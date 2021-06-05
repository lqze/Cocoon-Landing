/* eslint-disable no-console */
import axios from "axios";

export default async function handler(req, res) {
  axios
    .post(
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
      {
        data: req.body,
      }
    )
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        return res.status(200).json({ msg: "success!" });
      }
      throw new Error("non 200 response");
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "Error 500" });
    });
}
