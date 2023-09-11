/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            "protocol": "https",
            "hostname": "storage.alexavfrantz.com",
            "port": '',
            'pathname': '/content/*'
          }
        ]
    }
}

module.exports = nextConfig
