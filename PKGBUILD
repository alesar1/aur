# Maintainer: KokaKiwi <kokakiwi+aur at kokakiwi dot net>

_pkgver=5.6.1-nightly.13
pkgname=ferdi-nightly-bin
pkgver=${_pkgver/-/.}
pkgrel=1
pkgdesc='A messaging browser that allows you to combine your favorite messaging services into one application - nightly binary version'
url='https://getferdi.com'
license=('Apache')
arch=('x86_64')
depends=('alsa-lib' 'c-ares' 'ffmpeg' 'gtk3' 'http-parser'
         'libevent' 'libnghttp2' 'libsecret' 'libxkbfile'
         'libxslt' 'libxss' 'libxtst'
         'minizip' 'nss' 're2' 'snappy')
provides=('ferdi')
conflicts=('ferdi' 'ferdi-bin')
source=("${pkgname}-${_pkgver}.rpm::https://github.com/getferdi/nightlies/releases/download/v${_pkgver}/ferdi-${_pkgver}.x86_64.rpm")
cksums=('95727164')
sha256sums=('4fef8a020cec37442779269b619d26e60109a8bd247c5dfdc68708d71e098306')
b2sums=('26e99ba938e0c269c2d5399837258f303d80421f914f1ff8b054672ad8b430e1bacccbc6167f7a24719f73fd94d8f32910044c88a5e9cdf71edfe512298f7b00')

prepare() {
  sed -E -i -e 's|Exec=/opt/Ferdi/ferdi|Exec=/usr/bin/ferdi|' usr/share/applications/ferdi.desktop
}

package() {
  install -dm0755 "${pkgdir}"/{opt,usr}
  cp -a --no-preserve=ownership opt/Ferdi "${pkgdir}/opt/ferdi"
  cp -a --no-preserve=ownership usr/share "${pkgdir}/usr/share"

  install -dm0755 "${pkgdir}/usr/bin"
  ln -sf /opt/ferdi/ferdi "${pkgdir}/usr/bin/ferdi"

  install -dm0755 "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -sf -t "${pkgdir}/usr/share/licenses/${pkgname}" \
    /opt/ferdi/{LICENSE.electron.txt,LICENSES.chromium.html}
}
