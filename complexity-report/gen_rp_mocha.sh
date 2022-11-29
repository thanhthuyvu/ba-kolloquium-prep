#!/bin/bash

rm -rf mocha
mkdir -p mocha
ruby gen_rp.rb ../../mocha ./mocha
