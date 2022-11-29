#!/usr/bin/env ruby

require 'json'

# Get the parameters from the command line
dir_path = ARGV[0]

if dir_path.nil?
  puts("first parameter must be the path of the directory")
  exit(1)
end

# Sanitize dir_path
dir_path = "#{dir_path}/" if dir_path[dir_path.length - 1] != '/'

# Iterate through the JSON files in the dir_path and aggregate the results
files = Dir["#{dir_path}*.json"]
results = files.map do |file|
  JSON.parse(File.read(file))
end.flatten

# Output the cyclomatic complexity distribution of the results
from_1_to_10    = results.select { |r| r['cyclomatic'] >= 1 && r['cyclomatic'] <= 10 }.length
from_10_to_20   = results.select { |r| r['cyclomatic'] > 10 && r['cyclomatic'] <= 20 }.length
from_20_to_50   = results.select { |r| r['cyclomatic'] > 20 && r['cyclomatic'] <= 50 }.length
greater_than_50 = results.select { |r| r['cyclomatic'] > 50 }.length
File.open('gen_cc_distribution_report.txt', 'w') do |file|
  file.puts("1 - 10: #{from_1_to_10}")
  file.puts("10 - 20: #{from_10_to_20}")
  file.puts("20 - 50: #{from_20_to_50}")
  file.puts(">50: #{greater_than_50}")
end
