/* Configuration details - CDN from firebase */
const firebaseConfig = {
  apiKey: "AIzaSyAIIZIuL99m2qouDgGVrpgPrvlTJPBoaGg",
  authDomain: "corona-virus-project-30cb0.firebaseapp.com",
  databaseURL: "https://corona-virus-project-30cb0-default-rtdb.firebaseio.com",
  projectId: "corona-virus-project-30cb0",
  storageBucket: "corona-virus-project-30cb0.appspot.com",
  messagingSenderId: "638892982764",
  appId: "1:638892982764:web:a396af68747aca3eaa40c9"
};
firebase.initializeApp(firebaseConfig);

document.getElementById('testForm').addEventListener('submit',submitForm)

function submitForm(e){
  e.preventDefault()
  console.log("it is working!!")
  var state = document.getElementById('state').value;
  state = state.toLowerCase();
  readState(state);
  var fname = document.getElementById('firstname').value;
  var lname = document.getElementById('lastname').value;
  var dateofbirth = document.getElementById('dateofbirth').value;
  var mobile = document.getElementById('mobile').value;
  var profession = document.getElementById('profession').value;
  var email = document.getElementById('email').value;
  writeInfo(fname+" "+lname,mobile,email,profession,dateofbirth,state);
}
function readState(state){
  var center;
  firebase.database().ref(state).on('value',(dhairya)=>{
      center = dhairya.val()
      document.getElementById('result').innerHTML="<br>"+center.toUpperCase();
  })
}
function writeInfo(name,mobile,email,profession,dateofbirth,state){
  firebase.database().ref('userInputs').push({
    name,mobile,email,profession,dateofbirth,state
  })
}
