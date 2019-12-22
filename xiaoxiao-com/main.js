// const request = new XMLHttpRequest();

// request.open("GET", "http://qq.com:8888/friends.json");

// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(JSON.parse(request.response));
//   }
// };

// request.send();

jsonp("http://qq.com:8888/friends.js").then(data => {
  console.log(data);
});

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "xiaoxiaoJSONP" + Math.random();
    console.log(random);

    window[random] = data => {
      // resolve(data);
      console.log(data);
    };

    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      console.log(1);
      // reject();
    };
    document.body.appendChild(script);
  });
}
