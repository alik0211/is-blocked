function isBlocked(url) {
  return new Promise(function(resolve, reject) {
    fetch(url, {
      mode: 'no-cors'
    })
      .then(reject)
      .catch(resolve);
  });
}

export default isBlocked;
