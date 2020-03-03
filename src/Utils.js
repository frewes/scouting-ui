import axios from "axios";

// SELECT CONFIG
import {
  config,
  GetScore,
  RateAlliance,
  RankTeam
} from "./config/destination-deep-space";

let access_token = "";

// Just so the config file is chosen only in one place
export function GetScoreForTeam(data) {
  return GetScore(data);
}
// Just so the config file is chosen only in one place
export function GetScoreForTeamByNumber(data, team) {
  return GetScore(data);
}

export function GetScoreForAlliance(data, teamA, teamB, teamC) {
  return RateAlliance(data, teamA, teamB, teamC);
}

export function GetRanking(team, match_data) {
  let data = match_data.filter(x => x.ec5_parent_uuid === team.ec5_uuid);
  return RankTeam(data);
}

// Generated by Postman (THANK YOU POSTMAN!!!)
export async function GetToken(next, err) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(config.auth);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://five.epicollect.net/api/oauth/token", requestOptions)
    .then(response => response.json())
    .then(result => next(result))
    .catch(error => {
      err(error);
    });
}

export async function FetchAllTeams(next, err) {
  if (access_token === "") {
    GetToken(
      res => {
        console.log(res);
        access_token = "Bearer " + res.access_token;
        setTimeout(FetchAllTeams(next, err), 1000);
      },
      err => {
        console.log("error", err);
      }
    );
  } else {
    console.log("AT = " + access_token);
    try {
      const response = await axios.get(
        "https://five.epicollect.net/api/export/entries/" +
          config.project_slug +
          "?per_page=200",
        {
          headers: {
            Authorization: access_token
          }
        }
      );
      next(response.data.data.entries);
    } catch (error) {
      err(error);
    }
  }
}

export async function FetchTeamPhoto(parent_uid, photo_name, next, err) {
  let url =
    "https://five.epicollect.net/api/export/media/" +
    config.project_slug +
    "?type=photo&format=entry_original&name=" +
    photo_name;
  if (access_token === "") {
    GetToken(
      res => {
        console.log(res);
        access_token = "Bearer " + res.access_token;
        setTimeout(FetchAllTeams(next, err), 1000);
      },
      err => {
        console.log("error", err);
      }
    );
  } else {
    console.log("AT = " + access_token);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: access_token
        },
        responseType: "arraybuffer",
        timeout: 10000
      });
      console.log(response);
      next(Buffer.from(response.data, "binary").toString("base64"));
    } catch (error) {
      err(error);
    }
  }
}

export async function FetchMatchData(next, err) {
  if (access_token === "") {
    GetToken(
      res => {
        console.log(res);
        access_token = "Bearer " + res.access_token;
        setTimeout(FetchAllTeams(next, err), 10);
      },
      err => {
        console.log("error", err);
      }
    );
  } else {
    console.log("AT = " + access_token);
    try {
      const url =
        "https://five.epicollect.net/api/export/entries/" +
        config.project_slug +
        "?form_ref=" +
        config.form_ref_match_scouting +
        "&per_page=1000";
      FetchMatchPartial(url, next, err);
    } catch (error) {
      err(error);
    }
  }
}

async function FetchMatchPartial(url, next, err) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: access_token
      }
    });
    let A = response.data.data.entries;
    console.log("PARTIAL");
    console.log(response);
    if (response.data.links.next !== null) {
      next(
        FetchMatchPartial(
          response.data.links.next,
          A2 => {
            next(A.concat(A2));
          },
          err
        )
      );
    } else {
      next(A);
    }
  } catch (e) {
    err(e);
  }
}

// To scrape TBA:
// Header: {X-TBA-Auth-Key: "LxrSF9BTbWlfe9gf35iqkVKbkMKbOzNOwzN8Ys5wH9gp7MCBi3RdGOWQQJrQwb47"}
// Get teams:
// GET https://www.thebluealliance.com/api/v3/event/2019ausp/teams
// Get matches:
// GET https://www.thebluealliance.com/api/v3/team/frc5876/event/2019ausp/matches