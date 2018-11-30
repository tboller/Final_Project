const express = require('express')
const app = express()
const port = 3000

var mongoose = require('mongoose');
// mongoose.connect('mongodb://tboller:password1@ds145053.mlab.com:45053/itmd462');
mongoose.connect('mongodb://localhost/teamBuilder');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

var teamSchema = new mongoose.Schema({
  teamName: {type: String, required: true},
  projectDescription: {type: String, required: true },
  maxTeamSize: {type: Number, required: true, default: 3},
  isFull: {type: Boolean, required: true, default: false}
});
let Team = mongoose.model('Team', teamSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.get('/', (req,res)=>{
    //TODO: This is the path for the login page
  });

  app.get('/users/new', (req,res)=>{
    //TODO: Path to get to the edit profile page but instead will
    //be blank so user can create a new profile.
  });

  app.get('/users/current', (req,res)=>{
    //TODO: this path from the log in page sends you to the view
    //profile page of the profile of the person that logged in.
    //Also will update currentUser variable to the indicated user
    //profile based off of the form data that is passed in from
    //the log in page.
  });

  app.post('/users/current', (req,res)=>{
    //Posted form data from the edit profile page will update current
    //users profile.

  });

  app.get('/users/current/edit', (req,res)=>{
    //Will send the user to the edit profile page with the data from
    //their current profile already filled in to the blanks
  });

  app.delete('/users/current/delete',(req,res)=>{
    //will delete the current users profile and then send them back
    //to the log in page.
  });

  app.get('/users',(req,res)=>{
    //redirects to the all profiles page from which the current users
    //can view all profiles. Clicking on one of the cards will send them
    //to the view profile page for that specific profile.
  });

  app.get('/users/:uid',(req,res)=>{
    //Will send to the view profile page loaded with the information for
    //the profile that matches the id
  });

  app.get('/teams',(req,res)=>{
    //sends you to the teams page which has a list/cards of all teams
    Team.find({}, function(err, teams){
      if(err) {
        res.render("error", {err});
      } else {
        res.render('teams', {teamList: teams});
      }
    });
  });

  app.get('/teams/new',(req,res)=>{
    //Sends you to the create/edit team form page which allows
    //you to create a new team and updates user as admin of team
    console.log("clicked new");
    res.render('team_form', {title: "New team", team: {} })
  });

  //THE ROUTE HAS TO BE :id not :tid
  app.get('/teams/:id',(req, res, next) =>{
    //sends you to the team information page filled in with the
    //details about the team that matches the tid.
    console.log("clicked id");
		let id = ObjectID.createFromHexString(req.params.id);

		Team.findById(id, function(err, savedTeam) {
			if (err) {
				console.log(err)
				res.status(500).send("Internal Error")
			} else {
				res.send(savedTeam)
			}
		});
  });

  app.get('/teams/:tid/edit',(req,res)=>{
    //sends you to the edit page with the form filled in with
    //tid's information only if current user is admin for tid
  });

  app.post('/teams',(req,res)=>{
    //sends the form from the edit/create team back to be added
    //or updated to the database
		//This is just until we completely hash out the pages, to test the api CRUD
		let newTeam = new Team(req.body);

		newTeam.save(function (err, savedTeam) {
			if (err) {
				console.log(err)
				res.status(500).send("Internal Error")
			} else {
				res.send(savedTeam)
			}

		});
  });

  app.post('/teams/new',(req,res)=>{
    //sends the form from the edit/create team back to be added
    //or updated to the database
    //This is just until we completely hash out the pages, to test the api CRUD
    let newTeam = new Team(req.body);
    newTeam.save(function (err, savedTeam) {
      if (err) {
        console.log(err)
        res.status(500).send("Internal Error")
      } else {
        // res.send(savedTeam)
        res.redirect('/teams');
      }
    });
  });

  app.post('/teams/:tid/edit/removemember/:uid', (req,res)=>{
    //Removes user uid from team tid and updates the form to indicate so
    //adds user back to the available members list
    //verifies that current user is admin of team tid
  });

  app.post('/teams/:tid/edit/addmember/:uid', (req,res)=>{
    //Adds user uid to the tid team and updates the form to indicate so
    //removes this user from available members list
    //verifies that current user is admin of team tid
  });

  app.delete('/teams/:tid/delete',(req,res)=>{
    //deletes the team and adds all users back to the available members list
    //verifies that current user is admin of team tid
  });

  app.post('/teams/leave',(req,res)=>{
    //allows a user to leave their team and adds them back to the available users list
  });

  app.post('/teams/:tid/join',(req,res)=>{
    //allows a user to join a team and removes them from the available members list
  });
});

app.listen(port, () => console.log(`Team Project Builder app listening on port ${port}!`))
