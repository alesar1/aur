# Maintainer: Frederik Schwan <freswa at archlinux dot org>

pkgname=jetbrains-toolbox
pkgver=1.20.8804
pkgrel=1
pkgdesc='Manage all your JetBrains Projects and Tools'
arch=('x86_64' 'i686')
url='https://www.jetbrains.com/toolbox/'
license=('custom:jetbrains')
depends=('java-runtime>=8' 'fuse' 'glib2' 'libxslt' 'libxss' 'xcb-util-keysyms' 'xdg-utils' 'nss')
optdepends=('xdg-utils: open URLs')
options=('!strip')
source=("https://download.jetbrains.com/toolbox/${pkgname}-${pkgver}.tar.gz"
        jetbrains-toolbox.desktop
        icon.svg
        LICENSE)
b2sums=('d3d4c6b68ddf25bfa520ec384b26acf582b2e2e123c0c698dc35f5e880f76ee3178210fa9a799b8a3de69f43ffd4443c38a9e976b5e56ec1b8eb1362948a7c01'
        '29b6d4be91d9276bce9e5413fb877db82de414198e343ff3f7aa5d03f65cf42c80f78ec3b43f601394fecc6a31712d1c475f3fdec71e51be5732ec7b1eb8dca9'
        '4b10487746fcb7f328cbdc8b17432f82618c5695baee4ef30e23ff3c4d4b6096daf2fcdfb4c1e2e179e2e61f68bbd88104e5df5a2e6e969aad0a68a75cfff496'
        'dadaf0e67b598aa7a7a4bf8644943a7ee8ebf4412abb17cd307f5989e36caf9d0db529a0e717a9df5d9537b10c4b13e814b955ada6f0d445913c812b63804e77')

package() {
  install -dm755 "${pkgdir}"/usr/bin/
  install -Dm644 "${srcdir}"/${pkgname}.desktop "${pkgdir}"/usr/share/applications/${pkgname}.desktop
  install -Dm644 "${srcdir}"/icon.svg "${pkgdir}"/usr/share/pixmaps/${pkgname}.svg
  install -Dm755 "${srcdir}"/${pkgname}-${pkgver}/${pkgname} "${pkgdir}"/opt/${pkgname}/${pkgname}
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE.txt

  ln -s /opt/${pkgname}/${pkgname} "${pkgdir}"/usr/bin/${pkgname}
}
