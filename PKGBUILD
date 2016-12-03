# Maintainer: Herbert Knapp <herbert.knapp@edu.uni-graz.at>
pkgname=waterfox-bin
pkgver=50.0.2
pkgrel=1
pkgdesc="64-Bit optimized Firefox, no data collection, allows unsigned extensions."
arch=('x86_64')
url="https://www.waterfoxproject.org/"
license=('GPL')
depends=('alsa-lib' 'libxt' 'libnotify' 'mime-types' 'nss' 'gtk2' 'gtk3' 'sqlite' 'dbus-glib')
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=('waterfox.desktop' 'https://storage-waterfox.netdna-ssl.com/releases/linux64/installer/waterfox-'"${pkgver}"'.en-US.linux-x86_64.tar.bz2')
md5sums=('e2c4c55d71809f2ce70198e40c21ab6a' '75bcf2a65ed8b10cefbe56d7f598da68')

package() {
  install -d "${pkgdir}"/{usr/{bin,share/{applications,pixmaps}},opt}
  install -m644 "${srcdir}"/waterfox.desktop "${pkgdir}"/usr/share/applications/
  install -m644 "${srcdir}"/waterfox/browser/icons/mozicon128.png "${pkgdir}"/usr/share/pixmaps/waterfox-icon.png
  cp -r waterfox "${pkgdir}"/opt/
  ln -s /opt/waterfox/waterfox "${pkgdir}"/usr/bin/
}
