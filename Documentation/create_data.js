conn = new Mongo();

db = conn.getDB("teamBuilder");
db.teams.remove({})
db.teamMembers.remove({});

db.teams.insertOne({
  team_name: "Team One",
  project_description: "Create a microspork for a can hanger",
  max_team_size: 3,
  full_bool: false
});

cursor = db.teams.find({team_name: 'Team One'});
id = cursor.toArray()[0];

db.teamMembers.insertOne(
  {first_name: "Jay",
  last_name: "Gatsby",
  email: "jg@email.com",
  user_name: "jgatsby",
  phone_number: 5612309541,
  part_of_group: true,
  looking_for_group: false,
  looking_for_members: true,
  skills: ["Mongodb", "Javascript"],
  team_id: id._id
});

// db.teamMembers.find({phone_number: 5612309541}).forEach(function(obj) {
//   print(obj._id);
// })

db.teams.insertOne({
  team_name: "Team Two",
  project_description: "Formulate a catch basin for a Two-step",
  max_team_size: 3,
  full_bool: true
});

cursor = db.teams.find({team_name: 'Team Two'});
id = cursor.toArray()[0];

db.teamMembers.insertMany(
  [
    {
      first_name: "Holden",
      last_name: "Caulfield",
      email: "hc@email.com",
      phone_number: 4568952145,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: false,
      skills: ["DB2", "Perl"],
      team_id: id._id
    },
    {
      first_name: "Leopold",
      last_name: "Bloom",
      email: "lb@email.com",
      phone_number: 7812586413,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: false,
      skills: ["Java", "C++"],
      team_id: id._id
    },
    {
      first_name: "Rabbit",
      last_name: "Angstrom",
      email: "ra@email.com",
      phone_number: 9954871258,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: false,
      skills: ["C#", "F#"],
      team_id: id._id
    }
  ]
);

db.teams.insertOne({
  team_name: "Team Three",
  project_description: "Create a pan fry on camp stove",
  max_team_size: 3,
  full_bool: false
});

cursor = db.teams.find({team_name: 'Team Three'});
id = cursor.toArray()[0];

db.teamMembers.insertMany(
  [
    {
      first_name: "Atticus",
      last_name: "Finch",
      email: "af@email.com",
      phone_number: 1235896547,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: true,
      skills: ["Scala", ".net"],
      team_id: id._id
    },
    {
      first_name: "Leopold",
      last_name: "Bloom",
      email: "lb@email.com",
      phone_number: 7812586413,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: false,
      skills: ["Java", "C++"],
      team_id: id._id
    },
    {
      first_name: "Molly",
      last_name: "Bloom",
      email: "mb@email.com",
      phone_number: 8216485574,
      part_of_group: true,
      looking_for_group: false,
      looking_for_members: false,
      skills: ["cobol", "IMS"],
      team_id: id._id
    },
    {
      first_name: "Stephen",
      last_name: "Dedalus",
      email: "sd@email.com",
      phone_number: 5154485674,
      part_of_group: false,
      looking_for_group: true,
      looking_for_members: false,
      skills: ["groovy", "KRYPTON"]
    },
    {
      first_name: "Lily",
      last_name: "Bart",
      email: "lb@email.com",
      phone_number: 4582139547,
      part_of_group: false,
      looking_for_group: true,
      looking_for_members: false,
      skills: ["Objective-C", "PL/1"]
    },
    {
      first_name: "Holly",
      last_name: "Golightly",
      email: "hg@email.com",
      phone_number: 4521582973,
      part_of_group: false,
      looking_for_group: true,
      looking_for_members: false,
      skills: ["PHP", "Pascal"]
    }
  ]

);
