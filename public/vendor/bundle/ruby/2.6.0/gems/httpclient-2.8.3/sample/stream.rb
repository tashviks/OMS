$:.unshift(File.join('..', 'lib'))
require "httpclient"

c = HTTPClient.new

piper, pipew = IO.pipe
conn = c.post_async("https://marmoset-wondrous-singularly.ngrok-free.app/stream", piper)

Thread.new do
  res = conn.pop
  while str = res.content.read(10)
    p str
  end
end

p "type here"
while line = STDIN.gets
  pipew << line
end
pipew.close
sleep 5
