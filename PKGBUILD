# Maintainer: Dmitriy Bogdanov <di72nn at gmail dot com>
# Contributor: Robin Hahling <robin.hahling@gw-computing.net>
# Contributor: Kevin Gillieron <kevin.gillieron@gw-computing.net>
pkgname=shaarli
_pkgname=shaarli
_Pkgname=Shaarli
pkgver=0.8.4
pkgrel=1
pkgdesc='The personal, minimalist, super-fast, no-database delicious clone - community repo'
arch=('any')
url="https://github.com/shaarli/Shaarli"
license=('ZLIB')
depends=('php')
source=("https://github.com/shaarli/Shaarli/releases/download/v${pkgver}/shaarli-v${pkgver}-full.tar.gz")
sha256sums=('67d91dca24f1ea469bb8693a36a1e0ce6d6d2d32307c158e25e7a28da8a4dedc')

package() {
  cd "${pkgdir}"
  install -d "usr/share/webapps" "usr/share/licenses/${_pkgname}" "var/lib/${_pkgname}"

  cd "${srcdir}/${_Pkgname}/"
  mv "COPYING" "${pkgdir}/usr/share/licenses/${_pkgname}/"
  mv "cache" "data" "pagecache" "tmp" "${pkgdir}/var/lib/${_pkgname}"
  ln -s "/var/lib/${_pkgname}/"{cache,data,pagecache,tmp} .
  cd ..
  mv "${_Pkgname}" "${pkgdir}/usr/share/webapps/${_pkgname}"

  chown -R root:http "${pkgdir}/usr/share/webapps/${_pkgname}"
  chmod -R go-w "${pkgdir}/usr/share/webapps/${_pkgname}"

  chown -R root:http "${pkgdir}/var/lib/${_pkgname}"
  chmod -R o-rwx,g-w "${pkgdir}/var/lib/${_pkgname}"
  chmod -R g+w "${pkgdir}/var/lib/${_pkgname}"*
}

# vim:set ts=2 sw=2 et:
