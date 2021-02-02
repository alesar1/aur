# Maintainer: Joseph R. Quinn <quinn period josephr at protonmail dot com>
pkgname="trunk-bin"
pkgver="0.8.0"
pkgrel=1
pkgdesc="A WASM web application bundler for Rust."
arch=('x86_64')
url="https://github.com/thedodd/trunk"
license=('MIT/Apache-2.0')
provides=("trunk")
source=(
    "${pkgname%-bin}-$pkgver.tar.gz::$url/releases/download/v$pkgver/${pkgname%-bin}-x86_64-unknown-linux-gnu.tar.gz"
    "https://raw.githubusercontent.com/thedodd/${pkgname%-bin}/v$pkgver/LICENSE-APACHE"
    "https://raw.githubusercontent.com/thedodd/${pkgname%-bin}/v$pkgver/LICENSE-MIT"
)
sha256sums=('6a6669fd0b12371fbc6513c72289c73e3818166539ef71630513630a3482997b'
            'a60eea817514531668d7e00765731449fe14d059d3249e0bc93b36de45f759f2'
            '23f18e03dc49df91622fe2a76176497404e46ced8a715d9d2b67a7446571cca3')

prepare() {
    bsdtar -xf "${pkgname%-bin}-$pkgver.tar.gz"
}

package() {
    install -Dm755 "${pkgname%-bin}" "$pkgdir/usr/bin/${pkgname%-bin}"
    install -Dm644 LICENSE-APACHE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE-APACHE"
    install -Dm644 LICENSE-MIT "$pkgdir/usr/share/licenses/${pkgname}/LICENSE-MIT"
}
