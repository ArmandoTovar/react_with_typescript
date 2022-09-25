import { Sub, SubsResponseFromApi } from "../types";
import axios from "axios";

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};

//   const fetchSubs = (): Promise<SubsResponseFromApi> => {

const fetchSubs = async () => {
  // return  fetch("http://localhost:3001/subs").then((res) => res.json());
  const response = await axios.get<SubsResponseFromApi>(
    "http://localhost:3001/subs"
  );
  return response.data;
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;
    return {
      nick,
      description,
      avatar,
      subMonths,
    };
  });
};
// Es lo mismo a lo de abajo
// fetchSubs()
// .then(mapFromApiToSubs)
// .then(setSubs);

//   fetchSubs().then((apiSubs) => {
//     const subs = mapFromApiToSubs(apiSubs);
//     setSubs(subs);
//   });
// }, []);
