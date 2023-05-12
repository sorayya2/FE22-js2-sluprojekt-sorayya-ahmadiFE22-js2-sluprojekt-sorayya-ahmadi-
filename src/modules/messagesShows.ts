import { get, ref, remove, update, onValue, push } from "firebase/database";
import { db } from "./firebaseApp";
import { logOut } from "./logout";

export class Messages
{
  constructor(
    public readonly id: string,
    public readonly userName: string,
    public readonly message: string,
    public readonly timeStamp: string
  )
  {
    this.displayMsg();
  }
  private displayMsg(): void
  {
    const msgWrapper = document.getElementById("messagesShows");
    const msgContainer = document.createElement("div") as HTMLDivElement;
    msgWrapper.append(msgContainer);
    msgContainer.classList.add(this.id, "chat-styling");

    const userNameElement = document.createElement("h4") as HTMLHeadElement;
    userNameElement.innerText = this.timeStamp + `${this.userName} says ${this.message}`;
    msgContainer.append(userNameElement);

    const removeBtn = document.createElement("button") as HTMLButtonElement;
    removeBtn.innerText = "X";
    if (this.userName == sessionStorage.getItem("user"))
    {
      msgContainer.append(removeBtn);
    }

    removeBtn.addEventListener("click", () =>
    {
      const userName = sessionStorage.getItem("user");
      if (userName == sessionStorage.getItem("user"))
      {
        const msgRef = ref(db, "/Topics/Shows/" + this.id);
        remove(msgRef);
      }
    });
  }
  public clearDOM(): void
  {
    document.querySelector(`.${this.id}`).remove();
  }
}
const dbRef = ref(db, "/Topics/Shows/");
let messages: Messages[] = [];
onValue(dbRef, (snapshot) =>
{
  const messageData = snapshot.val();
  for (const message of messages)
  {
    message.clearDOM();
  }
  messages = [];
  for (const key in messageData)
  {
    messages.push(
      new Messages(
        key,
        messageData[ key ].name,
        messageData[ key ].message,
        messageData[ key ].timeStamp
      )
    );
  }
  scrollDown();
  function postLimiter(): void
  {
    const messageArray = Object.values(messageData);
    const index0 = Object.keys(messageData)[ 0 ];
    for (let i = 0; i < messageArray.length; i++)
    {
      if (messageArray.length > 25)
      {
        const post = ref(db, "/Topics/Shows/" + index0);
        remove(post);
      }
    }
  }
  if (messageData)
  {
    postLimiter();
  }
});
if (sessionStorage.getItem("user") == null || undefined || "")
{
  document.getElementById("send").style.visibility = "hidden";
}

else
{
  document.getElementById("send").style.visibility = "visible";
  document.getElementById("send").addEventListener("click", (e) =>
  {
    e.preventDefault();
    const message = document.getElementById("userMessage") as HTMLInputElement;
    const date = new Date();
    const messageToAdd = {
      timeStamp:
        date.getFullYear() +
        " " +
        (date.getMonth() + 1) +
        "/" +
        date.getUTCDate() +
        " - " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ": ",
      name: sessionStorage.getItem("user"),
      message: message.value
    };

    const newKey: string = push(dbRef).key;
    const newMessage = {};
    newMessage[ newKey ] = messageToAdd;
    update(dbRef, newMessage);
  });
}

function scrollDown(): void
{
  const e = document.getElementById("messagesShows");
  e.scrollTop = e.scrollHeight;
}
logOut();