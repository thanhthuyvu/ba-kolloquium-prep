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
maintainability_index_of_functions = results.map do |result|
  171 - 5.2*Math.log(result['halstead']['volume']) - 0.23*result['cyclomatic'] - 16.2*Math.log(result['sloc']['physical'])
end

less_than_100 = maintainability_index_of_functions.select { |e| e < 100 }.length
less_than_85 = maintainability_index_of_functions.select { |e| e < 85 }.length

File.open('gen_mi_report.txt', 'w') do |file|
  file.puts("<100: #{less_than_100}")
  file.puts("<85: #{less_than_85}")
end
