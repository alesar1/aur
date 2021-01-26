# Maintainer: Luigi Guevara <luigi.t.guevara@killua.me>
pkgname=pomello
pkgver=0.10.15
pkgrel=1
pkgdesc="Stay Focused. Accomplish more."
arch=('x86_64' 'i686')
url="https://pomelloapp.com/"
license=('custom')
depends=('libsystemd')
makedepends=('tar' 'binutils')
install='pomello.install'
source_i686=("Pomello-${pkgver}.deb::https://pomelloapp.com/download/linux/latest?dist=ubuntu&arch=32")
source_x86_64=("Pomello-${pkgver}.deb::https://pomelloapp.com/download/linux/latest?dist=ubuntu")
options=(!strip)
md5sums_i686=('1e63dc91e35f61482060670e91302f52')
md5sums_x86_64=('f09213104bb55b7f65eda6961d2f8155')

prepare() {
  cd "$srcdir"

  ar x "Pomello-${pkgver}.deb"
}

package() {
  cd "$srcdir"

  tar -C "$pkgdir" -xf data.tar.xz

  mkdir -p "$pkgdir/usr/bin"

  mkdir -p "$pkgdir/opt/Pomello/lib"
  ln -nsf /usr/lib/libudev.so.1 "$pkgdir/opt/Pomello/lib/libudev.so.0"

  install -D -m644 "${pkgdir}/opt/Pomello/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSES.chromium.html"
  install -D -m644 "${pkgdir}/opt/Pomello/LICENSE.electron.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.electron.txt"

  ln -nsf "/opt/Pomello/pomello" "${pkgdir}/usr/bin/pomello"
  RPM_BUILD_ROOT="$pkgdir" desktop-file-install "$pkgdir/usr/share/applications/pomello.desktop"
  sed -e 's#/opt/Pomello/pomello#/usr/bin/pomello#' -i "$pkgdir/usr/share/applications/pomello.desktop"
}

# vim:set ts=2 sw=2 et:
