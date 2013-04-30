# Maintainer: Jon Gjengset <jon@tsp.io>
# Based on PKGBUILD for oilrush
pkgname=game-dev-tycoon
pkgver=1.2.2
pkgrel=1
pkgdesc="a business simulation game where you start a video game development company"
arch=('i686' 'x86_64')
depends=('mesa' 'lib32-gconf' 'systemd')
provides=()
options=(!strip)
PKGEXT=".pkg.tar" # Because we don't want to have to recompress the binary
license=("commercial")
url="http://www.greenheartgames.com/app/game-dev-tycoon/"
_gamepkg="game-dev-tycoon.tar.gz"
source=('game-dev-tycoon' 'game-dev-tycoon.desktop'
  'http://www.greenheartgames.com/wp-content/uploads/2012/09/logo_120.png')
md5sums=('0c1a2b3ba7df65f5763a8f99da799ea4'
         'b846906a3d1b9820dbc2c68c3c748db9'
         '20f8fd0e2d8d72090aa032aec8a43119')

build() {
  cd ${srcdir}

  msg "You need a full copy of this game in order to install it"
  msg "Searching for \"${_gamepkg}\"\
  in dir: $(readlink -f ${startdir})"
  pkgpath=${startdir}

  if [[ ! ( -f "${startdir}/${_gamepkg}" ) ]]; then
    error "Game package not found, please type absolute path to game setup package:"
    read pkgpath
    if [[ ! ( -f "${pkgpath}/${_gamepkg}" ) ]] ; then
       error "Unable to find game package." && return 1
   fi
  fi
  msg "Found game package, installing..."

  ln -fs "${pkgpath}/${_gamepkg}" .
  tar zxf ${srcdir}/${_gamepkg}
  mv "logo_120.png" "launcher.png"
}

package() {
  cd "${srcdir}"
  install -d ${pkgdir}/opt/greenheartgames/${pkgname}

  cp -R ${srcdir}/* ${pkgdir}/opt/greenheartgames/${pkgname}/

  # I know this is bad, but what else can be done about this?
  install -d ${pkgdir}/usr/lib32
  ln -fs libudev.so.1 ${pkgdir}/usr/lib32/libudev.so.0

  # Install Launcher
  install -D -m755 ${srcdir}/${pkgname} ${pkgdir}/usr/bin/${pkgname}

  # Install Desktop
  install -D -m644 ${srcdir}/${pkgname}.desktop \
    ${pkgdir}/usr/share/applications/${pkgname}.desktop
}
