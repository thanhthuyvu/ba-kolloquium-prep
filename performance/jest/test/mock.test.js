
var GithubAPI = require('./github_api')
var GithubRepo = require('./github_repo')

const mockCountStars = jest.fn(() => 10)
jest.mock('./github_api', () => {
  return jest.fn().mockImplementation(() => {
    return { countStars: mockCountStars }
  })
})

const mockStore = jest.fn()
jest.mock('./github_repo', () => {
  return jest.fn().mockImplementation(() => {
    return { store: mockStore }
  })
})

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
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 2', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 3', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 4', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 5', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 6', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 7', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 8', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 9', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 10', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 11', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 12', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 13', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 14', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 15', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 16', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 17', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 18', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 19', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 20', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 21', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 22', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 23', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 24', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 25', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 26', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 27', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 28', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 29', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 30', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 31', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 32', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 33', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 34', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 35', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 36', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 37', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 38', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 39', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 40', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 41', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 42', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 43', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 44', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 45', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 46', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 47', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 48', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 49', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 50', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 51', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 52', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 53', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 54', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 55', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 56', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 57', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 58', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 59', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 60', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 61', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 62', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 63', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 64', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 65', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 66', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 67', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 68', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 69', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 70', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 71', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 72', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 73', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 74', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 75', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 76', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 77', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 78', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 79', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 80', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 81', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 82', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 83', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 84', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 85', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 86', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 87', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 88', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 89', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 90', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 91', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 92', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 93', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 94', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 95', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 96', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 97', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 98', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 99', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 100', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 101', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 102', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 103', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 104', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 105', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 106', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 107', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 108', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 109', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 110', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 111', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 112', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 113', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 114', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 115', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 116', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 117', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 118', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 119', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 120', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 121', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 122', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 123', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 124', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 125', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 126', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 127', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 128', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 129', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 130', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 131', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 132', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 133', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 134', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 135', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 136', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 137', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 138', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 139', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 140', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 141', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 142', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 143', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 144', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 145', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 146', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 147', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 148', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 149', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 150', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 151', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 152', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 153', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 154', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 155', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 156', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 157', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 158', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 159', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 160', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 161', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 162', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 163', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 164', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 165', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 166', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 167', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 168', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 169', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 170', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 171', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 172', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 173', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 174', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 175', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 176', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 177', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 178', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 179', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 180', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 181', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 182', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 183', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 184', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 185', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 186', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 187', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 188', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 189', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 190', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 191', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 192', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 193', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 194', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 195', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 196', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 197', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 198', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 199', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 200', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 201', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 202', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 203', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 204', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 205', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 206', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 207', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 208', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 209', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 210', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 211', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 212', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 213', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 214', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 215', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 216', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 217', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 218', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 219', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 220', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 221', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 222', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 223', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 224', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 225', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 226', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 227', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 228', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 229', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 230', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 231', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 232', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 233', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 234', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 235', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 236', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 237', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 238', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 239', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 240', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 241', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 242', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 243', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 244', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 245', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 246', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 247', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 248', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 249', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 250', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 251', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 252', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 253', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 254', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 255', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 256', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 257', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 258', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 259', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 260', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 261', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 262', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 263', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 264', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 265', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 266', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 267', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 268', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 269', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 270', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 271', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 272', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 273', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 274', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 275', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 276', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 277', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 278', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 279', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 280', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 281', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 282', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 283', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 284', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 285', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 286', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 287', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 288', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 289', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 290', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 291', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 292', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 293', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 294', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 295', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 296', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 297', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 298', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 299', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 300', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 301', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 302', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 303', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 304', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 305', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 306', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 307', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 308', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 309', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 310', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 311', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 312', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 313', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 314', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 315', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 316', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 317', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 318', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 319', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 320', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 321', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 322', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 323', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 324', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 325', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 326', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 327', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 328', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 329', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 330', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 331', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 332', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 333', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 334', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 335', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 336', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 337', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 338', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 339', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 340', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 341', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 342', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 343', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 344', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 345', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 346', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 347', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 348', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 349', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 350', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 351', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 352', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 353', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 354', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 355', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 356', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 357', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 358', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 359', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 360', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 361', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 362', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 363', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 364', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 365', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 366', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 367', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 368', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 369', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 370', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 371', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 372', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 373', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 374', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 375', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 376', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 377', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 378', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 379', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 380', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 381', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 382', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 383', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 384', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 385', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 386', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 387', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 388', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 389', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 390', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 391', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 392', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 393', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 394', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 395', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 396', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 397', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 398', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 399', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 400', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 401', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 402', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 403', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 404', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 405', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 406', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 407', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 408', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 409', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 410', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 411', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 412', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 413', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 414', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 415', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 416', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 417', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 418', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 419', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 420', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 421', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 422', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 423', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 424', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 425', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 426', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 427', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 428', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 429', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 430', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 431', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 432', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 433', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 434', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 435', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 436', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 437', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 438', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 439', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 440', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 441', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 442', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 443', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 444', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 445', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 446', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 447', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 448', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 449', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 450', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 451', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 452', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 453', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 454', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 455', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 456', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 457', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 458', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 459', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 460', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 461', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 462', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 463', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 464', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 465', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 466', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 467', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 468', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 469', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 470', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 471', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 472', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 473', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 474', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 475', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 476', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 477', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 478', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 479', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 480', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 481', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 482', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 483', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 484', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 485', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 486', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 487', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 488', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 489', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 490', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 491', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 492', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 493', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 494', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 495', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 496', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 497', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 498', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 499', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  

describe('Fetching from Github and insert into database 500', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  
