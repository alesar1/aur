# Maintainer: Nicola Mori <nicolamori (at) aol (dot) com>
# Contributor: Sven Schneider <archlinux.sandmann (at) googlemail (dot) com>
# Contributor: Jose Valecillos <valecillosjg (at) gmail (dot) com>

pkgname=cmakeed
pkgver=1.12.0
pkgrel=1
pkgdesc="CMake plugin for Eclipse"
arch=('any')
url="https://github.com/15knots/cmakeed"
license=('EPL')
depends=('eclipse-common')
source=("https://dl.bintray.com/15knots/p2-zip/CMakeEd-${pkgver}.zip")
noextract=()
md5sums=('31e635cf103de9f11d555ea0ced592a7')


package() {
  
  _dest="${pkgdir}/usr/lib/eclipse/dropins/${pkgname}/eclipse"
	
  install -d ${_dest}
	
  cp -a "features" ${_dest}
  cp -a "plugins" ${_dest}
}
