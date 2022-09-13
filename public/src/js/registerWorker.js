const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("/src/js/serviceWorker.js");
      } catch (error) {console.error(`Registration failed with ${error}`);}
    }
  };

export default registerServiceWorker;