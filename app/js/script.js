const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const hrTags = document.querySelectorAll(".hr");
const lhrTags = document.querySelectorAll(".lhr");
const btnTags = document.querySelectorAll(".btn");

const looper = (head, tag, dwm) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === head) {
      tag.textContent = `${data[i].timeframes[dwm].current}hrs`;
    }
  }
};

const looperTwo = (head, tag, dwm, tf) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === head) {
      tag.textContent = `Last ${tf} - ${data[i].timeframes[dwm].previous}hrs`;
    }
  }
};

const changer = (tags, loop, dwm, tf) => {
  tags.forEach((tag) => {
    switch (tag.dataset.title) {
      case "work":
        loop("Work", tag, dwm, tf);
        break;
      case "play":
        loop("Play", tag, dwm, tf);
        break;
      case "study":
        loop("Study", tag, dwm, tf);
        break;
      case "exe":
        loop("Exercise", tag, dwm, tf);
        break;
      case "social":
        loop("Social", tag, dwm, tf);
        break;
      case "sc":
        loop("Self Care", tag, dwm, tf);
        break;
    }
  });
};

btnTags.forEach((btn) => {
  btn.addEventListener("click", () => {
    const toRmv = document.querySelector(".active");
    toRmv.classList.remove("active");
    btn.classList.add("active");

    if (btn.textContent === "Daily") {
      changer(hrTags, looper, "daily");
      changer(lhrTags, looperTwo, "daily", "Day");
    } else if (btn.textContent === "Weekly") {
      changer(hrTags, looper, "weekly");
      changer(lhrTags, looperTwo, "weekly", "Week");
    } else {
      changer(hrTags, looper, "monthly");
      changer(lhrTags, looperTwo, "monthly", "Month");
    }
  });
});
document.querySelector(".active").click();
