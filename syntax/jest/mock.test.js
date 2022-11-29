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

describe('Fetching from Github and insert into database', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
