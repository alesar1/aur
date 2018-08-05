# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: <skrylar@UFO>

_pkgname=ingen
pkgname="${_pkgname}-git"
pkgver=0.5.1.r2733.d35f222a
pkgrel=1
pkgdesc="A modular plugin host for JACK and LV2."
arch=('i686' 'x86_64')
url="http://drobilla.net/software/${_pkgname}/"
license=('GPL')
depends=('alsa-lib' 'ganv' 'jack' 'lilv' 'portaudio' 'suil')
makedepends=('python')
optdepends=(
    'lv2-plugins: various useful LV2 plug-in packages'
)
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+http://git.drobilla.net/cgit.cgi/ingen.git/")
md5sums=('SKIP')


pkgver() {
  cd "$srcdir/${_pkgname}"

  local ver=$(grep ^INGEN_VERSION wscript | cut -f 2 -d "'")
  local rev=$(git rev-list --count HEAD)
  local githash=$(git rev-parse --short HEAD)
  echo "${ver}.r${rev}.${githash}"
}

build() {
  cd "$srcdir/${_pkgname}"

  ./waf configure --prefix=/usr
  ./waf build
}

package() {
  cd "$srcdir/${_pkgname}"

  ./waf install --destdir="$pkgdir/"
}

# vim:set ts=2 sw=2 et:
