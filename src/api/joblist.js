import axios from "axios";

import { NEWSEARCH } from "./endpoints";

export async function runNewSearch( startTime, endTime) {
  var apiData = {
    startdatetime: startTime,

    enddatetime: endTime,
  };

  var config = {
    method: "put",

    url: NEWSEARCH,

    headers: {
      Authorization:
        "Bearer " +
        //  NEED NEW API KEY ADD BELOW
        "",
    },

    data: apiData,
  };

  //var response = api call

  var response = await axios(config)
    .then((result) => {
      return JSON.parse(result.data.payload).availablejobs;
    })

    .catch((error) => {
      return { error: error }
    });

  return response;
}
