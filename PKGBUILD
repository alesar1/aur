# Maintainer: Pieter Goetschalckx <3.14.e.ter at gmail dot com>
# Contributor: Eric Engestrom <aur [at] engestrom [dot] ch>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>

pkgname=popcorntime-git
_pkgname=popcorntime
_gitname=popcorn-desktop
pkgver=r5792.8c5a48a
pkgrel=1
pkgdesc="Stream movies and TV shows from torrents"
arch=('i686' 'x86_64')
url="https://popcorntime.sh"
license=('GPL3')
depends=('alsa-lib' 'gconf' 'gtk2' 'nss' 'ttf-font' 'libxtst')
makedepends=('git' 'nodejs-grunt-cli' 'bower' 'npm')
conflicts=('popcorntime')
provides=('popcorntime')
options=('!strip')
install=popcorntime.install
source=("git+https://github.com/popcorn-official/${_gitname}.git"
        "${_pkgname}.desktop")
sha256sums=('SKIP'
            '7e22d234a2e7dd1e632e094154c44b31be7f93962df93dd865f3775b8e644c05')

[ "$CARCH" = "i686" ]   && _platform=linux32
[ "$CARCH" = "x86_64" ] && _platform=linux64

pkgver() {
  cd "${_gitname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${_gitname}"
  sed "s/zip: false/zip: true/g" -i gulpfile.js
  npm install
}

build() {
  cd "${_gitname}"
  grunt build
  gulp build
}

package() {
  _bpath="${_gitname}/build/Popcorn-Time/${_platform}"

  install -d "${pkgdir}/usr/share/${_pkgname}"
  install -d "${pkgdir}/usr/share/${_pkgname}/locales"
  install -d "${pkgdir}/usr/bin"

  # Program
  install -Dm755 "${_bpath}/Popcorn-Time" "${pkgdir}/usr/share/${_pkgname}/"
  install -Dm644 "${_bpath}/"{nw.pak,libffmpegsumo.so,icudtl.dat} "${pkgdir}/usr/share/${_pkgname}/"
  install -Dm644 "${_bpath}/locales/"*.pak "${pkgdir}/usr/share/${_pkgname}/locales/"


  # Link to program
  ln -s "/usr/share/${_pkgname}/Popcorn-Time" "${pkgdir}/usr/bin/${_pkgname}"

  # Desktop file
  install -Dm644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"

  # Icon
  install -Dm644 "${_gitname}/src/app/images/icon.png" "${pkgdir}/usr/share/icons/hicolor/256x256/apps/${_pkgname}.png"
}

# vim:set ts=2 sw=2 et:

