# Maintainer: VHSgunzo <vhsgunzo.github.io>

pkgname='linux-xanmod-headers-bin'
pkgver='6.0.11'
pkgrel="1"
pkgbase="$pkgname"
pkgdesc='Headers and scripts for building modules for the Linux Xanmod - Prebuilt version'
url="http://www.xanmod.org/"
arch=('x86_64')
license=('GPL2')
options=('!strip')
depends=('pahole')
makedepends=('curl')
conflicts=("${pkgname%-bin}")
_url="https://api.github.com/repos/xanmod/linux/releases"
source=("$(curl -L -s "$_url"|grep -o "https:.*/download/${pkgver}-xanmod1/linux-headers.*deb"|grep 'x64v1')")
validpgpkeys=(
    'ABAF11C65A2970B130ABE3C479BE3E4300411886' # Linux Torvalds
    '647F28654894E3BD457199BE38DBBDC86092693E' # Greg Kroah-Hartman
)
sha256sums=('468ef3b48b5d1bbfd6e1acc1b2e37687807f5c9e8f18850bbc12922abf2aeff8')

prepare() {
  bsdtar -xf 'data.tar.xz'
}

package() {
  local kernver="${pkgver}-x64v1-xanmod1"
  local modulesdir="$pkgdir/usr/lib/modules/${kernver}"
  mkdir -p "${modulesdir}"
  cp -r lib/modules/${kernver}/* ${modulesdir}
  cp -r usr/* ${pkgdir}/usr
}
