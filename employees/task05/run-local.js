const tools = require("../tools/tools")
const path = require("path");

const dtoIn = [
  {
   "gender": "male",
   "name": "Karel",
   "surname": "Vrba",
   "birthdate": "1981-02-21T15:13:38.407Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Žáková",
   "birthdate": "2002-09-10T13:21:00.551Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Vladimír",
   "surname": "Pokorný",
   "birthdate": "2003-03-03T06:51:06.835Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Jana",
   "surname": "Číhalová",
   "birthdate": "1989-01-16T12:03:59.243Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Valeriya",
   "surname": "Středová",
   "birthdate": "1972-07-14T21:40:06.754Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Vladimíra",
   "surname": "Polášková",
   "birthdate": "1976-11-23T15:32:18.066Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Jaroslav",
   "surname": "Kyksa",
   "birthdate": "1998-01-05T18:42:01.716Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Kristýna",
   "surname": "Uhlířová",
   "birthdate": "2003-11-09T07:14:56.270Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Vladimíra",
   "surname": "Braunerová",
   "birthdate": "1971-10-27T00:42:22.501Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Miroslava",
   "surname": "Polášková",
   "birthdate": "1988-05-08T11:40:41.208Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Monika",
   "surname": "Braunerová",
   "birthdate": "1981-06-30T17:41:16.663Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Drahotská",
   "birthdate": "1984-03-01T14:54:20.195Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Marcela",
   "surname": "Janáčková",
   "birthdate": "1992-10-10T10:25:04.120Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Opluštil",
   "birthdate": "1972-11-25T21:02:37.170Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Veronika",
   "surname": "Leová",
   "birthdate": "1985-10-07T15:55:51.121Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Roman",
   "surname": "Jeřábek",
   "birthdate": "1974-02-26T08:18:51.088Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Věra",
   "surname": "Nováková",
   "birthdate": "1993-02-23T16:24:17.999Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Růžena",
   "surname": "Kapešová",
   "birthdate": "1989-09-19T17:11:12.697Z",
   "workload": 20
  },
  {
   "gender": "male",
   "name": "Yurii",
   "surname": "Chloupek",
   "birthdate": "1970-07-14T12:26:10.797Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Miloslava",
   "surname": "Šustková",
   "birthdate": "1973-07-06T08:25:27.667Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Lucie",
   "surname": "Bláhová",
   "birthdate": "1976-05-30T23:31:35.307Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Valeriya",
   "surname": "Tranová",
   "birthdate": "1993-01-14T10:53:22.339Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Jana",
   "surname": "Janáčková",
   "birthdate": "1985-04-30T21:21:50.292Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Nikola",
   "surname": "Benešová",
   "birthdate": "1983-01-10T23:22:18.641Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Jaroslava",
   "surname": "Janáčková",
   "birthdate": "1970-03-05T21:13:20.201Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Antonín",
   "surname": "Vaněk",
   "birthdate": "2003-02-06T13:45:13.421Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Stanislava",
   "surname": "Janáčková",
   "birthdate": "1968-10-30T16:43:47.757Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Nikola",
   "surname": "Zadinová",
   "birthdate": "1989-10-26T14:54:02.398Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Michaela",
   "surname": "Valentová",
   "birthdate": "1972-02-07T22:09:35.666Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Kateřina",
   "surname": "Pilařová",
   "birthdate": "1993-11-19T15:37:55.820Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Vendula",
   "surname": "Žáková",
   "birthdate": "1976-10-24T22:28:58.401Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Jiřina",
   "surname": "Holubová",
   "birthdate": "1985-09-02T20:29:57.905Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Josef",
   "surname": "Lysek",
   "birthdate": "1978-10-31T17:25:34.882Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Luciano",
   "surname": "Staněk",
   "birthdate": "1978-05-08T16:10:46.720Z",
   "workload": 20
  },
  {
   "gender": "male",
   "name": "Ondřej",
   "surname": "Krajča",
   "birthdate": "1977-12-24T00:09:30.333Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Holubová",
   "birthdate": "1978-05-28T21:13:06.314Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Vladislav",
   "surname": "Chloupek",
   "birthdate": "1971-02-21T06:40:08.036Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Dominika",
   "surname": "Včeláková",
   "birthdate": "2001-03-23T23:56:59.736Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Tomaj",
   "birthdate": "2000-04-28T12:45:13.400Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Václav",
   "surname": "Homolka",
   "birthdate": "1998-12-06T09:45:41.884Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Zdeněk",
   "surname": "Hanousek",
   "birthdate": "1978-03-11T19:07:28.974Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Jan",
   "surname": "Jasek",
   "birthdate": "1987-11-30T17:35:51.558Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Stanislava",
   "surname": "Šírková",
   "birthdate": "1982-07-18T10:31:33.551Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Opluštil",
   "birthdate": "1976-12-23T07:07:26.976Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Libuše",
   "surname": "Valentová",
   "birthdate": "1972-01-03T12:46:52.088Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Jaromír",
   "surname": "Staněk",
   "birthdate": "1967-09-29T22:30:55.696Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Jaroslava",
   "surname": "Foltinová",
   "birthdate": "1991-08-07T05:04:32.330Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Jitka",
   "surname": "Zamprová",
   "birthdate": "1971-11-22T11:24:27.899Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Karel",
   "surname": "Neplech",
   "birthdate": "1987-09-02T18:12:29.179Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Marie",
   "surname": "Müllerová",
   "birthdate": "1991-01-23T17:01:25.171Z",
   "workload": 30
  }
 ];

async function runFile(file) {
  const dtoOut = await tools.runFile(path.resolve(__dirname, file), dtoIn);
  console.log(JSON.stringify(dtoOut, null, 1));
}

runFile("task.js");
