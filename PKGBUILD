# Maintainer: Mikael Blomstrand <mikael ÅT mbloms DÖT se>
# Contributor: Jendrik Wenke <jendrikwenke+aur at gmail dot com>

pkgname=scala-dotty
_reltag=0.22.0-RC1
pkgver=${_reltag//-/}
pkgrel=1
pkgdesc='Research compiler that will become Scala 3'
arch=('any')
url='http://dotty.epfl.ch'
license=('BSD')
depends=('java-environment>=8' 'java-environment<=11')
source=("https://github.com/lampepfl/dotty/releases/download/${_reltag}/dotty-${_reltag}.tar.gz")
sha1sums=('49398ef55ffa2ceadd0514a40c45b8af03dfc803')
sha256sums=('6576230b288200de7dd7442b1533c41821b20687d2c27db1eabe0e974fbe489f')
sha512sums=('c41a3b1e0283ebe2d82d20ffecfc684b3a96c239f26bce14636bdb293b6bed60ea9528ba193ced459dbefa9561b781f708a4d41b6e3e64c30f04f5cea95ff9c9')

package() {
       install -d "${pkgdir}/usr/bin" "${pkgdir}/usr/share/scala-dotty/bin"
       cp -r "${srcdir}/dotty-${_reltag}/lib" "${pkgdir}/usr/share/scala-dotty"
       install -m755 "${srcdir}/dotty-${_reltag}/bin/"* "${pkgdir}/usr/share/scala-dotty/bin"
       ln -s "../share/scala-dotty/bin/dotc" "${pkgdir}/usr/bin/dotc"
       ln -s "../share/scala-dotty/bin/dotd" "${pkgdir}/usr/bin/dotd"
       ln -s "../share/scala-dotty/bin/dotr" "${pkgdir}/usr/bin/dotr"
}
