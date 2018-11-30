conn = new Mongo();

db = conn.getDB("teamBuilder");
db.teams.remove({})
db.teamMembers.remove({});

db.teams.insertOne({
  teamName: "Team One",
  projectDescription: "Create a microspork for a can hanger",
  maxTeamSize: 3,
  isFull: false
});

cursor = db.teams.find({teamName: 'Team One'});
id = cursor.toArray()[0];

db.teamMembers.insertOne(
  {firstName: "Jay",
  lastName: "Gatsby",
  email: "jg@email.com",
  userName: "jgatsby",
  phoneNumber: 5612309541,
  partOfGroup: true,
  lookingForGroup: false,
  lookingForMembers: true,
  skills: ["Mongodb", "Javascript"],
  teamId: id._id
});

// db.teamMembers.find({phoneNumber: 5612309541}).forEach(function(obj) {
//   print(obj._id);
// })

db.teams.insertOne({
  teamName: "Team Two",
  projectDescription: "Formulate a catch basin for a Two-step",
  maxTeamSize: 3,
  isFull: true
});

cursor = db.teams.find({teamName: 'Team Two'});
id = cursor.toArray()[0];

db.teamMembers.insertMany(
  [
    {
      firstName: "Holden",
      lastName: "Caulfield",
      email: "hc@email.com",
      phoneNumber: 4568952145,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: false,
      skills: ["DB2", "Perl"],
      teamId: id._id
    },
    {
      firstName: "Leopold",
      lastName: "Bloom",
      email: "lb@email.com",
      phoneNumber: 7812586413,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: false,
      skills: ["Java", "C++"],
      teamId: id._id
    },
    {
      firstName: "Rabbit",
      lastName: "Angstrom",
      email: "ra@email.com",
      phoneNumber: 9954871258,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: false,
      skills: ["C#", "F#"],
      teamId: id._id
    }
  ]
);

db.teams.insertOne({
  teamName: "Team Three",
  projectDescription: "Create a pan fry on camp stove",
  maxTeamSize: 3,
  isFull: false
});

cursor = db.teams.find({teamName: 'Team Three'});
id = cursor.toArray()[0];

db.teamMembers.insertMany(
  [
    {
      firstName: "Atticus",
      lastName: "Finch",
      email: "af@email.com",
      phoneNumber: 1235896547,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: true,
      skills: ["Scala", ".net"],
      teamId: id._id
    },
    {
      firstName: "Leopold",
      lastName: "Bloom",
      email: "lb@email.com",
      phoneNumber: 7812586413,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: false,
      skills: ["Java", "C++"],
      teamId: id._id
    },
    {
      firstName: "Molly",
      lastName: "Bloom",
      email: "mb@email.com",
      phoneNumber: 8216485574,
      partOfGroup: true,
      lookingForGroup: false,
      lookingForMembers: false,
      skills: ["cobol", "IMS"],
      teamId: id._id
    },
    {
      firstName: "Stephen",
      lastName: "Dedalus",
      email: "sd@email.com",
      phoneNumber: 5154485674,
      partOfGroup: false,
      lookingForGroup: true,
      lookingForMembers: false,
      skills: ["groovy", "KRYPTON"]
    },
    {
      firstName: "Lily",
      lastName: "Bart",
      email: "lb@email.com",
      phoneNumber: 4582139547,
      partOfGroup: false,
      lookingForGroup: true,
      lookingForMembers: false,
      skills: ["Objective-C", "PL/1"]
    },
    {
      firstName: "Holly",
      lastName: "Golightly",
      email: "hg@email.com",
      phoneNumber: 4521582973,
      partOfGroup: false,
      lookingForGroup: true,
      lookingForMembers: false,
      skills: ["PHP", "Pascal"]
    }
  ]

);
