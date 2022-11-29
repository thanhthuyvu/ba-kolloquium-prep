#!/bin/bash

hyperfine --runs 5 './concurrent_4.sh' -i
