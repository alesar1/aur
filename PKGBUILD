# Maintainer: M0Rf30

_pkgname=openbazaar
pkgname=${_pkgname}-git
pkgver=v2.0.13.rc1.r0.gcaf1f558
pkgrel=1
pkgdesc="Front-end Electron application for talking with the OpenBazaar daemon (Latest devel version)" 
arch=(any)
url="http://openbazaar.org"
license=('MIT')
depends=(electron)
makedepends=(git npm asar)
source=(
	"${_pkgname}::git+https://github.com/OpenBazaar/openbazaar-desktop.git"
	"${_pkgname}.sh"
        "${_pkgname}.desktop"
)
install=${_pkgname}.install
options=('!strip')

build(){
  cd $srcdir/${_pkgname}
#  npm install --production
  npm install
  npm rebuild node-sass
  npm run build
  npm run sass:build process-index --parallel sass:watch index:watch browsersync
  rm -rf {.eslint*,.travis*}
# npm prune --production
  asar pack ../${_pkgname} ../${_pkgname}-next.asar
}

package(){
  cd $srcdir

msg2 "Installing Openbazaar data"
  install -Dm644 ${_pkgname}-next.asar $pkgdir/opt/${_pkgname}-next.asar

msg2 "Installing execution script"
  install -Dm755 ${_pkgname}.sh $pkgdir/usr/bin/${_pkgname}-next

msg2 "Installing icons and desktop menu entry"
  install -Dm644 ${_pkgname}/imgs/icon.png "$pkgdir"/usr/share/pixmaps/${_pkgname}-next.png
  install -Dm644 ${_pkgname}.desktop "$pkgdir"/usr/share/applications/${_pkgname}-next.desktop
}

pkgver() {
  cd $srcdir/${_pkgname}
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

md5sums=('SKIP'
         'da45494abaae2de78bc1f7253facb653'
         'c73725d3737122cca0197da8fedee48f')
