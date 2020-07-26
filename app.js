const btnGET = document.querySelector('#btnGET');
const btnPOST = document.querySelector('#btnPOST');
const btnPUT = document.querySelector('#btnPUT');
const btnDELETE = document.querySelector('#btnDELETE');
const inputID = document.getElementById('ID');
const inputURL = document.getElementById('URL');
const baseURL = "http://localhost:3000/api/dinosaursimageAPI/"

btnGET.addEventListener('click', evt => {

  const resultEle = document.querySelector('#result');
  const resultURLEle = document.querySelector('#resultURL');
  const xhr = new XMLHttpRequest();
  console.log("resultEle",resultEle.textContent);
  console.log(inputID.value);


  xhr.addEventListener('load', evt => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.response);
      console.log("Result",result);
      if (resultEle.textContent === "") {
        resultEle.append(result[0] + result[1]);
        const imageEl = document.querySelector('.image');
        imageEl.src = result[2];
        resultURLEle.append(imageEl);
      } else {
        resultEle.textContent = result[0] + result[1];
        const imageEl = document.querySelector('.image');
        imageEl.src = result[2];
      }
    }
  });

  xhr.addEventListener('error', evt => {
    console.error(evt);
  });

  xhr.open('get', baseURL + inputID.value, true);
  xhr.send();
});

btnPOST.addEventListener('click', evt => {

  const resultEle = document.querySelector('#result');
  const resultURLEle = document.querySelector('#resultURL');
  const xhr = new XMLHttpRequest();
  let body = "name=" + inputID.value +"&" + "URL=" + inputURL.value;
  console.log("resultEle",resultEle.textContent);
  

  xhr.addEventListener('load', evt => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.response);
      console.log("Result",result);
      if (resultEle.textContent === "") {
        resultEle.append(result);
      } else {
        resultEle.textContent = result;
        const imageEl = document.querySelector('.image');
        imageEl.src = "";
      }
    }
  });

  xhr.addEventListener('error', evt => {
    console.error(evt);
  });
  xhr.open('post', baseURL, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() { // 状態が変化すると関数が呼び出されます。
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // リクエストの終了。ここの処理を実行します。
      }
  }
  xhr.send(body);
});

btnPUT.addEventListener('click', evt => {

  const resultEle = document.querySelector('#result');
  const resultURLEle = document.querySelector('#resultURL');
  const xhr = new XMLHttpRequest();
  let body = "name=" + inputID.value +"&" + "URL=" + inputURL.value;
  console.log("resultEle",resultEle.textContent);
  

  xhr.addEventListener('load', evt => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.response);
      console.log("Result",result);
      if (resultEle.textContent === "") {
        resultEle.append(result);
      } else {
        resultEle.textContent = result;
        const imageEl = document.querySelector('.image');
        imageEl.src = "";
      }
    }
  });

  xhr.addEventListener('error', evt => {
    console.error(evt);
  });

  xhr.open('put', baseURL + inputID.value, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() { // 状態が変化すると関数が呼び出されます。
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // リクエストの終了。ここの処理を実行します。
      }
  }
  xhr.send(body);
});

btnDELETE.addEventListener('click', evt => {

  const resultEle = document.querySelector('#result');
  const resultURLEle = document.querySelector('#resultURL');
  const xhr = new XMLHttpRequest();
  console.log("resultEle",resultEle.textContent);
  

  xhr.addEventListener('load', evt => {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.response);
      console.log("Result",result);
      if (resultEle.textContent === "") {
        resultEle.append(result);
      } else {
        resultEle.textContent = result;
        const imageEl = document.querySelector('.image');
        imageEl.src = "";
      }
    }
  });

  xhr.addEventListener('error', evt => {
    console.error(evt);
  });

  xhr.open('delete', baseURL + inputID.value, true);
  xhr.send();
});

