const btn = document.querySelector("#btn"),
  container = document.querySelector("#container");

btn.addEventListener("click", createNotification);

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = "Hello there from the World!";

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
