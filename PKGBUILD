# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=redoc-cli
pkgver=0.13.15
pkgrel=1
pkgdesc="ReDoc's Command Line Interface"
arch=('any')
url="https://github.com/Redocly/redoc"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
options=('!strip')
source=(
  "https://registry.npmjs.org/${pkgname}/-/${pkgname}-${pkgver}.tgz"
)
sha256sums=(
  '61a8cb512b8f47ce750f2278c55ab104f1603f266069b74f62f3e5965cf9ccea'
)
noextract=("${pkgname}-${pkgver}.tgz")

package() {
  npm install -g --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  chmod -R u=rwX,go=rX "${pkgdir}"

  # npm installs package.json owned by build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "${pkgdir}"
}

# vim:set ts=2 sw=2 et:
