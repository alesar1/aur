# Maintainer: Yufan You <ouuansteve at gmail>

_npmname=vue-language-server
_npmscope=@volar
pkgname=volar-server-bin
_pkgname=volar-server
pkgver=0.40.1
pkgrel=1
pkgdesc='Explore high-performance tooling for Vue'
arch=('any')
url="https://github.com/johnsoncodehk/volar/tree/master/packages/$_npmname"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
provides=("$_pkgname" 'vue-language-server')
conflicts=("$_pkgname" 'vue-language-server')
source=(https://registry.npmjs.org/$_npmscope/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha256sums=('0cdf900ccb0eb9245a38d98541b3a7ec991cce7061b9cc4c3758fd7f03137452')

package() {
    cd "$srcdir"
    local _npmdir="$pkgdir/usr/lib/node_modules/"
    mkdir -p "$_npmdir"
    cd "$_npmdir"
    npm install -g --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"
    chown -R root:root "${pkgdir}"
    install -Dm644 "$_npmdir/$_npmscope/$_npmname/LICENSE" -t "$pkgdir/usr/share/licenses/$_pkgname"
    ln -s /usr/bin/vue-language-server "$pkgdir/usr/bin/volar-server"
}
