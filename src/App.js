const axios = require('axios');
const sendFormDataToDatabase = (e) => {
  const nameOfUser = e.target.name.value;
  const mobileNumberOfUser = e.target.mobileNumber.value;
  const userData = {
    name: nameOfUser,
    mobileNumber: mobileNumberOfUser,
  };
  axios.post('http://localhost:5000/users/add', userData)
    .then((res) => {
    if(res.status === 200) {
      alert('User added successfully');
    };
  })

}

function App() {
  return (
    <div className="App">
      {/* Form to store name and mobileNumber */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendFormDataToDatabase(e);
        }}
      >
        <label>
          <h1>Simple form</h1>
          Name:
          <input type="text" name="name" placeholder="Enter name..." />
        </label>
        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" placeholder="Enter mobile number..." />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h1>hello react kkk</h1>
    </div>
  );
}

export default App;
