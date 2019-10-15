export default function({ $axios, redirect }) {
  $axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3";

  // $axios.setHeader("Authorization", "123");
  $axios.onRequest(config => {
    // console.log("Making request to " + config.url);
  });
  
  $axios.onResponse(response => {});
  
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });
}
