# Maintainer: Julien Virey <julien.virey@gmail.com>

pkgname=hostctl-bin
pkgver=1.1.2
pkgrel=1
pkgdesc='Command-line tool to manage your hosts file'
arch=('x86_64')
url='https://github.com/guumaster/hostctl'
license=('MIT')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("$url/releases/download/v$pkgver/${pkgname%-bin}_${pkgver}_linux_64-bit.tar.gz")
sha256sums=('a69c0abe184a1b721ac463bd55315cd119973321b7019f08063d72e48a40966e')

package() {
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname%-bin}/"
  install -Dm755  "${pkgname%-bin}" "$pkgdir/usr/bin/${pkgname%-bin}"
}
