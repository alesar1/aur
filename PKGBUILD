# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor:  VirtualTam <virtualtam -at- flibidi -dot- net>

_pkgname="raul"
pkgname="${_pkgname}-git"
pkgver=1.0.0.r605.e87bb39
pkgrel=1
epoch=1
pkgdesc="Realtime Audio Utility Library for audio and musical applications (git version)"
arch=('i686' 'x86_64')
url="http://drobilla.net/software/raul/"
license=('GPL3')
depends=()
makedepends=('doxygen' 'git' 'graphviz' 'python')
provides=("$_pkgname" "$_pkgname=${pkgver//.r*/}")
conflicts=("$_pkgname")
source=("${_pkgname}::git+https://gitlab.com/drobilla/${_pkgname}.git"
        'autowaf::git+https://gitlab.com/drobilla/autowaf.git')
sha256sums=('SKIP'
            'SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=`grep "^RAUL_VERSION" wscript | cut -d "'" -f 2`
  echo "$ver.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  git submodule init
  git config submodule.waflib.url "${srcdir}/autowaf"
  git submodule update

  # remove local call to ldconfig
  sed -i "/ldconfig/d" wscript
}

build(){
  cd "${srcdir}/${_pkgname}"

  python waf configure \
    --prefix="/usr" \
    --docs \
    --docdir="/usr/share/doc/${pkgname}"
  python waf build ${MAKEFLAGS}
}

package() {
  cd "${srcdir}/${_pkgname}"

  python waf install --destdir="${pkgdir}"
  install -m 644 README NEWS "${pkgdir}/usr/share/doc/$pkgname"
  mv "${pkgdir}/usr/share/doc/$pkgname/raul-1/html" "${pkgdir}/usr/share/doc/$pkgname"
  rm -rf "${pkgdir}/usr/share/doc/$pkgname/raul-1"
}
