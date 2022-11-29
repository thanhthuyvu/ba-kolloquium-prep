var expect = require('chai').expect
var sinon = require('sinon')

class GithubAPI {
  countStars(name) {
    console.log(name)
  }
}

class GithubRepo {
  store(name, stars) {
    console.log(name, stars)
  }
}

class FetchAndStore {
  constructor(githubAPI, githubRepo) {
    this.githubAPI = githubAPI
    this.githubRepo = githubRepo
  }

  fetchAndStore(name) {
    let stars = this.githubAPI.countStars(name)
    this.githubRepo.store(name, stars)
  }
}

describe('Fetching from Github and insert into database', () => {
  let githubAPI
  let githubRepo

  beforeEach(() => {
    sinon.restore()
    githubAPI = new GithubAPI()
    githubRepo = new GithubRepo()
  })

  it('works properly',() => {
    sinon.stub(githubAPI, 'countStars').withArgs("mocha").returns(10)
    const repoStub = sinon.stub(githubRepo, 'store').withArgs("mocha", 10)

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(repoStub.calledOnce).to.be.true
  })
})
