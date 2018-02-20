pkgname=wscat
pkgver=2.1.1
pkgrel=1
pkgdesc="Netcat-like utility for WebSockets"
url="https://github.com/websockets/wscat"
arch=("x86_64" "i686")
license=("custom")
depends=("nodejs")
makedepends=("npm")

pkgver() {
    npm show wscat | awk -F"[: ',]+" '/version:/ { print $3 }'
}

package() {
    export npm_config_prefix="${pkgdir}/usr"
    npm install -g wscat
}
