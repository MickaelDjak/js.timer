let timerStorage = [
  {
    id: "d713e2c5-4e66-4a85-9d26-fed230e1ee7a",
    title: "Prepare #1",
    project: "Look for time and place",
    elapsed: 65402217,
    runningSince: 1580682381743
  }
];

function getTimers(hanlder) {
  return hanlder(timerStorage);
}

function createTimer(timer) {
  timerStorage = [...timerStorage, timer];
}

function deleteTimer(timerId) {
  timerStorage = [
    ...timerStorage.filter(timer => {
      return timer.id !== timerId;
    })
  ];
}

function updateTimer(updatedTimer) {
  timerStorage = [
    ...timerStorage.map(timer => {
      if (timer.id === updatedTimer.id) {
        return {
          ...timer,
          title: updatedTimer.title,
          project: updatedTimer.project
        };
      }

      return timer;
    })
  ];
}

function startTimer(timerId) {
  timerStorage = [
    ...timerStorage.map(timer => {
      if (timer.id === timerId) {
        return {
          ...timer,
          runningSince: Date.now()
        };
      }

      return timer;
    })
  ];
}

function stopTimer(timerId) {
  timerStorage = [
    ...timerStorage.map(timer => {
      if (timer.id === timerId) {
        return {
          ...timer,
          elapsed: timer.elapsed + Date.now() - timer.runningSince,
          runningSince: null
        };
      }

      return timer;
    })
  ];
}

export {
  getTimers,
  deleteTimer,
  stopTimer,
  startTimer,
  createTimer,
  updateTimer
};
