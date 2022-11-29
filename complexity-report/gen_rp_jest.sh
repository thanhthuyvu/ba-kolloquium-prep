#!/bin/bash

rm -rf jest
mkdir -p jest
ruby gen_rp.rb ../../jest ./jest
