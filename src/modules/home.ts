import { ref, get } from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";

const ShowRef = ref(db, "/Topics/forumShows/");
const profilRef = ref(db, "/users/userInfo");

get(ShowRef).then((snapshot) => {
  console.log(snapshot.val());
  const messages = Object.values(snapshot.val());
  const showsTopic: HTMLElement = document.querySelector("#showsMessage");
  const ShowsUsername: HTMLElement = document.querySelector("#ShowsUsername");
  ShowsUsername.innerText = messages[messages.length - 1].name;
  showsTopic.innerText = messages[messages.length - 1].message;
});


get(profilRef).then((snapshot) => {
  console.log(snapshot.val());
  const users = Object.keys(snapshot.val());
  for (const user of users) {
    const usersDIV: HTMLDivElement = document.createElement("div");
    document.body.append(usersDIV);
    let usernames: HTMLParagraphElement = document.createElement("p");
    usernames.innerText = user;
    usersDIV.appendChild(usernames);

    usernames.addEventListener("click", function (e) {
      sessionStorage.setItem("targetUser", usernames.textContent);
      window.location.href = "./profile.html";
    });
  }
});

logOut();
