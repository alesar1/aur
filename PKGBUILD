# Maintainer: Alfred Jophy <alfredjophy[at]protonmail[dot]com>
# Contributor: Mark Wagie <mark[dot]wagie[at]tutanota[dot]com>
pkgname=xkcd-gtk
pkgver=1.6.3
pkgrel=1
pkgdesc="A simple xkcd comic viewer written in Go using GTK+3."
arch=('x86_64')
url="https://github.com/rkoesters/xkcd-gtk"
license=('GPL3')
makedepends=('go')
depends=('gtk3')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('845b379a5d167cb73a28582ff4a601f1427f98f3f89142885757718f48b677ab')
prepare() {
    export GOPATH="$srcdir/gopath"
    go clean -modcache
}
build()  {
    cd "$pkgname-$pkgver"
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
    make
    go clean -modcache
}
package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir/" install
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
    ln -s "/usr/bin/com.github.rkoesters.$pkgname" "$pkgdir/usr/bin/$pkgname"
}
