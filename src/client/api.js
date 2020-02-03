const URL = "https://6b5bi.sse.codesandbox.io/api/timers";

function getTimers(hanlder) {
  return fetch(URL, {
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(hanlder);
}

function createTimer(timer) {
  return fetch(URL, {
    method: "post",
    body: JSON.stringify(timer),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

function deleteTimer(timerId) {
  return fetch(URL, {
    method: "delete",
    body: JSON.stringify({
      id: timerId
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

function updateTimer(timer) {
  return fetch(URL, {
    method: "put",
    body: JSON.stringify(timer),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

function stopTimer(timerId) {
  return fetch(URL + "/stop", {
    method: "post",
    body: JSON.stringify({
      id: timerId,
      stop: Date.now()
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

function startTimer(timerId) {
  return fetch(URL + "/start", {
    method: "post",
    body: JSON.stringify({
      id: timerId,
      start: Date.now()
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

export {
  getTimers,
  deleteTimer,
  stopTimer,
  startTimer,
  createTimer,
  updateTimer
};
