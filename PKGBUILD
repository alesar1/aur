# Maintainer: xpt <user.xpt@gmail.com>
pkgname=kodi-addon-quasar
pkgver=0.9.50
pkgrel=1
pkgdesc='Quasar is an torrent finding and streaming engine for Kodi (fork of Pulsar add-on)'
classname=plugin.video.quasar
arch=('any')
url='https://https://github.com/scakemyer/plugin.video.quasar'
license=('GPL3')
depends=('kodi')
depends_arm=('kodi-rbp')
depends_armv6h=('kodi-rbp')
depends_armv7h=('kodi-rbp')
options=(!strip)
noextract=(${classname}-${pkgver}.zip)

case "$CARCH" in 
  arm)
  _pkgarch="arm"
  md5sums=('20401769f698bf3d6a1aee17db436930')
  ;;
  armv6h)
  _pkgarch="arm"
  md5sums=('20401769f698bf3d6a1aee17db436930')
  ;;
  armv7h)
  _pkgarch="armv7"
  md5sums=('d9300294722f14396c0d08ab2127b6dd')
  ;;
  i686)
  _pkgarch="x64"
  md5sums=('1b5d1fe986c6e2ea00f16a7d35e55f71')
  ;;
  x86_64)
  _pkgarch="x86"
  md5sums=('0e10748a506c7c196cf09fde1288a0e8')
  ;;
esac

source=("https://github.com/scakemyer/plugin.video.quasar/releases/download/v${pkgver}/plugin.video.quasar-${pkgver}.linux_${_pkgarch}.zip")
install=kodi-addon-quasar.install
installpath=/var/lib/kodi/.kodi/addons/

package() {
  mkdir -p ${pkgdir}/${installpath}
  unzip -o ${classname}-${pkgver}.linux_${_pkgarch}.zip -d ${pkgdir}/${installpath}
  rm ${pkgdir}/${installpath}/${classname}/Makefile
}