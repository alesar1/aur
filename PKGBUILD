# Maintainer: Wei Congrui < crvv.mail at gmail dot com >
# Contributor: Carl George < arch at cgtx dot us >
# Contributor: Eric Engeström <eric at engestrom dot ch>
# Contributor: Andreas Linz <klingt.net at gmail dot com>
# Contributor: Akshay S Dinesh <asdofindia at gmail dot com>

_gopkgname='github.com/caddyserver/caddy'

pkgname=caddy
pkgver=1.0.1
pkgrel=1
pkgdesc='HTTP/2 Web Server with Automatic HTTPS'
arch=('x86_64' 'i686' 'armv6h' 'armv7h' 'aarch64')
url='https://caddyserver.com'
license=('Apache')
backup=('etc/caddy/caddy.conf')
install='caddy.install'
makedepends=('go>=2:1.12' 'git')
source=("https://$_gopkgname/archive/v$pkgver/$pkgname-$pkgver.tar.gz"
        'https://caddyserver.com/resources/images/brand/caddy-at-your-service-white.svg'
        'index.html'
        'caddy.service'
        'caddy.tmpfiles'
        'caddy.conf'
        'plugins.go')
sha256sums=('7cbd80c798a0db4195381f730f5409680c6e1239fbc06295b90b34f666a05692'
            'e679dd79fd92dc351fc190c7af529c73e3896986aaa6b7c0ae01e561398d6b85'
            '6db7aec45e95bbbf770ce4d120a60d8e4992d2262a8ebf668521179279aa5ae7'
            '5f899f3d72bd815ba67a2fbd95144f7ff5d83ae47d1c4bee8297ce4e5d2ed400'
            'c8f002f5ba59985a643600dc3c871e18e110903aa945ef3f2da7c9edd39fbd7a'
            '80520b80ccabf077a3269f6a1bf55faa3811ef5adce115131b35ef2044d37b64'
            'f5a0fbb961e7c9ecf99e88d0959a3164cbea54660c1c08c3ba3cdf1d45563929')

prepare() {
    cd "$srcdir/$pkgname-$pkgver/caddy"
    cat > main.go <<EOF
package main

import (
	"github.com/caddyserver/caddy/caddy/caddymain"
EOF
    if [ ${#plugins[@]} -gt 0 ]; then
        echo enabled plugins: ${plugins[@]}
        go run $srcdir/plugins.go "${plugins[@]}" >> main.go
    fi
    cat >> main.go <<EOF
)

func main() {
	caddymain.EnableTelemetry = false
	caddymain.Run()
}
EOF
}

build() {
    cd "$srcdir/$pkgname-$pkgver/caddy"
    export GOPATH="$srcdir"
    go build -v -o "$srcdir/caddy"
    go clean --modcache
}

package() {
    install -D -m 0755 caddy "$pkgdir/usr/bin/caddy"
    install -D -m 0644 caddy-at-your-service-white.svg "$pkgdir/usr/share/caddy/caddy-at-your-service-white.svg"
    install -D -m 0644 index.html "$pkgdir/usr/share/caddy/index.html"
    install -D -m 0644 caddy.service "$pkgdir/usr/lib/systemd/system/caddy.service"
    install -D -m 0644 caddy.tmpfiles "$pkgdir/usr/lib/tmpfiles.d/caddy.conf"
    install -D -m 0644 caddy.conf "$pkgdir/etc/caddy/caddy.conf"
    install -d -m 0755 "$pkgdir/etc/caddy/caddy.conf.d"
}

plugins=(
#    'dns'
#    'docker'
#    'dyndns'
#    'hook.service'
#    'http.authz'
#    'http.awses'
#    'http.awslambda'
#    'http.cache'
#    'http.cgi'
#    'http.cors'
#    'http.datadog'
#    'http.expires'
#    'http.filter'
#    'http.forwardproxy'
#    'http.geoip'
#    'http.git'
#    'http.gopkg'
#    'http.grpc'
#    'http.ipfilter'
#    'http.jwt'
#    'http.locale'
#    'http.login'
#    'http.mailout'
#    'http.minify'
#    'http.nobots'
#    'http.prometheus'
#    'http.proxyprotocol'
#    'http.ratelimit'
#    'http.realip'
#    'http.reauth'
#    'http.restic'
#    'http.s3browser'
#    'http.supervisor'
#    'http.webdav'
#    'net'
#    'supervisor'
#    'tls.dns.auroradns'
#    'tls.dns.azure'
#    'tls.dns.cloudflare'
#    'tls.dns.cloudxns'
#    'tls.dns.digitalocean'
#    'tls.dns.dnsimple'
#    'tls.dns.dnsmadeeasy'
#    'tls.dns.dnspod'
#    'tls.dns.duckdns'
#    'tls.dns.dyn'
#    'tls.dns.exoscale'
#    'tls.dns.gandi'
#    'tls.dns.gandiv5'
#    'tls.dns.godaddy'
#    'tls.dns.googlecloud'
#    'tls.dns.lightsail'
#    'tls.dns.linode'
#    'tls.dns.namecheap'
#    'tls.dns.namedotcom'
#    'tls.dns.ns1'
#    'tls.dns.otc'
#    'tls.dns.ovh'
#    'tls.dns.powerdns'
#    'tls.dns.rackspace'
#    'tls.dns.rfc2136'
#    'tls.dns.route53'
#    'tls.dns.vultr'
)
