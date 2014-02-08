# Maintainer: Mike Swanson <mikeonthecomputer@gmail.com>

pkgname=chocolate-doom-git
_pkgname=${pkgname/-git/}
true && pkgname=(chocolate-{doom,heretic,hexen,strife,common}-git)
pkgver=2.0.0.16.g95ef264
pkgrel=1
arch=('i686' 'x86_64')
url="http://www.chocolate-doom.org/"
license=('GPL2')
makedepends=('git' 'autoconf' 'python')
conflicts=(${pkgname[@]/-git/})
install=${_pkgname}.install
source=(git://github.com/chocolate-doom/chocolate-doom.git)
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  local version=$(git describe)
  local version=${version/chocolate-doom-/}
  local version=${version//-/.}
  echo $version
}

build() {
  cd "${_pkgname}"

  # Change binary dir from /usr/games to /usr/bin
  sed 's|/games|/bin|g' -i src{,/setup}/Makefile.am

  ./autogen.sh --prefix=/usr
  make
}

package_chocolate-common-git() {
  pkgdesc="Files shared in common with Chocolate Doom-based games."
  depends=('sdl_net')

  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install
  install -dm 755 "${pkgdir}"/usr/share/games/doom

  cd "${pkgdir}"/usr/bin
  mv chocolate-doom-setup chocolate-setup
  rm -f chocolate-{doom,heretic,hexen,strife}{,-setup}

  cd "${pkgdir}"/usr/share
  rm -rf doc man/man5
  rm -rf applications/chocolate-doom.desktop applications/screensavers \
    icons/chocolate-doom.png
  cd man/man6
  rm -f chocolate-{doom,heretic,hexen,strife}{,-setup}.6
}

package_chocolate-doom-git() {
  pkgdesc="Doom port accurately reproducing the original v1.9 EXEs."
  depends=(${depends[@]} 'chocolate-common-git')

  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install

  cd "${pkgdir}"/usr/bin
  rm -f chocolate-{heretic,hexen,strife,server} chocolate*setup
  ln -s chocolate{,-doom}-setup

  cd "${pkgdir}"/usr/share
  rm -rf doc/chocolate-{heretic,hexen,strife}
  rm -f applications/chocolate-setup.desktop icons/chocolate-setup.png
  rm -f man/man?/chocolate-{heretic,hexen,strife,setup,server}* \
    man/man5/{heretic,hexen,strife}.cfg*
}

package_chocolate-heretic-git() {
  pkgdesc="Heretic port accurately reproducing the original v1.3 EXE."
  depends=(${depends[@]} 'chocolate-common-git')

  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install

  cd "${pkgdir}"/usr/bin
  rm -f chocolate-{doom,hexen,strife,server} chocolate*setup
  ln -s chocolate{,-heretic}-setup

  cd "${pkgdir}"/usr/share
  rm -rf doc/chocolate-{doom,hexen,strife}
  rm -rf applications icons
  rm -f man/man?/chocolate-{doom,hexen,strife,setup,server}* \
    man/man5/{default,hexen,strife}.cfg*
}

package_chocolate-hexen-git() {
  pkgdesc="Hexen port accurately reproducing the original v1.1 EXE."
  depends=(${depends[@]} 'chocolate-common-git')

  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install

  cd "${pkgdir}"/usr/bin
  rm -f chocolate-{doom,heretic,strife,server} chocolate*setup
  ln -s chocolate{,-hexen}-setup

  cd "${pkgdir}"/usr/share
  rm -rf doc/chocolate-{doom,heretic,strife}
  rm -rf applications icons
  rm -f man/man?/chocolate-{doom,heretic,strife,setup,server}* \
    man/man5/{default,heretic,strife}.cfg*
}

package_chocolate-strife-git() {
  pkgdesc="Strife port accurately reproducing the original v1.31 EXE."
  depends=(${depends[@]} 'chocolate-common-git')

  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install

  cd "${pkgdir}"/usr/bin
  rm -f chocolate-{doom,heretic,hexen,server} chocolate*setup
  ln -s chocolate{,-strife}-setup

  cd "${pkgdir}"/usr/share
  rm -rf doc/chocolate-{doom,heretic,hexen}
  rm -rf applications icons
  rm -f man/man?/chocolate-{doom,heretic,hexen,setup,server}* \
    man/man5/{default,heretic,hexen}.cfg*
}

pkgdesc="Doom, Heretic, Hexen, Strife port accurately reproducing the originals."
depends=('libsamplerate' 'sdl_mixer' 'sdl_net')
