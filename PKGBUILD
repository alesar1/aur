# Maintainer: D. Can Celasun <can[at]dcc[dot]im>

pkgname=kepubify-bin
_pkgname=kepubify
pkgver=2.3.1
pkgrel=1
pkgdesc="Convert your ePubs into kepubs, with a easy-to-use command-line tool."
arch=('x86_64')
url="https://geek1011.github.io/kepubify"
license=('MIT')
source_x86_64=(${_pkgname}-${pkgver}::https://github.com/geek1011/${_pkgname}/releases/download/v${pkgver}/${_pkgname}-linux-64bit)
md5sums_x86_64=('af97e27dbcb7342284d25dbec95b15de')
package() {
  install -d "${pkgdir}/usr/bin"
  install -m755 "${srcdir}/${_pkgname}-${pkgver}" "${pkgdir}"/usr/bin/${_pkgname}
}
