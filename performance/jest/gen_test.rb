#!/usr/bin/env ruby

f = File.open('test/sync_nested_suites_no_hooks.test.js', 'w')
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    describe('context #{i} 1', () => {
      it('should pass', () => {
        expect(typeof '1').toBe('string')
      })
    })

    describe('context #{i} 2', () => {
      it('should not pass', () => {
        expect(typeof '1').not.toBe('string')
      })
    })
  })
})
  })
end

f = File.open('test/sync_nested_suites_hooks.test.js', 'w')
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    beforeAll(() => {})
    afterAll(() => {})
    beforeEach(() => {})
    afterEach(() => {})

    describe('context #{i} 1', () => {
      it('should pass', () => {
        expect(typeof '1').toBe('string')
      })
    })

    describe('context #{i} 2', () => {
      it('should not pass', () => {
        expect(typeof '1').not.toBe('string')
      })
    })
  })
})
  })
end

f = File.open('test/sync_no_nested_suites_no_hooks.test.js', 'w')
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  it('should pass', () => {
    expect(typeof '1').toBe('string')
  })

  it('should not pass', () => {
    expect(typeof '1').not.toBe('string')
  })
})
  })
end

f = File.open('test/sync_no_nested_suites_hooks.test.js', 'w')
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  beforeAll(() => {})
  afterAll(() => {})
  beforeEach(() => {})
  afterEach(() => {})

  it('should pass', () => {
    expect(typeof '1').toBe('string')
  })

  it('should not pass', () => {
    expect(typeof '1').not.toBe('string')
  })
})
  })
end

f = File.open('test/async_nested_suites_no_hooks.test.js', 'w')
f.puts(%{
f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 5)
  })
}

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    describe('context #{i} 1', () => {
      it('should pass', async () => {
        await f()
        expect(typeof '1').toBe('string')
      })
    })

    describe('context #{i} 2', () => {
      it('should not pass', async () => {
        await f()
        expect(typeof '1').not.toBe('string')
      })
    })
  })
})
  })
end

f = File.open('test/async_nested_suites_hooks.test.js', 'w')
f.puts(%{
f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 5)
  })
}

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    beforeAll(() => {})
    afterAll(() => {})
    beforeEach(() => {})
    afterEach(() => {})

    describe('context #{i} 1', () => {
      it('should pass', async () => {
        await f()
        expect(typeof '1').toBe('string')
      })
    })

    describe('context #{i} 2', () => {
      it('should not pass', async () => {
        await f()
        expect(typeof '1').not.toBe('string')
      })
    })
  })
})
  })
end

f = File.open('test/async_no_nested_suites_no_hooks.test.js', 'w')
f.puts(%{
f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 5)
  })
}

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  it('should pass', async () => {
    await f()
    expect(typeof '1').toBe('string')
  })

  it('should not pass', async () => {
    await f()
    expect(typeof '1').not.toBe('string')
  })
})
  })
end

f = File.open('test/async_no_nested_suites_hooks.test.js', 'w')
f.puts(%{
f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 5)
  })
}

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  beforeAll(() => {})
  afterAll(() => {})
  beforeEach(() => {})
  afterEach(() => {})

  it('should pass', async () => {
    await f()
    expect(typeof '1').toBe('string')
  })

  it('should not pass', async () => {
    await f()
    expect(typeof '1').not.toBe('string')
  })
})
  })
end

f = File.open('test/mock.test.js', 'w')
f.puts(%{
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

})
for i in 1..500 do
  f.puts(%{
describe('Fetching from Github and insert into database #{i}', () => {
  beforeEach(() => {
    GithubAPI.mockClear()
    GithubRepo.mockClear()
  })

  it('works properly',() => {
    const githubAPI = new GithubAPI()
    const githubRepo = new GithubRepo()

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(mockCountStars).toHaveBeenCalledWith("mocha")
    expect(mockStore).toHaveBeenCalledWith("mocha", 10)
  })
})
  })
end
