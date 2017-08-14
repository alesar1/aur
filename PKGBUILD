# Maintainer: Jonathon Fernyhough <jonathon_at_manjaro_org>

pkgname='hopper'
_pkgname='hopperv4'
pkgver='4.2.12'
pkgrel='2'
pkgdesc='Reverse engineering tool that lets you disassemble, decompile and debug your applications'
arch=('x86_64')
url='https://www.hopperapp.com/'
license=('Commercial')
depends=('hicolor-icon-theme' 'libbsd' 'python2' 'qt5-base')
provides=("${pkgname}" "${_pkgname}")
conflicts=("${pkgname}" "${_pkgname}")
source=("https://d2ap6ypl1xbe4k.cloudfront.net/Hopper-v4-${pkgver}-Linux.pkg.tar.xz"
        'LICENSE')
sha1sums=('f13e3ce7acfd33f1290ccd63f398d4f9b9cb62b7'
          'c3f410d29524eb02a8bf3dc1b29aaeb82b1844e6')
sha256sums=('1dcd5a6be2326d4e12348e26778b59fa31c7f1ce615eb0ab7d53a8abcac9f1f2'
            '0155d243d79d1ba0f6ff914f8ddb07a277830826559b2dd7922be01c3190393d')

package() {
  # Copy package content
  cp -r ${srcdir}/opt ${pkgdir}/opt
  cp -r ${srcdir}/usr ${pkgdir}/usr

  # Move docs to /opt
  mv ${pkgdir}/usr/share/doc/hopperv4 ${pkgdir}/opt/hopper-v4/doc
  ln -s /opt/hopper-v4/doc ${pkgdir}/usr/share/doc/hopperv4

  # Remove launcher from Accessories
  sed -i '10s|Utility;||' ${pkgdir}/usr/share/applications/hopper-v4.desktop

  # Install license file
  # https://www.hopperapp.com/license_agreement.html @ 2017-08-14
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
