const tasks = {
    "7": ["Complete frontend challenge", "Complete UI/UX challenge"],
    "11": ["Start new project", "Meet with team"],
    "16": ["Submit report", "Debug code"],
    "21": ["Code review", "Write documentation"],
    "29": ["Team building...", "Update website"]
};

const todaysTasks = document.getElementById("todays-tasks");

const datesContainer = document.querySelector(".dates");

const currentDateElement = document.getElementById('current-date');

updateDate(2);

for (let i = 1; i <= 30; i++) {
    const dateItem = document.createElement("div");
    dateItem.classList.add("date-item");
    dateItem.textContent = i;

    if (tasks[i]) {
        dateItem.classList.add("orange");
    }

    if(i === 2) {
        dateItem.classList.add("blue");
    }

    dateItem.addEventListener("click", () => {
        document.querySelectorAll(".date-item").forEach(item => item.classList.remove("blue"));
        dateItem.classList.add("blue");
        updateTasks(i);
        updateDate(i);
    });

    datesContainer.appendChild(dateItem);
}

function updateTasks(date) {
    todaysTasks.innerHTML = "";
    if (tasks[date]) {
        tasks[date].forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = task;
            todaysTasks.appendChild(taskItem);
        });
    }
}

function updateDate(date) {
    currentDateElement.textContent = `${date}`;
    
    if (date < 10) {
      document.querySelector('.date').textContent = `0${date}`;
    } else {
      document.querySelector('.date').textContent = `${date}`;
    }
  }