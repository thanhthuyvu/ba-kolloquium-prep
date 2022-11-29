#!/usr/bin/env ruby

f = File.open('test/sync_nested_suites_no_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    context('context #{i} 1', () => {
      it('should pass', () => {
        expect('1').to.be.a('string')
      })
    })

    context('context #{i} 2', () => {
      it('should not pass', () => {
        expect('1').to.not.be.a('string')
      })
    })
  })
})
  })
end

f = File.open('test/sync_nested_suites_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  describe('test #{i}', () => {
    before(() => {})
    after(() => {})
    beforeEach(() => {})
    afterEach(() => {})

    context('context #{i} 1', () => {
      it('should pass', () => {
        expect('1').to.be.a('string')
      })
    })

    context('context #{i} 2', () => {
      it('should pass', () => {
        expect('1').to.not.be.a('string')
      })
    })
  })
})
  })
end

f = File.open('test/sync_no_nested_suites_no_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  it('should pass', () => {
    expect('1').to.be.a('string')
  })

  it('should not pass', () => {
    expect('1').to.not.be.a('string')
  })
})
  })
end

f = File.open('test/sync_no_nested_suites_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {})
  afterEach(() => {})

  it('should pass', () => {
    expect('1').to.be.a('string')
  })

  it('should not pass', () => {
    expect('1').to.not.be.a('string')
  })
})
  })
end

f = File.open('test/async_nested_suites_no_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

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
    context('context #{i} 1', () => {
      it('should pass', async () => {
        await f()
        expect('1').to.be.a('string')
      })
    })

    context('context #{i} 2', () => {
      it('should not pass', async () => {
        await f()
        expect('1').to.not.be.a('string')
      })
    })
  })
})
  })
end

f = File.open('test/async_nested_suites_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

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
    before(() => {})
    after(() => {})
    beforeEach(() => {})
    afterEach(() => {})

    context('context #{i} 1', () => {
      it('should pass', async () => {
        await f()
        expect('1').to.be.a('string')
      })
    })

    context('context #{i} 2', () => {
      it('should not pass', async () => {
        await f()
        expect('1').to.not.be.a('string')
      })
    })
  })
})
  })
end

f = File.open('test/async_no_nested_suites_no_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

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
    expect('1').to.be.a('string')
  })

  it('should not pass', async () => {
    await f()
    expect('1').to.not.be.a('string')
  })
})
  })
end

f = File.open('test/async_no_nested_suites_hooks.js', 'w')
f.puts(%{
var expect = require('chai').expect
var sinon = require('sinon')

f = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, 5)
  })
}

})
for i in 1..500 do
  f.puts(%{
describe('test suite #{i}', () => {
  before(() => {})
  after(() => {})
  beforeEach(() => {})
  afterEach(() => {})

  it('should pass', async () => {
    await f()
    expect('1').to.be.a('string')
  })

  it('should not pass', async () => {
    await f()
    expect('1').to.not.be.a('string')
  })
})
  })
end

f = File.open('test/mock.js', 'w')
f.puts(%{
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

})
for i in 1..500 do
  f.puts(%{
describe('Fetching from Github and insert into database #{i}', () => {
  let githubAPI
  let githubRepo

  beforeEach(() => {
    sinon.restore()
    githubAPI = new GithubAPI()
    githubRepo = new GithubRepo()
  })

  it('works properly',() => {
    sinon.stub(githubAPI, 'countStars').withArgs("mocha").returns(10)
    const repoStub = sinon.stub(githubRepo, 'store').withArgs("mocha", 10)

    fetchAndStore = new FetchAndStore(githubAPI, githubRepo)
    fetchAndStore.fetchAndStore("mocha")

    expect(repoStub.calledOnce).to.be.true
  })
})
  })
end
