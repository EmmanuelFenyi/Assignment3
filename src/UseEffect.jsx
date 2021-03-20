import { useState, useEffect } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div id="mainContainer">
      <h1>FEMMY'S TECH INSTITUTE STUDENTS PROFILE</h1>
      <section className="boxContainer">
        {users.map((user, i) => (
          <div key={i} className="box">
            <header className="box-header">
              <a href="/" className="sm-container">
                <img src=".\img\facebook.png" alt="fb" className="sm-img" />
              </a>
              <a href="/" className="sm-container">
                <img src="\img\instagrm.png" alt="" className="sm-img" />
              </a>
              <a href="/" className="sm-container">
                <img src="\img\telegram.png" alt="" className="sm-img" />
              </a>
              <a href="/" className="sm-container">
                <img src="\img\twit.png" alt="" className="sm-img" />
              </a>
              <a href="/" className="sm-container">
                <img src="\img\youtube.png" alt="" className="sm-img" />
              </a>
            </header>
            <main className="box-mainBody">
              <h2>
                <strong>{user.name}</strong>
              </h2>
              <ul className="navBar">
                <li className="navListItem">
                  <a href="/">Profile</a>
                </li>
                <li className="navListItem">
                  <a href="/">Results</a>
                </li>
                <li className="navListItem">
                  <a href="/">Enrolments</a>
                </li>
                <li className="navListItem">
                  <a href="/">Notes</a>
                </li>
              </ul>

              <div className="profileDetails">
                <div className="std-Img left-Right-Dimm">
                  <img src="profile-pic.png" alt="Profile-Pic" />
                </div>
                <div class="std-Info left-Right-Dimm">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {user.phone}
                  </p>
                  <p>
                    <strong>Website:</strong> {user.website}
                  </p>
                </div>
              </div>

              <div class="footerBar">
                <div id="footerItem1">
                  <div className="footerB whiteText">Date</div>
                  <div>XXXX</div>
                </div>
                <div id="footerItem2">
                  <div className="footerB whiteText">Credential</div>
                  <div>Details</div>
                </div>
                <div id="footerItem3">
                  <div className="footerB whiteText">Status</div>
                  <div>Active </div>
                </div>
              </div>
            </main>

            {/* <hr /> */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default UseEffect;
