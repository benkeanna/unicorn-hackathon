const tools = require("../tools/tools")
const path = require("path");

const dtoIn = [
  {
   "gender": "male",
   "name": "Karel",
   "surname": "Vrba",
   "birthday": "1981-02-21T15:13:38.407Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Žáková",
   "birthday": "2002-09-10T13:21:00.551Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Vladimír",
   "surname": "Pokorný",
   "birthday": "2003-03-03T06:51:06.835Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Jana",
   "surname": "Číhalová",
   "birthday": "1989-01-16T12:03:59.243Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Valeriya",
   "surname": "Středová",
   "birthday": "1972-07-14T21:40:06.754Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Vladimíra",
   "surname": "Polášková",
   "birthday": "1976-11-23T15:32:18.066Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Jaroslav",
   "surname": "Kyksa",
   "birthday": "1998-01-05T18:42:01.716Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Kristýna",
   "surname": "Uhlířová",
   "birthday": "2003-11-09T07:14:56.270Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Vladimíra",
   "surname": "Braunerová",
   "birthday": "1971-10-27T00:42:22.501Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Miroslava",
   "surname": "Polášková",
   "birthday": "1988-05-08T11:40:41.208Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Monika",
   "surname": "Braunerová",
   "birthday": "1981-06-30T17:41:16.663Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Drahotská",
   "birthday": "1984-03-01T14:54:20.195Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Marcela",
   "surname": "Janáčková",
   "birthday": "1992-10-10T10:25:04.120Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Opluštil",
   "birthday": "1972-11-25T21:02:37.170Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Veronika",
   "surname": "Leová",
   "birthday": "1985-10-07T15:55:51.121Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Roman",
   "surname": "Jeřábek",
   "birthday": "1974-02-26T08:18:51.088Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Věra",
   "surname": "Nováková",
   "birthday": "1993-02-23T16:24:17.999Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Růžena",
   "surname": "Kapešová",
   "birthday": "1989-09-19T17:11:12.697Z",
   "workload": 20
  },
  {
   "gender": "male",
   "name": "Yurii",
   "surname": "Chloupek",
   "birthday": "1970-07-14T12:26:10.797Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Miloslava",
   "surname": "Šustková",
   "birthday": "1973-07-06T08:25:27.667Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Lucie",
   "surname": "Bláhová",
   "birthday": "1976-05-30T23:31:35.307Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Valeriya",
   "surname": "Tranová",
   "birthday": "1993-01-14T10:53:22.339Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Jana",
   "surname": "Janáčková",
   "birthday": "1985-04-30T21:21:50.292Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Nikola",
   "surname": "Benešová",
   "birthday": "1983-01-10T23:22:18.641Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Jaroslava",
   "surname": "Janáčková",
   "birthday": "1970-03-05T21:13:20.201Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Antonín",
   "surname": "Vaněk",
   "birthday": "2003-02-06T13:45:13.421Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Stanislava",
   "surname": "Janáčková",
   "birthday": "1968-10-30T16:43:47.757Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Nikola",
   "surname": "Zadinová",
   "birthday": "1989-10-26T14:54:02.398Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Michaela",
   "surname": "Valentová",
   "birthday": "1972-02-07T22:09:35.666Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Kateřina",
   "surname": "Pilařová",
   "birthday": "1993-11-19T15:37:55.820Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Vendula",
   "surname": "Žáková",
   "birthday": "1976-10-24T22:28:58.401Z",
   "workload": 40
  },
  {
   "gender": "female",
   "name": "Jiřina",
   "surname": "Holubová",
   "birthday": "1985-09-02T20:29:57.905Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Josef",
   "surname": "Lysek",
   "birthday": "1978-10-31T17:25:34.882Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Luciano",
   "surname": "Staněk",
   "birthday": "1978-05-08T16:10:46.720Z",
   "workload": 20
  },
  {
   "gender": "male",
   "name": "Ondřej",
   "surname": "Krajča",
   "birthday": "1977-12-24T00:09:30.333Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Petra",
   "surname": "Holubová",
   "birthday": "1978-05-28T21:13:06.314Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Vladislav",
   "surname": "Chloupek",
   "birthday": "1971-02-21T06:40:08.036Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Dominika",
   "surname": "Včeláková",
   "birthday": "2001-03-23T23:56:59.736Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Tomaj",
   "birthday": "2000-04-28T12:45:13.400Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Václav",
   "surname": "Homolka",
   "birthday": "1998-12-06T09:45:41.884Z",
   "workload": 10
  },
  {
   "gender": "male",
   "name": "Zdeněk",
   "surname": "Hanousek",
   "birthday": "1978-03-11T19:07:28.974Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Jan",
   "surname": "Jasek",
   "birthday": "1987-11-30T17:35:51.558Z",
   "workload": 20
  },
  {
   "gender": "female",
   "name": "Stanislava",
   "surname": "Šírková",
   "birthday": "1982-07-18T10:31:33.551Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Gerhard",
   "surname": "Opluštil",
   "birthday": "1976-12-23T07:07:26.976Z",
   "workload": 30
  },
  {
   "gender": "female",
   "name": "Libuše",
   "surname": "Valentová",
   "birthday": "1972-01-03T12:46:52.088Z",
   "workload": 40
  },
  {
   "gender": "male",
   "name": "Jaromír",
   "surname": "Staněk",
   "birthday": "1967-09-29T22:30:55.696Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Jaroslava",
   "surname": "Foltinová",
   "birthday": "1991-08-07T05:04:32.330Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Jitka",
   "surname": "Zamprová",
   "birthday": "1971-11-22T11:24:27.899Z",
   "workload": 30
  },
  {
   "gender": "male",
   "name": "Karel",
   "surname": "Neplech",
   "birthday": "1987-09-02T18:12:29.179Z",
   "workload": 10
  },
  {
   "gender": "female",
   "name": "Marie",
   "surname": "Müllerová",
   "birthday": "1991-01-23T17:01:25.171Z",
   "workload": 30
  }
 ];

async function runFile(file) {
  const dtoOut = await tools.runFile(path.resolve(__dirname, file), dtoIn);
  console.log(JSON.stringify(dtoOut, null, 1));
}

runFile("task.js");
