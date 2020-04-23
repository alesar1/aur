# Maintainer: Kevin Brodsky <corax26 'at' gmail 'dot' com>
# Contributor: Evan Penner <gryffyn@archlinux 'dot' net>
# Contributor: Iru Cai <mytbk920423\x40gmail 'dot' com>
# Contributor: Houlala <houlala 'at' gmail 'dot' com>
# Contributor: Olivier Duclos <olivier.duclos gmail.com>
# Contributor: wido <widomaker2k7@gmail.com>
# Contributor: VuDu <vudu 'dot' curse 'at' gmail 'dot' com>
# Contributor: Martin Poljak <martin 'at' poljak 'dot' cz>

pkgname=xnviewmp
pkgver=0.96.1
srcrel=1 # Incremented when there is a new release for the same version number
pkgrel=1
pkgdesc="An efficient multimedia viewer, browser and converter."
url="http://www.xnview.com/en/xnviewmp/"

arch=('x86_64')
license=('custom')
depends=('qt5-multimedia' 'qt5-svg' 'qt5-webkit' 'qt5-x11extras' 'desktop-file-utils')
optdepends=('glib2: support for moving files to trash')

source=("XnViewMP-linux-x64_${pkgver}-rel${srcrel}.tgz::http://download.xnview.com/XnViewMP-linux-x64.tgz"
        'xnviewmp.desktop')
sha256sums=('EE259687D7AB31150712F27484FBFDF1C67D10900F573BEF22B0ADE6ABF0032B'
            'F6B3A4AAA0A55B5F21D9B91AB6F3DA3D6EE077BA7FDD17E7C4AB1C69AD2A9E3A')

package() {
  install -d -m755 "${pkgdir}/opt/${pkgname}"
  install -d -m755 "${pkgdir}/usr/bin"
  install -d -m755 "${pkgdir}/usr/share/applications"

  cp -a "${srcdir}/XnView"/* "${pkgdir}/opt/${pkgname}"
  ln -s "/opt/${pkgname}/xnview.sh" "${pkgdir}/usr/bin/${pkgname}"

  install -m644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 "${srcdir}/XnView/license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Clean up
  rm "${pkgdir}/opt/${pkgname}/XnView.desktop"
  chmod 644 "${pkgdir}/opt/${pkgname}"/xnview*.png
  chmod 755 "${pkgdir}/opt/${pkgname}/XnView"

  # Some old version of libfreetype started getting shipped in 0.95.
  # libfreetype depends on libfontconfig, but since libfontconfig is not
  # provided in the archive and the system one is not compatible, we need to
  # remove it so that the XnView uses the system libfreetype.
  rm "${pkgdir}/opt/${pkgname}/lib/libfreetype.so"*
}

# vim:set ts=2 sw=2 et:
