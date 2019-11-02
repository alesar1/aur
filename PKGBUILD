# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: prettyvanilla <prettyvanilla@posteo.at>
# Contributor: SpepS <dreamspepser at yahoo dot it>

_pkgname=lilv
pkgname="${_pkgname}-git"
pkgver=0.24.5.r1249.36e74a7
pkgrel=1
pkgdesc="A C library interface to the LV2 plug-in standard with Python bindings (git version)"
arch=('i686' 'x86_64')
url="http://drobilla.net/software/lilv"
license=("custom:ISC")
depends=('lv2' 'python' 'sratom')
makedepends=('git' 'libsndfile')
optdepends=(
    "bash-completion: completion for bash"
    "libsndfile: lv2apply utility"
)
provides=("${_pkgname}" "${_pkgname}=${pkgver//.r*/}")
conflicts=("${_pkgname}" "${_pkgname}-svn")
source=("${_pkgname}::git+https://gitlab.com/lv2/${_pkgname}.git"
        'autowaf::git+https://gitlab.com/drobilla/autowaf.git')
md5sums=('SKIP' 'SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=`grep "^LILV_VERSION" wscript | cut -d "'" -f 2`
  echo "$ver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  git submodule init
  git config submodule.waflib.url "${srcdir}/autowaf"
  git submodule update

  # Ugly hack to fix pkgconfig file template
  # https://github.com/drobilla/lilv/issues/30
  sed -i -e 's/^Requires:.*/Requires: @LILV_PKG_DEPS@/' lilv.pc.in
}

check() {
  cd "${srcdir}/${_pkgname}"

  python waf test -v -v
}

build() {
  cd "${srcdir}/${_pkgname}"

  python waf configure \
    --prefix=/usr \
    --configdir=/etc \
    --dyn-manifest \
    --test
  python waf $MAKEFLAGS
}

package() {
  cd "${srcdir}/${_pkgname}"

  python waf install --destdir="${pkgdir}"
  # license
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
