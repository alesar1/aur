# Based on the file created by the Manjaro Team:
# Maintainer: Philip Müller <philm[AT]manjaro[DOT]org>
# Contributor: Helmut Stult <helmut[AT]manjaro[DOT]org>

# Maintainer: Steven Seifried <gitlab@canox.net>

pkgname=tuxedo-control-center-bin
pkgver=1.1.1
pkgrel=1
pkgdesc="A tool to help you control performance, energy, fan and comfort settings on TUXEDO laptops. "
arch=(x86_64)
url="https://github.com/tuxedocomputers/tuxedo-control-center"
license=('GPL3')
depends=('tuxedo-keyboard' 'libxss' 'nss' 'gtk3')
conflicts=('tuxedo-control-center' 'auto-cpufreq')
replaces=('tuxedo-control-center')
options=(!strip)
install=${pkgname}.install

source=(https://rpm.tuxedocomputers.com/opensuse/15.3/x86_64/tuxedo-control-center_${pkgver}.rpm tuxedo-control-center-bin.install)
sha256sums=('be00e7f428e7542284fa3611ef4c74b3bef53ae38e12d8f8861100438c05b4c0'
            'fef8f708ff4ba19921f167ff9bffd2536cc0c128dfe418a30f7e5e0d04fca6e3')
sha512sums=('f55fd678ca142460d81a56a18a1a9f76ef6bc0ca4499112a61837615eaaea65f874561678ca6821f3bbc5c800cee7c28e23b3acc5a03c0de0f476f1d50c3d7e0'
            'b70d3412f07c72d6de2cf18e75a184741d8f5db7f144c4d8e8c0dde752e197d831fc8f8b6c095c9b6387ff97b36567f9cf5167dbb23ebc392f7b3cc47a78111a')

package() {
  cp -av usr "${pkgdir}"
  cp -av opt "${pkgdir}"
  chmod -R 755 "${pkgdir}"/opt/tuxedo-control-center/
  mkdir -p "${pkgdir}/usr/bin"
  ln -sfv /opt/tuxedo-control-center/tuxedo-control-center "${pkgdir}/usr/bin/tuxedo-control-center"
  install -Dm644 "${srcdir}/opt/tuxedo-control-center/resources/dist/tuxedo-control-center/data/dist-data/tuxedo-control-center.desktop" "${pkgdir}/usr/share/applications/tuxedo-control-center.desktop"
  install -Dm644 "${srcdir}/opt/tuxedo-control-center/resources/dist/tuxedo-control-center/data/dist-data/de.tuxedocomputers.tcc.policy" "${pkgdir}/usr/share/polkit-1/actions/de.tuxedocomputers.tcc.policy"
  install -Dm644 "${srcdir}/opt/tuxedo-control-center/resources/dist/tuxedo-control-center/data/dist-data/com.tuxedocomputers.tccd.conf" "${pkgdir}/usr/share/dbus-1/system.d/com.tuxedocomputers.tccd.conf"
  install -Dm644 "${srcdir}/opt/tuxedo-control-center/resources/dist/tuxedo-control-center/data/dist-data/tccd.service" "${pkgdir}/etc/systemd/system/tccd.service"
  install -Dm644 "${srcdir}/opt/tuxedo-control-center/resources/dist/tuxedo-control-center/data/dist-data/tccd-sleep.service" "${pkgdir}/etc/systemd/system/tccd-sleep.service"
}

