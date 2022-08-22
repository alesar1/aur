# Maintainer: Joan Figueras <ffigue at gmail dot com>

pkgname=linux-xanmod-edge-linux-headers-bin-x64v2
_major=5.19
pkgver=${_major}.3
xanmod=1
pkgrel=${xanmod}
pkgdesc='Headers and scripts for building modules for the Linux Xanmod - Latest Mainline (EDGE) - Prebuilt version'
url="http://www.xanmod.org/"
arch=(x86_64)

license=(GPL2)
options=('!strip')
depends=(pahole)

_url=$(curl -L -s https://api.github.com/repos/xanmod/linux/releases/tags/${pkgver}-xanmod${xanmod} | jq --arg PKGVER "${pkgver}-xanmod${xanmod}" -r '.assets[] | select(.name | contains("linux-headers-" + $PKGVER + "-x64v2")).browser_download_url')
source=("${_url}")
validpgpkeys=(
    'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linux Torvalds
    '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
)

sha256sums=('e603b0e97a14718b234fe73b21d00b6c3039ef8c09db077e73aef016c93f9e8b')

prepare() {
  bsdtar -xf data.tar.xz
}

package() {

  local kernver="${pkgver}-xanmod${xanmod}-x64v2"
  local modulesdir="$pkgdir/usr/lib/modules/${kernver}"
  mkdir -p "${modulesdir}"
  cp -r lib/modules/${kernver}/* ${modulesdir}
  cp -r usr/* ${pkgdir}/usr
}

# vim:set ts=8 sts=2 sw=2 et:
