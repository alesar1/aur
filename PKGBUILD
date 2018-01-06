# Maintainer: JoshuaRLi <joshua.r.li.98 at gmail com>
pkgname=yn-bin
pkgver=1.1.2
pkgrel=1
pkgdesc="an interactive y/n prompt"
arch=('x86_64')
url="https://github.com/JoshuaRLi/yn"
license=('MIT')
provides=('yn')

source_x86_64=("https://github.com/JoshuaRLi/yn/releases/download/${pkgver}/yn-${pkgver}-bin.tar.gz")
sha256sums_x86_64=('428b26e3e2095ced9c9a795b706819575f0d9dbe0de79039c9acbd14a0036a99')

package () {
  cd "${srcdir}/yn-${pkgver}-bin"
  install -Dm 755 yn "${pkgdir}/usr/bin/yn"
  install -Dm 644 yn.1.gz "${pkgdir}/usr/share/man/man1/yn.1.gz"
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  install -Dm 644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}
