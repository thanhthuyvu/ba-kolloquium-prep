#!/usr/bin/env ruby

# Get the parameters from the command line
dir_path = ARGV[0]

if dir_path.nil?
  puts("first parameter must be the path of the directory")
  exit(1)
end

# Sanitize dir_path
dir_path = "#{dir_path}/" if dir_path[dir_path.length - 1] != '/'

# Get all the unique extensions
extensions = Dir["#{dir_path}**/*"].map do |file|
  file.split('.').last
end.reject do |file|
  file.include?('/')
end.uniq

# Output the extensions
puts extensions
