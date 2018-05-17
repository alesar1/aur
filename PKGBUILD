# Maintainer: Thomas Jost <schnouki@schnouki.net>
pkgname=pia-bin
pkgver=1.6.0
pkgrel=1
pkgdesc="A tool that aims to help data controllers build and demonstrate compliance to the GDPR. Developped by the French CNIL."
arch=('x86_64')
url="https://www.cnil.fr/fr/node/23992"
license=('GPL')
depends=('fuse' 'zlib')
options=('!strip')
source=("https://github.com/LINCnil/pia-app/releases/download/${pkgver}/PIA-${pkgver}-x86_64.AppImage"
        "pia-bin.png::https://github.com/LINCnil/pia-app/raw/master/icons/128x128.png"
        "pia-bin.desktop")
md5sums=('8a2de73efcc80c60571763b193efb9e6'
         'fb5d79b7c5adc7836a17657f06b8aadc'
         '8178820ff951b19a7e9b6bb10a0f8062')
sha256sums=('f4beb638e1c8ab61e993fe7386da7cb01e23da36c6f5192fac5ed3843d02b964'
            '54dd3df8eb4ba01328d8c1fe4b28b4cae928c8cd2915571f65b9634da2cd5383'
            'ddf3ff71ceb6be91af9b1856e593fa9bcba05d575beb20d1946d63dd7df51c9e')

package() {
  cd "$srcdir"
  install -Dm644 pia-bin.desktop "$pkgdir/usr/share/applications/pia-bin.desktop"
  install -Dm644 pia-bin.png "$pkgdir/usr/share/pixmaps/pia-bin.png"
  install -Dm755 "PIA-${pkgver}-x86_64.AppImage" "$pkgdir/usr/bin/PIA"
}
