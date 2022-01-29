const MALE = "male";
const FEMALE = "female";
const MALE_NAMES = ['Václav', 'Miroslav', 'Petr', 'Michal', 'Jiří', 'Jaromír', 'Zdeněk', 'Tomáš', 'Adrian', 'Jan', 'Martin', 'Pavel', 'Robert', 
'Ryszard', 'Josef', 'Vladimír', 'Jaroslav', 'Karel', 'Vitalii', 'Arnošt', 'Roman', 'Ondřej', 'František', 'Luciano', 'Lukáš', 'Milan', 'Jakub', 
'Eduard', 'Adam', 'Antonín', 'Ladislav', 'David', 'Rudolf', 'Gerhard', 'Radim', 'Jozef', 'Stanislav', 'Ludvík', 'Vojtěch', 'Yurii', 'Jindřich', 
'Vladislav', 'Radek', 'Filip', 'Marek', 'Miloš', 'Luboš', 'Otakar', 'Zbyněk', 'Daniel'];
const MALE_SURNAMES = ['Kamrád', 'Štencel', 'Urzedovský', 'Oškera', 'Peinelt', 'Pangrác', 'Herynek', 'Číž', 'Vaněk', 'Bečán', 'Hercík', 'Soural', 
'Grulich', 'Slouka', 'Jeřábek', 'Krajča', 'Jekl', 'Opluštil', 'Chloupek', 'Jasek', 'Bartoník', 'Jaworski', 'Tůma', 'Macháč', 'Zeť', 'Mahdal', 'Holeček', 
'Chaloupka', 'Homolka', 'Vrba', 'Kupček', 'Lysek', 'Zeman', 'Bursík', 'Hanuš', 'Zvonař', 'Král', 'Parkos', 'Rabas', 'Skucius', 'Staněk', 'Palán', 
'Jelínek', 'Valášek', 'Kyksa', 'Hanousek', 'Němec', 'Neplech', 'Tomaj', 'Pokorný'];
const FEMALE_NAMES = ['Zdeňka', 'Radka', 'Martina', 'Libuše', 'Kateřina', 'Marie', 'Jana', 'Stanislava', 'Božena', 'Naděžda', 'Monika', 'Lenka', 'Kristýna', 
'Simona', 'Anna', 'Hana', 'Eva', 'Jaroslava', 'Vendula', 'Dominika', 'Vladislava', 'Miroslava', 'Květoslava', 'Markéta', 'Jitka', 'Lucie', 'Alena', 'Marcela', 
'Valeriya', 'Pavlína', 'Aneta', 'Tetyana', 'Věra', 'Helena', 'Petra', 'Ivana', 'Jiřina', 'Vladimíra', 'Anežka', 'Viktorie', 'Miloslava', 'Jarmila', 'Ludmila', 
'Michaela', 'Barbora', 'Nikola', 'Růžena', 'Milena', 'Miluše', 'Veronika'];
const FEMALE_SURNAMES = ['Paličková', 'Mirgová', 'Opichalová', 'Kuřová', 'Kaufová', 'Holubová', 'Bláhová', 'Zadinová', 'Stránská', 'Uhlířová', 'Kapešová', 
'Středová', 'Benešová', 'Braunerová', 'Foltinová', 'Bažantová', 'Ciupová', 'Kočová', 'Holešinská', 'Redzinová', 'Včeláková', 'Prokešová', 'Čepeláková', 'Šírková', 
'Müllerová', 'Nováková', 'Duchoňová', 'Duchoňová', 'Arnoštová', 'Dočkalová', 'Pilařová', 'Nečesaná', 'Šustková', 'Číhalová', 'Drahotská', 'Frýdlová', 'Tranová', 
'Žáková', 'Kováčová', 'Polášková', 'Leová', 'Valentová', 'Zamprová', 'Erbenová', 'Horáčková', 'Serbusová', 'Budilová', 'Janáčková', 'Táborská', 'Navrátilová'];
const WORKLOAD = [10, 20, 30, 40];