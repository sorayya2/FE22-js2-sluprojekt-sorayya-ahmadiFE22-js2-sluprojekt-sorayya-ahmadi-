import { ref, get, DataSnapshot, onValue } from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";
import { deleteProfile } from "./deleteUser";
(() => {
  let usernameID = sessionStorage.getItem("user");
  let target = sessionStorage.getItem("targetUser");
  let test = target === null ? usernameID : target;
  const myPicContainer = document.getElementById('myPicContainer') as HTMLDivElement


  const namn: HTMLElement = document.querySelector("#UsernameID");
  const genders: HTMLElement = document.querySelector("#genderID");
  const bios: HTMLElement = document.querySelector("#bioIDmessege");


  const dbRef = ref(db, `/users/userInfo/${test.toLowerCase()}`);
  get(dbRef).then((snapshot: DataSnapshot) => {
    if (snapshot.exists()) {
      const { username, bio, gender, profilePic } = snapshot.val();
      const img: HTMLInputElement = document.querySelector("#ProfileP");
      switch (profilePic) {
        case "1":
          img.src = new URL('../img/bild1.png', import.meta.url);
          break;
        case "2":
          img.src = new URL('../img/bild2.png', import.meta.url);
          break;
        case "3":
          img.src = new URL('../img/bild3.png', import.meta.url);
          break;

        default: return null
      }


      bios.innerText = bio;
      genders.innerText = gender;
      namn.innerText = username;
      sessionStorage.removeItem("targetUser");


      return { username, bio, gender, profilePic };
    }
    return {};
  }).then((userInfo) => {
    console.log("HELLO!!!!!! efter get: ", userInfo);
    let messagge = document.querySelector("#message") as HTMLDivElement;

    const dbMessageRef = ref(db, `/Topics/Shows`);


    onValue(dbMessageRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if (childData.name == userInfo?.username) {
          console.log("MATCHING NAME for message name & current username");
          messagge.innerHTML += childData.message + "<br>";

        }
        console.log(childKey, childData);

      });
    }, {
      onlyOnce: true
    });





  });






})();

deleteProfile();
logOut();
