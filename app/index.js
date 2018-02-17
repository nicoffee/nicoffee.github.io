const fetchData = (url, headers) =>
  fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      ...headers
    },
    method: 'GET'
  }).then(res => res.json());

const render = element => console.log(element);

fetchData('https://api.github.com/users/nicoffee/repos')
  .then(repos => {
    console.log('repos', repos);
    repos.forEach(repo => {
      console.log('repo', repo);
      fetchData(`https://api.github.com/repos/nicoffee/${repo.name}/topics`, {
        Accept: 'application/vnd.github.mercy-preview+json'
      }).then(tags => {
        console.log('tags', tags);
      });
    });
  })
  .catch(err => render(err));
