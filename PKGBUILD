# Maintainer: wszqkzqk <wszqkzqk@qq.com>
pkgname=oh-my-posh
pkgver=12.11.0
pkgrel=1
pkgdesc="A prompt theme engine for any shell."
arch=('x86_64' 'armv7h' 'aarch64')
url="https://github.com/JanDeDobbeleer/oh-my-posh"
license=('MIT')
makedepends=('go' 'gcc')
depends=('glibc')
sha256sums=('8e390a6505b38c3c573c0ad3adb7bb09444b5eb5da80e4bab0f53315460ad655')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
build() {
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

    cd "$pkgname-$pkgver/src"
    go build
}
package() {
    cd "$pkgname-$pkgver/src"
    install -Dm 755 ./oh-my-posh -t "${pkgdir}/usr/bin/"
    install -Dm 644 "../COPYING" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -d "${pkgdir}/usr/share/oh-my-posh/themes"
    install -m 644 ../themes/* -t "${pkgdir}/usr/share/oh-my-posh/themes"
}
