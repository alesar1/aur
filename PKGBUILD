 # Maintainer: Jason Papakostas <vithos@gmail.com>
pkgname=vector-web
_upstream_version=0.7.4-r1
pkgver="${_upstream_version//-/_}" # sometimes upstream uses hyphens; we can't
pkgrel=1
pkgdesc="A glossy Matrix collaboration client for the web"
arch=('any')
url='https://github.com/vector-im/vector-web'
license=('Apache')
makedepends=('git' 'npm')
checkdepends=('fontconfig')
optdepends=('caddy: web server'
            'matrix-synapse: matrix homeserver')
install="$pkgname.install"
changelog="CHANGELOG.md"
source=("https://github.com/vector-im/$pkgname/archive/v$_upstream_version.tar.gz"
        'Caddyfile.example')
sha256sums=('861f70eb9ded6ff90b69145ac8515c08344f440a1164e032e8df8850461389d3'
            '73b20f2c48eec6a800cce1364db80b4298f0df89df8faa339a1a76b6f1615add')

build() {
    cd "$pkgname-$_upstream_version"
    npm install
    npm run clean
    npm run build
    cd "$srcdir/$pkgname-$_upstream_version/${pkgname%-web}"
    echo "v$_upstream_version" > version
}

check() {
    cd "$pkgname-$_upstream_version"
    npm run test
}

package() {
    cd "$pkgname-$_upstream_version/${pkgname%-web}"
    mkdir -p "$pkgdir/usr/share/webapps/$pkgname" "$pkgdir/etc/webapps/$pkgname"
    cp -RL * "$pkgdir/usr/share/webapps/$pkgname"
    install -m644 "config.sample.json" "$pkgdir/etc/webapps/$pkgname/config.sample.json"
    ln -s "/etc/webapps/$pkgname/config.json" "$pkgdir/usr/share/webapps/$pkgname/config.json"
    install -m644 "$srcdir/Caddyfile.example" "$pkgdir/etc/webapps/$pkgname"
}
