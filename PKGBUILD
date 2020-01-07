# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=pyright
pkgver=1.1.18
pkgrel=1
pkgdesc="Type checker for the Python language"
arch=('any')
url="https://github.com/microsoft/pyright"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=(
  "${url}/archive/${pkgver}.tar.gz"
)
sha256sums=(
  '3b7653058e82bc71b39dd688c42bf8cf5c67740a7ef5c1cff78d445f786d0619'
)

prepare() {
  rm -rf "${pkgdir}/usr/lib/node_modules/${pkgname}"
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  npm run install:all
  npm run build
}

package() {
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib/node_modules/${pkgname}"
  install -d "${pkgdir}/usr/share/doc/${pkgname}"
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"

  cd "${srcdir}/${pkgname}-${pkgver}"

  cp -r dist "${pkgdir}/usr/lib/node_modules/${pkgname}/dist"
  install -Dm755 index.js "${pkgdir}/usr/lib/node_modules/${pkgname}/index.js"
  ln -s "/usr/lib/node_modules/${pkgname}/index.js" "${pkgdir}/usr/bin/pyright"

  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CONTRIBUTING.md "${pkgdir}/usr/share/doc/${pkgname}/CONTRIBUTING.md"
  cp -r docs "${pkgdir}/usr/share/doc/${pkgname}/docs"
  install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}

# vim:set ts=2 sw=2 et:
