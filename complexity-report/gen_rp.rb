#!/usr/bin/env ruby

# Get the parameters from the command line
dir_path = ARGV[0]
output_path = ARGV[1]

if dir_path.nil?
  puts("first parameter must be the path of the directory")
  exit(1)
end

if output_path.nil?
  puts("second parameter must be the path of the output")
  exit(1)
end

# Sanitize dir_path and output path
dir_path = "#{dir_path}/" if dir_path[dir_path.length - 1] != '/'
output_path = "#{output_path}/" if output_path[output_path.length - 1] != '/'

# Search for all files .js, .jsx, .ts
files = Dir["#{dir_path}**/*.{js,jsx,ts,tsx,cjs,mjs}"]

# Count the success and fail
success_no = 0
fail_no = 0
failed_files = []

# Invoke the report.js to generate the report files.
# If a report can be generated from the file, increase the success_no.
# Otherwise, increase the fail_no and log the failed file.
files.each do |file|
  result = system("node report.js #{dir_path} #{file} #{output_path}")
  if result
    success_no += 1
  else
    fail_no += 1
    failed_files.push(file)
  end
end

# Output the summary
File.open('gen_rp_report.txt', 'w') do |file|
  file.puts("Success number: #{success_no}")
  file.puts("Fail number: #{fail_no}")
  if fail_no > 0
    file.puts("Failed files:")
    failed_files.each { |f| file.puts("- #{f}") }
  end
end
