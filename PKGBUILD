# Maintainer: Nico <d3sox at protonmail dot com>
pkgname=fluent-reader
pkgver=1.0.0
pkgrel=2
_pkgname="${pkgname}-${pkgver}"
pkgdesc='Modern desktop RSS reader built with Electron, React, and Fluent UI'
arch=('any')
url='https://hyliu.me/fluent-reader/'
license=('BSD')
depends=('hicolor-icon-theme')
makedepends=('nodejs' 'node-gyp' 'npm')
provides=('fluent-reader')
conflicts=('fluent-reader')
source=("https://github.com/yang991178/fluent-reader/archive/v${pkgver}.tar.gz"
        'fluent-reader.desktop')
sha256sums=('40e43fbc983e1cfd1ea32c852918ebce88d243f7ed943031696bdc7e01e55784'
            '8094dd526fcb3bd67913a20224fa8c167068d58b8e0ba51b74e8b74c23f73026')

build() {
  cd "$_pkgname"
  npm install
  export NODE_ENV=production
  npm run build
  node_modules/.bin/electron-builder --linux dir -p never
}

package() {
  cd "$srcdir/$_pkgname"
  install -d "$pkgdir/opt/"
  cp -dr --no-preserve=ownership "bin/linux/x64/linux-unpacked" "$pkgdir/opt/$pkgname"
  
  install -Dm644 -t "$pkgdir/usr/share/applications" "$srcdir/$pkgname.desktop"
  
  install -Dm644 "build/icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname/LICENSE" LICENSE
}
 
