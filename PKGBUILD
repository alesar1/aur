# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: kusanaginoturugi <kusanaginoturugi at gmail dot com>
pkgname=info-ja-gnu-coreutils
_pkgname=info-ja-GNU_coreutils
pkgver=20160710
pkgrel=1
pkgdesc="Japanese version info manual"
arch=(any)
url="https://linuxjm.osdn.jp/"
license=('GPL')
install="${pkgname}.install"
source=("https://linuxjm.osdn.jp/info-pkg/${_pkgname}-${pkgver}.tar.gz")
md5sums=('4b7e0f8f3cc4c4f22cb9de0164f0e5f0')

#prepare() {
#}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  tar cvfz coreutils-ja.info.gz coreutils-ja.info
}

#check() {
#}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  install -Dm644 coreutils-ja.info.gz "$pkgdir/usr/share/info/coreutils-ja.info.gz"
}
