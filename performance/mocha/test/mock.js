
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


describe('Fetching from Github and insert into database 1', () => {
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
  

describe('Fetching from Github and insert into database 2', () => {
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
  

describe('Fetching from Github and insert into database 3', () => {
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
  

describe('Fetching from Github and insert into database 4', () => {
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
  

describe('Fetching from Github and insert into database 5', () => {
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
  

describe('Fetching from Github and insert into database 6', () => {
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
  

describe('Fetching from Github and insert into database 7', () => {
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
  

describe('Fetching from Github and insert into database 8', () => {
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
  

describe('Fetching from Github and insert into database 9', () => {
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
  

describe('Fetching from Github and insert into database 10', () => {
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
  

describe('Fetching from Github and insert into database 11', () => {
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
  

describe('Fetching from Github and insert into database 12', () => {
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
  

describe('Fetching from Github and insert into database 13', () => {
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
  

describe('Fetching from Github and insert into database 14', () => {
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
  

describe('Fetching from Github and insert into database 15', () => {
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
  

describe('Fetching from Github and insert into database 16', () => {
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
  

describe('Fetching from Github and insert into database 17', () => {
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
  

describe('Fetching from Github and insert into database 18', () => {
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
  

describe('Fetching from Github and insert into database 19', () => {
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
  

describe('Fetching from Github and insert into database 20', () => {
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
  

describe('Fetching from Github and insert into database 21', () => {
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
  

describe('Fetching from Github and insert into database 22', () => {
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
  

describe('Fetching from Github and insert into database 23', () => {
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
  

describe('Fetching from Github and insert into database 24', () => {
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
  

describe('Fetching from Github and insert into database 25', () => {
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
  

describe('Fetching from Github and insert into database 26', () => {
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
  

describe('Fetching from Github and insert into database 27', () => {
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
  

describe('Fetching from Github and insert into database 28', () => {
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
  

describe('Fetching from Github and insert into database 29', () => {
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
  

describe('Fetching from Github and insert into database 30', () => {
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
  

describe('Fetching from Github and insert into database 31', () => {
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
  

describe('Fetching from Github and insert into database 32', () => {
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
  

describe('Fetching from Github and insert into database 33', () => {
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
  

describe('Fetching from Github and insert into database 34', () => {
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
  

describe('Fetching from Github and insert into database 35', () => {
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
  

describe('Fetching from Github and insert into database 36', () => {
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
  

describe('Fetching from Github and insert into database 37', () => {
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
  

describe('Fetching from Github and insert into database 38', () => {
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
  

describe('Fetching from Github and insert into database 39', () => {
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
  

describe('Fetching from Github and insert into database 40', () => {
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
  

describe('Fetching from Github and insert into database 41', () => {
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
  

describe('Fetching from Github and insert into database 42', () => {
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
  

describe('Fetching from Github and insert into database 43', () => {
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
  

describe('Fetching from Github and insert into database 44', () => {
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
  

describe('Fetching from Github and insert into database 45', () => {
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
  

describe('Fetching from Github and insert into database 46', () => {
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
  

describe('Fetching from Github and insert into database 47', () => {
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
  

describe('Fetching from Github and insert into database 48', () => {
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
  

describe('Fetching from Github and insert into database 49', () => {
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
  

describe('Fetching from Github and insert into database 50', () => {
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
  

describe('Fetching from Github and insert into database 51', () => {
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
  

describe('Fetching from Github and insert into database 52', () => {
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
  

describe('Fetching from Github and insert into database 53', () => {
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
  

describe('Fetching from Github and insert into database 54', () => {
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
  

describe('Fetching from Github and insert into database 55', () => {
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
  

describe('Fetching from Github and insert into database 56', () => {
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
  

describe('Fetching from Github and insert into database 57', () => {
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
  

describe('Fetching from Github and insert into database 58', () => {
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
  

describe('Fetching from Github and insert into database 59', () => {
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
  

describe('Fetching from Github and insert into database 60', () => {
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
  

describe('Fetching from Github and insert into database 61', () => {
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
  

describe('Fetching from Github and insert into database 62', () => {
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
  

describe('Fetching from Github and insert into database 63', () => {
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
  

describe('Fetching from Github and insert into database 64', () => {
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
  

describe('Fetching from Github and insert into database 65', () => {
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
  

describe('Fetching from Github and insert into database 66', () => {
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
  

describe('Fetching from Github and insert into database 67', () => {
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
  

describe('Fetching from Github and insert into database 68', () => {
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
  

describe('Fetching from Github and insert into database 69', () => {
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
  

describe('Fetching from Github and insert into database 70', () => {
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
  

describe('Fetching from Github and insert into database 71', () => {
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
  

describe('Fetching from Github and insert into database 72', () => {
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
  

describe('Fetching from Github and insert into database 73', () => {
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
  

describe('Fetching from Github and insert into database 74', () => {
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
  

describe('Fetching from Github and insert into database 75', () => {
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
  

describe('Fetching from Github and insert into database 76', () => {
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
  

describe('Fetching from Github and insert into database 77', () => {
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
  

describe('Fetching from Github and insert into database 78', () => {
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
  

describe('Fetching from Github and insert into database 79', () => {
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
  

describe('Fetching from Github and insert into database 80', () => {
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
  

describe('Fetching from Github and insert into database 81', () => {
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
  

describe('Fetching from Github and insert into database 82', () => {
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
  

describe('Fetching from Github and insert into database 83', () => {
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
  

describe('Fetching from Github and insert into database 84', () => {
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
  

describe('Fetching from Github and insert into database 85', () => {
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
  

describe('Fetching from Github and insert into database 86', () => {
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
  

describe('Fetching from Github and insert into database 87', () => {
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
  

describe('Fetching from Github and insert into database 88', () => {
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
  

describe('Fetching from Github and insert into database 89', () => {
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
  

describe('Fetching from Github and insert into database 90', () => {
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
  

describe('Fetching from Github and insert into database 91', () => {
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
  

describe('Fetching from Github and insert into database 92', () => {
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
  

describe('Fetching from Github and insert into database 93', () => {
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
  

describe('Fetching from Github and insert into database 94', () => {
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
  

describe('Fetching from Github and insert into database 95', () => {
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
  

describe('Fetching from Github and insert into database 96', () => {
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
  

describe('Fetching from Github and insert into database 97', () => {
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
  

describe('Fetching from Github and insert into database 98', () => {
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
  

describe('Fetching from Github and insert into database 99', () => {
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
  

describe('Fetching from Github and insert into database 100', () => {
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
  

describe('Fetching from Github and insert into database 101', () => {
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
  

describe('Fetching from Github and insert into database 102', () => {
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
  

describe('Fetching from Github and insert into database 103', () => {
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
  

describe('Fetching from Github and insert into database 104', () => {
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
  

describe('Fetching from Github and insert into database 105', () => {
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
  

describe('Fetching from Github and insert into database 106', () => {
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
  

describe('Fetching from Github and insert into database 107', () => {
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
  

describe('Fetching from Github and insert into database 108', () => {
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
  

describe('Fetching from Github and insert into database 109', () => {
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
  

describe('Fetching from Github and insert into database 110', () => {
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
  

describe('Fetching from Github and insert into database 111', () => {
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
  

describe('Fetching from Github and insert into database 112', () => {
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
  

describe('Fetching from Github and insert into database 113', () => {
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
  

describe('Fetching from Github and insert into database 114', () => {
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
  

describe('Fetching from Github and insert into database 115', () => {
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
  

describe('Fetching from Github and insert into database 116', () => {
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
  

describe('Fetching from Github and insert into database 117', () => {
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
  

describe('Fetching from Github and insert into database 118', () => {
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
  

describe('Fetching from Github and insert into database 119', () => {
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
  

describe('Fetching from Github and insert into database 120', () => {
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
  

describe('Fetching from Github and insert into database 121', () => {
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
  

describe('Fetching from Github and insert into database 122', () => {
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
  

describe('Fetching from Github and insert into database 123', () => {
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
  

describe('Fetching from Github and insert into database 124', () => {
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
  

describe('Fetching from Github and insert into database 125', () => {
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
  

describe('Fetching from Github and insert into database 126', () => {
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
  

describe('Fetching from Github and insert into database 127', () => {
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
  

describe('Fetching from Github and insert into database 128', () => {
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
  

describe('Fetching from Github and insert into database 129', () => {
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
  

describe('Fetching from Github and insert into database 130', () => {
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
  

describe('Fetching from Github and insert into database 131', () => {
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
  

describe('Fetching from Github and insert into database 132', () => {
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
  

describe('Fetching from Github and insert into database 133', () => {
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
  

describe('Fetching from Github and insert into database 134', () => {
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
  

describe('Fetching from Github and insert into database 135', () => {
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
  

describe('Fetching from Github and insert into database 136', () => {
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
  

describe('Fetching from Github and insert into database 137', () => {
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
  

describe('Fetching from Github and insert into database 138', () => {
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
  

describe('Fetching from Github and insert into database 139', () => {
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
  

describe('Fetching from Github and insert into database 140', () => {
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
  

describe('Fetching from Github and insert into database 141', () => {
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
  

describe('Fetching from Github and insert into database 142', () => {
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
  

describe('Fetching from Github and insert into database 143', () => {
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
  

describe('Fetching from Github and insert into database 144', () => {
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
  

describe('Fetching from Github and insert into database 145', () => {
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
  

describe('Fetching from Github and insert into database 146', () => {
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
  

describe('Fetching from Github and insert into database 147', () => {
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
  

describe('Fetching from Github and insert into database 148', () => {
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
  

describe('Fetching from Github and insert into database 149', () => {
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
  

describe('Fetching from Github and insert into database 150', () => {
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
  

describe('Fetching from Github and insert into database 151', () => {
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
  

describe('Fetching from Github and insert into database 152', () => {
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
  

describe('Fetching from Github and insert into database 153', () => {
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
  

describe('Fetching from Github and insert into database 154', () => {
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
  

describe('Fetching from Github and insert into database 155', () => {
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
  

describe('Fetching from Github and insert into database 156', () => {
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
  

describe('Fetching from Github and insert into database 157', () => {
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
  

describe('Fetching from Github and insert into database 158', () => {
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
  

describe('Fetching from Github and insert into database 159', () => {
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
  

describe('Fetching from Github and insert into database 160', () => {
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
  

describe('Fetching from Github and insert into database 161', () => {
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
  

describe('Fetching from Github and insert into database 162', () => {
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
  

describe('Fetching from Github and insert into database 163', () => {
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
  

describe('Fetching from Github and insert into database 164', () => {
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
  

describe('Fetching from Github and insert into database 165', () => {
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
  

describe('Fetching from Github and insert into database 166', () => {
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
  

describe('Fetching from Github and insert into database 167', () => {
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
  

describe('Fetching from Github and insert into database 168', () => {
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
  

describe('Fetching from Github and insert into database 169', () => {
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
  

describe('Fetching from Github and insert into database 170', () => {
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
  

describe('Fetching from Github and insert into database 171', () => {
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
  

describe('Fetching from Github and insert into database 172', () => {
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
  

describe('Fetching from Github and insert into database 173', () => {
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
  

describe('Fetching from Github and insert into database 174', () => {
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
  

describe('Fetching from Github and insert into database 175', () => {
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
  

describe('Fetching from Github and insert into database 176', () => {
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
  

describe('Fetching from Github and insert into database 177', () => {
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
  

describe('Fetching from Github and insert into database 178', () => {
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
  

describe('Fetching from Github and insert into database 179', () => {
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
  

describe('Fetching from Github and insert into database 180', () => {
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
  

describe('Fetching from Github and insert into database 181', () => {
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
  

describe('Fetching from Github and insert into database 182', () => {
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
  

describe('Fetching from Github and insert into database 183', () => {
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
  

describe('Fetching from Github and insert into database 184', () => {
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
  

describe('Fetching from Github and insert into database 185', () => {
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
  

describe('Fetching from Github and insert into database 186', () => {
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
  

describe('Fetching from Github and insert into database 187', () => {
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
  

describe('Fetching from Github and insert into database 188', () => {
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
  

describe('Fetching from Github and insert into database 189', () => {
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
  

describe('Fetching from Github and insert into database 190', () => {
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
  

describe('Fetching from Github and insert into database 191', () => {
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
  

describe('Fetching from Github and insert into database 192', () => {
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
  

describe('Fetching from Github and insert into database 193', () => {
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
  

describe('Fetching from Github and insert into database 194', () => {
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
  

describe('Fetching from Github and insert into database 195', () => {
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
  

describe('Fetching from Github and insert into database 196', () => {
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
  

describe('Fetching from Github and insert into database 197', () => {
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
  

describe('Fetching from Github and insert into database 198', () => {
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
  

describe('Fetching from Github and insert into database 199', () => {
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
  

describe('Fetching from Github and insert into database 200', () => {
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
  

describe('Fetching from Github and insert into database 201', () => {
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
  

describe('Fetching from Github and insert into database 202', () => {
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
  

describe('Fetching from Github and insert into database 203', () => {
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
  

describe('Fetching from Github and insert into database 204', () => {
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
  

describe('Fetching from Github and insert into database 205', () => {
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
  

describe('Fetching from Github and insert into database 206', () => {
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
  

describe('Fetching from Github and insert into database 207', () => {
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
  

describe('Fetching from Github and insert into database 208', () => {
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
  

describe('Fetching from Github and insert into database 209', () => {
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
  

describe('Fetching from Github and insert into database 210', () => {
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
  

describe('Fetching from Github and insert into database 211', () => {
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
  

describe('Fetching from Github and insert into database 212', () => {
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
  

describe('Fetching from Github and insert into database 213', () => {
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
  

describe('Fetching from Github and insert into database 214', () => {
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
  

describe('Fetching from Github and insert into database 215', () => {
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
  

describe('Fetching from Github and insert into database 216', () => {
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
  

describe('Fetching from Github and insert into database 217', () => {
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
  

describe('Fetching from Github and insert into database 218', () => {
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
  

describe('Fetching from Github and insert into database 219', () => {
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
  

describe('Fetching from Github and insert into database 220', () => {
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
  

describe('Fetching from Github and insert into database 221', () => {
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
  

describe('Fetching from Github and insert into database 222', () => {
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
  

describe('Fetching from Github and insert into database 223', () => {
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
  

describe('Fetching from Github and insert into database 224', () => {
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
  

describe('Fetching from Github and insert into database 225', () => {
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
  

describe('Fetching from Github and insert into database 226', () => {
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
  

describe('Fetching from Github and insert into database 227', () => {
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
  

describe('Fetching from Github and insert into database 228', () => {
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
  

describe('Fetching from Github and insert into database 229', () => {
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
  

describe('Fetching from Github and insert into database 230', () => {
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
  

describe('Fetching from Github and insert into database 231', () => {
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
  

describe('Fetching from Github and insert into database 232', () => {
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
  

describe('Fetching from Github and insert into database 233', () => {
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
  

describe('Fetching from Github and insert into database 234', () => {
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
  

describe('Fetching from Github and insert into database 235', () => {
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
  

describe('Fetching from Github and insert into database 236', () => {
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
  

describe('Fetching from Github and insert into database 237', () => {
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
  

describe('Fetching from Github and insert into database 238', () => {
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
  

describe('Fetching from Github and insert into database 239', () => {
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
  

describe('Fetching from Github and insert into database 240', () => {
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
  

describe('Fetching from Github and insert into database 241', () => {
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
  

describe('Fetching from Github and insert into database 242', () => {
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
  

describe('Fetching from Github and insert into database 243', () => {
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
  

describe('Fetching from Github and insert into database 244', () => {
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
  

describe('Fetching from Github and insert into database 245', () => {
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
  

describe('Fetching from Github and insert into database 246', () => {
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
  

describe('Fetching from Github and insert into database 247', () => {
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
  

describe('Fetching from Github and insert into database 248', () => {
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
  

describe('Fetching from Github and insert into database 249', () => {
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
  

describe('Fetching from Github and insert into database 250', () => {
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
  

describe('Fetching from Github and insert into database 251', () => {
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
  

describe('Fetching from Github and insert into database 252', () => {
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
  

describe('Fetching from Github and insert into database 253', () => {
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
  

describe('Fetching from Github and insert into database 254', () => {
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
  

describe('Fetching from Github and insert into database 255', () => {
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
  

describe('Fetching from Github and insert into database 256', () => {
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
  

describe('Fetching from Github and insert into database 257', () => {
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
  

describe('Fetching from Github and insert into database 258', () => {
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
  

describe('Fetching from Github and insert into database 259', () => {
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
  

describe('Fetching from Github and insert into database 260', () => {
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
  

describe('Fetching from Github and insert into database 261', () => {
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
  

describe('Fetching from Github and insert into database 262', () => {
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
  

describe('Fetching from Github and insert into database 263', () => {
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
  

describe('Fetching from Github and insert into database 264', () => {
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
  

describe('Fetching from Github and insert into database 265', () => {
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
  

describe('Fetching from Github and insert into database 266', () => {
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
  

describe('Fetching from Github and insert into database 267', () => {
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
  

describe('Fetching from Github and insert into database 268', () => {
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
  

describe('Fetching from Github and insert into database 269', () => {
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
  

describe('Fetching from Github and insert into database 270', () => {
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
  

describe('Fetching from Github and insert into database 271', () => {
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
  

describe('Fetching from Github and insert into database 272', () => {
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
  

describe('Fetching from Github and insert into database 273', () => {
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
  

describe('Fetching from Github and insert into database 274', () => {
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
  

describe('Fetching from Github and insert into database 275', () => {
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
  

describe('Fetching from Github and insert into database 276', () => {
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
  

describe('Fetching from Github and insert into database 277', () => {
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
  

describe('Fetching from Github and insert into database 278', () => {
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
  

describe('Fetching from Github and insert into database 279', () => {
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
  

describe('Fetching from Github and insert into database 280', () => {
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
  

describe('Fetching from Github and insert into database 281', () => {
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
  

describe('Fetching from Github and insert into database 282', () => {
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
  

describe('Fetching from Github and insert into database 283', () => {
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
  

describe('Fetching from Github and insert into database 284', () => {
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
  

describe('Fetching from Github and insert into database 285', () => {
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
  

describe('Fetching from Github and insert into database 286', () => {
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
  

describe('Fetching from Github and insert into database 287', () => {
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
  

describe('Fetching from Github and insert into database 288', () => {
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
  

describe('Fetching from Github and insert into database 289', () => {
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
  

describe('Fetching from Github and insert into database 290', () => {
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
  

describe('Fetching from Github and insert into database 291', () => {
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
  

describe('Fetching from Github and insert into database 292', () => {
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
  

describe('Fetching from Github and insert into database 293', () => {
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
  

describe('Fetching from Github and insert into database 294', () => {
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
  

describe('Fetching from Github and insert into database 295', () => {
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
  

describe('Fetching from Github and insert into database 296', () => {
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
  

describe('Fetching from Github and insert into database 297', () => {
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
  

describe('Fetching from Github and insert into database 298', () => {
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
  

describe('Fetching from Github and insert into database 299', () => {
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
  

describe('Fetching from Github and insert into database 300', () => {
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
  

describe('Fetching from Github and insert into database 301', () => {
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
  

describe('Fetching from Github and insert into database 302', () => {
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
  

describe('Fetching from Github and insert into database 303', () => {
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
  

describe('Fetching from Github and insert into database 304', () => {
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
  

describe('Fetching from Github and insert into database 305', () => {
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
  

describe('Fetching from Github and insert into database 306', () => {
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
  

describe('Fetching from Github and insert into database 307', () => {
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
  

describe('Fetching from Github and insert into database 308', () => {
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
  

describe('Fetching from Github and insert into database 309', () => {
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
  

describe('Fetching from Github and insert into database 310', () => {
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
  

describe('Fetching from Github and insert into database 311', () => {
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
  

describe('Fetching from Github and insert into database 312', () => {
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
  

describe('Fetching from Github and insert into database 313', () => {
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
  

describe('Fetching from Github and insert into database 314', () => {
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
  

describe('Fetching from Github and insert into database 315', () => {
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
  

describe('Fetching from Github and insert into database 316', () => {
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
  

describe('Fetching from Github and insert into database 317', () => {
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
  

describe('Fetching from Github and insert into database 318', () => {
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
  

describe('Fetching from Github and insert into database 319', () => {
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
  

describe('Fetching from Github and insert into database 320', () => {
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
  

describe('Fetching from Github and insert into database 321', () => {
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
  

describe('Fetching from Github and insert into database 322', () => {
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
  

describe('Fetching from Github and insert into database 323', () => {
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
  

describe('Fetching from Github and insert into database 324', () => {
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
  

describe('Fetching from Github and insert into database 325', () => {
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
  

describe('Fetching from Github and insert into database 326', () => {
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
  

describe('Fetching from Github and insert into database 327', () => {
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
  

describe('Fetching from Github and insert into database 328', () => {
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
  

describe('Fetching from Github and insert into database 329', () => {
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
  

describe('Fetching from Github and insert into database 330', () => {
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
  

describe('Fetching from Github and insert into database 331', () => {
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
  

describe('Fetching from Github and insert into database 332', () => {
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
  

describe('Fetching from Github and insert into database 333', () => {
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
  

describe('Fetching from Github and insert into database 334', () => {
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
  

describe('Fetching from Github and insert into database 335', () => {
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
  

describe('Fetching from Github and insert into database 336', () => {
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
  

describe('Fetching from Github and insert into database 337', () => {
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
  

describe('Fetching from Github and insert into database 338', () => {
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
  

describe('Fetching from Github and insert into database 339', () => {
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
  

describe('Fetching from Github and insert into database 340', () => {
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
  

describe('Fetching from Github and insert into database 341', () => {
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
  

describe('Fetching from Github and insert into database 342', () => {
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
  

describe('Fetching from Github and insert into database 343', () => {
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
  

describe('Fetching from Github and insert into database 344', () => {
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
  

describe('Fetching from Github and insert into database 345', () => {
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
  

describe('Fetching from Github and insert into database 346', () => {
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
  

describe('Fetching from Github and insert into database 347', () => {
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
  

describe('Fetching from Github and insert into database 348', () => {
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
  

describe('Fetching from Github and insert into database 349', () => {
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
  

describe('Fetching from Github and insert into database 350', () => {
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
  

describe('Fetching from Github and insert into database 351', () => {
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
  

describe('Fetching from Github and insert into database 352', () => {
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
  

describe('Fetching from Github and insert into database 353', () => {
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
  

describe('Fetching from Github and insert into database 354', () => {
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
  

describe('Fetching from Github and insert into database 355', () => {
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
  

describe('Fetching from Github and insert into database 356', () => {
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
  

describe('Fetching from Github and insert into database 357', () => {
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
  

describe('Fetching from Github and insert into database 358', () => {
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
  

describe('Fetching from Github and insert into database 359', () => {
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
  

describe('Fetching from Github and insert into database 360', () => {
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
  

describe('Fetching from Github and insert into database 361', () => {
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
  

describe('Fetching from Github and insert into database 362', () => {
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
  

describe('Fetching from Github and insert into database 363', () => {
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
  

describe('Fetching from Github and insert into database 364', () => {
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
  

describe('Fetching from Github and insert into database 365', () => {
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
  

describe('Fetching from Github and insert into database 366', () => {
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
  

describe('Fetching from Github and insert into database 367', () => {
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
  

describe('Fetching from Github and insert into database 368', () => {
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
  

describe('Fetching from Github and insert into database 369', () => {
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
  

describe('Fetching from Github and insert into database 370', () => {
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
  

describe('Fetching from Github and insert into database 371', () => {
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
  

describe('Fetching from Github and insert into database 372', () => {
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
  

describe('Fetching from Github and insert into database 373', () => {
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
  

describe('Fetching from Github and insert into database 374', () => {
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
  

describe('Fetching from Github and insert into database 375', () => {
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
  

describe('Fetching from Github and insert into database 376', () => {
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
  

describe('Fetching from Github and insert into database 377', () => {
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
  

describe('Fetching from Github and insert into database 378', () => {
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
  

describe('Fetching from Github and insert into database 379', () => {
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
  

describe('Fetching from Github and insert into database 380', () => {
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
  

describe('Fetching from Github and insert into database 381', () => {
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
  

describe('Fetching from Github and insert into database 382', () => {
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
  

describe('Fetching from Github and insert into database 383', () => {
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
  

describe('Fetching from Github and insert into database 384', () => {
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
  

describe('Fetching from Github and insert into database 385', () => {
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
  

describe('Fetching from Github and insert into database 386', () => {
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
  

describe('Fetching from Github and insert into database 387', () => {
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
  

describe('Fetching from Github and insert into database 388', () => {
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
  

describe('Fetching from Github and insert into database 389', () => {
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
  

describe('Fetching from Github and insert into database 390', () => {
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
  

describe('Fetching from Github and insert into database 391', () => {
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
  

describe('Fetching from Github and insert into database 392', () => {
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
  

describe('Fetching from Github and insert into database 393', () => {
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
  

describe('Fetching from Github and insert into database 394', () => {
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
  

describe('Fetching from Github and insert into database 395', () => {
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
  

describe('Fetching from Github and insert into database 396', () => {
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
  

describe('Fetching from Github and insert into database 397', () => {
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
  

describe('Fetching from Github and insert into database 398', () => {
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
  

describe('Fetching from Github and insert into database 399', () => {
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
  

describe('Fetching from Github and insert into database 400', () => {
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
  

describe('Fetching from Github and insert into database 401', () => {
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
  

describe('Fetching from Github and insert into database 402', () => {
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
  

describe('Fetching from Github and insert into database 403', () => {
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
  

describe('Fetching from Github and insert into database 404', () => {
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
  

describe('Fetching from Github and insert into database 405', () => {
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
  

describe('Fetching from Github and insert into database 406', () => {
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
  

describe('Fetching from Github and insert into database 407', () => {
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
  

describe('Fetching from Github and insert into database 408', () => {
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
  

describe('Fetching from Github and insert into database 409', () => {
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
  

describe('Fetching from Github and insert into database 410', () => {
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
  

describe('Fetching from Github and insert into database 411', () => {
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
  

describe('Fetching from Github and insert into database 412', () => {
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
  

describe('Fetching from Github and insert into database 413', () => {
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
  

describe('Fetching from Github and insert into database 414', () => {
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
  

describe('Fetching from Github and insert into database 415', () => {
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
  

describe('Fetching from Github and insert into database 416', () => {
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
  

describe('Fetching from Github and insert into database 417', () => {
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
  

describe('Fetching from Github and insert into database 418', () => {
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
  

describe('Fetching from Github and insert into database 419', () => {
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
  

describe('Fetching from Github and insert into database 420', () => {
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
  

describe('Fetching from Github and insert into database 421', () => {
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
  

describe('Fetching from Github and insert into database 422', () => {
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
  

describe('Fetching from Github and insert into database 423', () => {
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
  

describe('Fetching from Github and insert into database 424', () => {
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
  

describe('Fetching from Github and insert into database 425', () => {
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
  

describe('Fetching from Github and insert into database 426', () => {
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
  

describe('Fetching from Github and insert into database 427', () => {
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
  

describe('Fetching from Github and insert into database 428', () => {
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
  

describe('Fetching from Github and insert into database 429', () => {
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
  

describe('Fetching from Github and insert into database 430', () => {
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
  

describe('Fetching from Github and insert into database 431', () => {
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
  

describe('Fetching from Github and insert into database 432', () => {
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
  

describe('Fetching from Github and insert into database 433', () => {
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
  

describe('Fetching from Github and insert into database 434', () => {
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
  

describe('Fetching from Github and insert into database 435', () => {
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
  

describe('Fetching from Github and insert into database 436', () => {
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
  

describe('Fetching from Github and insert into database 437', () => {
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
  

describe('Fetching from Github and insert into database 438', () => {
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
  

describe('Fetching from Github and insert into database 439', () => {
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
  

describe('Fetching from Github and insert into database 440', () => {
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
  

describe('Fetching from Github and insert into database 441', () => {
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
  

describe('Fetching from Github and insert into database 442', () => {
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
  

describe('Fetching from Github and insert into database 443', () => {
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
  

describe('Fetching from Github and insert into database 444', () => {
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
  

describe('Fetching from Github and insert into database 445', () => {
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
  

describe('Fetching from Github and insert into database 446', () => {
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
  

describe('Fetching from Github and insert into database 447', () => {
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
  

describe('Fetching from Github and insert into database 448', () => {
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
  

describe('Fetching from Github and insert into database 449', () => {
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
  

describe('Fetching from Github and insert into database 450', () => {
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
  

describe('Fetching from Github and insert into database 451', () => {
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
  

describe('Fetching from Github and insert into database 452', () => {
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
  

describe('Fetching from Github and insert into database 453', () => {
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
  

describe('Fetching from Github and insert into database 454', () => {
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
  

describe('Fetching from Github and insert into database 455', () => {
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
  

describe('Fetching from Github and insert into database 456', () => {
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
  

describe('Fetching from Github and insert into database 457', () => {
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
  

describe('Fetching from Github and insert into database 458', () => {
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
  

describe('Fetching from Github and insert into database 459', () => {
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
  

describe('Fetching from Github and insert into database 460', () => {
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
  

describe('Fetching from Github and insert into database 461', () => {
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
  

describe('Fetching from Github and insert into database 462', () => {
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
  

describe('Fetching from Github and insert into database 463', () => {
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
  

describe('Fetching from Github and insert into database 464', () => {
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
  

describe('Fetching from Github and insert into database 465', () => {
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
  

describe('Fetching from Github and insert into database 466', () => {
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
  

describe('Fetching from Github and insert into database 467', () => {
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
  

describe('Fetching from Github and insert into database 468', () => {
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
  

describe('Fetching from Github and insert into database 469', () => {
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
  

describe('Fetching from Github and insert into database 470', () => {
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
  

describe('Fetching from Github and insert into database 471', () => {
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
  

describe('Fetching from Github and insert into database 472', () => {
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
  

describe('Fetching from Github and insert into database 473', () => {
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
  

describe('Fetching from Github and insert into database 474', () => {
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
  

describe('Fetching from Github and insert into database 475', () => {
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
  

describe('Fetching from Github and insert into database 476', () => {
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
  

describe('Fetching from Github and insert into database 477', () => {
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
  

describe('Fetching from Github and insert into database 478', () => {
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
  

describe('Fetching from Github and insert into database 479', () => {
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
  

describe('Fetching from Github and insert into database 480', () => {
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
  

describe('Fetching from Github and insert into database 481', () => {
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
  

describe('Fetching from Github and insert into database 482', () => {
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
  

describe('Fetching from Github and insert into database 483', () => {
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
  

describe('Fetching from Github and insert into database 484', () => {
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
  

describe('Fetching from Github and insert into database 485', () => {
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
  

describe('Fetching from Github and insert into database 486', () => {
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
  

describe('Fetching from Github and insert into database 487', () => {
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
  

describe('Fetching from Github and insert into database 488', () => {
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
  

describe('Fetching from Github and insert into database 489', () => {
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
  

describe('Fetching from Github and insert into database 490', () => {
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
  

describe('Fetching from Github and insert into database 491', () => {
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
  

describe('Fetching from Github and insert into database 492', () => {
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
  

describe('Fetching from Github and insert into database 493', () => {
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
  

describe('Fetching from Github and insert into database 494', () => {
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
  

describe('Fetching from Github and insert into database 495', () => {
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
  

describe('Fetching from Github and insert into database 496', () => {
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
  

describe('Fetching from Github and insert into database 497', () => {
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
  

describe('Fetching from Github and insert into database 498', () => {
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
  

describe('Fetching from Github and insert into database 499', () => {
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
  

describe('Fetching from Github and insert into database 500', () => {
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
  
