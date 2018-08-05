# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: prettyvanilla <prettyvanilla@posteo.at>
# Contributor: SpepS <dreamspepser at yahoo dot it>

_pkgname=lilv
pkgname="${_pkgname}-git"
pkgver=0.24.3.r1163.9a45b4c
pkgrel=1
pkgdesc="A C library interface to the LV2 plug-in standard"
arch=('i686' 'x86_64')
url="http://drobilla.net/software/lilv"
license=("custom:ISC")
depends=('lv2' 'python-numpy' 'sratom')
makedepends=('subversion' 'swig')
optdepends=(
    "bash-completion: auto-complete words"
    "libsndfile: lv2apply utility"
)
provides=("${_pkgname}=${pkgver%.r*}")
conflicts=("${_pkgname}" "${_pkgname}-svn")
source=("${_pkgname}::git+http://git.drobilla.net/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=`grep "^LILV_VERSION" wscript | cut -d "'" -f 2`
  echo "$ver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_pkgname}"

  python waf configure \
    --prefix=/usr \
    --configdir=/etc \
    --dyn-manifest \
    --bindings
  python waf
}

package() {
  cd "${srcdir}/${_pkgname}"

  python waf install --destdir="${pkgdir}"
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
