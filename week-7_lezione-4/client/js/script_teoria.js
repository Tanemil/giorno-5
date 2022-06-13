/* function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall(); */


  /* async function test() {
      console.log('Inizio');
      let txt = await awaitFunc();
      console.log(txt);
      console.log('Fine');
  }

  function awaitFunc() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Ciao a tutti');
        }, 5000);
      });
  }

  test(); */


  fetch('http://localhost:3000/api/users/').then(response => response.json()).then(json => console.log(json));

/*   fetch('http://localhost:3000/api/users/1').then(response => response.json()).then(json => console.log(json));

  fetch('http://localhost:3000/api/users/', {
    method: 'POST',
    body: JSON.stringify(obj)
  }).then(response => response.json()).then(json => console.log(json));

  fetch('http://localhost:3000/api/users/1', {
    method: 'PUT',
    body: JSON.stringify(obj)
  }).then(response => response.json()).then(json => console.log(json));

  fetch('http://localhost:3000/api/users/1', {method: 'DELETE'}).then(response => response.json()).then(json => console.log(json));
 */