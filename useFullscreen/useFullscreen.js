export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
      } else if (document.msRequestFullscreen) {
        document.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (element.exitFullscreen) {
      element.exitFullscreen();
    } else if (element.mozCancelFullScreen) {
      element.mozCancelFullScreen();
    } else if (element.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
