# Maintainer: Reto Kaiser <reto@retokaiser.com>

pkgname=intellij-idea-ue-bundled-jre
pkgver=2017.3
pkgrel=1
pkgdesc="Jetbrains IDE for Java and other programming languages. This packages contains a bundled JRE."
arch=('i686' 'x86_64')
url="https://www.jetbrains.com/idea/"
backup=("usr/share/${pkgname}/bin/idea.vmoptions" "usr/share/${pkgname}/bin/idea64.vmoptions" "usr/share/${pkgname}/bin/idea.properties")
license=('Commercial')
depends=('giflib' 'libxtst')
conflicts=('intellij-idea-ultimate-edition')
options=(!strip)
source=(
  "https://download.jetbrains.com/idea/ideaIU-${pkgver}.tar.gz"
  'jetbrains-idea.desktop'
  'sysctl.conf'
)
sha256sums=('f75db2b4014d115f185bf867a1e5a6b4dae289444bf74e46b58ad2844e07d325'
            'fe26083eb313a977112f6571fb97ff369d48bbfabfde18c1339168662c666ca3'
            '9351eb68fabd41788a0d517b32d517e1821afde2a35727ff322c450bab1697c9')


build() {
  mv "${srcdir}/idea-IU-"* "${srcdir}/vendor-package"
}

package() {
  install -d -m755 "${pkgdir}/usr/share/${pkgname}"
  cp -a "${srcdir}/vendor-package/." "${pkgdir}/usr/share/${pkgname}"

  # create binary and desktop entry
  install -d -m755 "${pkgdir}/usr/bin"
  ln -s "/usr/share/${pkgname}/bin/idea.sh" "${pkgdir}/usr/bin/${pkgname}"
  install -D -m644 "${srcdir}/jetbrains-idea.desktop" "${pkgdir}/usr/share/applications/jetbrains-idea.desktop"
  install -D -m644 "${srcdir}/vendor-package/bin/idea.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"

  # sysctl - see https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit
  install -D -m644 "${srcdir}/sysctl.conf" "${pkgdir}/etc/sysctl.d/${pkgname}.conf"

  # workaround FS#40934
  sed -i 's|lcd|on|'  "${pkgdir}/usr/share/${pkgname}/bin/"*".vmoptions"
}
