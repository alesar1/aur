# Maintainer: Bruce Zhang
pkgname=postman
pkgver=7.16.0
pkgrel=1
pkgdesc='Build, test, and document your APIs faster'
arch=('x86_64')
url='https://www.getpostman.com/downloads/'
license=('custom:Postman EULA')
depends=('electron4')
provides=('postman')
conflicts=('postman-bin')
options=('!strip')
source_x86_64=(
  "$pkgname-$pkgver-x86_64.orig.tar.gz::https://dl.pstmn.io/download/version/$pkgver/linux64"
)
source=(
  "EULA.pdf::https://www.getpostman.com/terms/Postman_EULA_May_2018.pdf"
  "postman.desktop"
  "postman.sh"
)
sha1sums=('0b6867e4ff852b42420ab6aa55d2a563cb2006c7'
          '35194ee810e13d3a21f224c6d46104fc201631c1'
          'a05406aa53b310b183b98cd70ff64c4d09e95d50')
sha1sums_x86_64=('fdfd6938d00c8f0bd6213d4a5951e9d219c017a2')

package() {
  cd "$srcdir/Postman/app/resources/app"

  # Install Postman app resource
  find . -type f -exec install -Dm644 {} "$pkgdir/usr/share/postman/app/{}" \;

  # Install bin
  install -Dm755 "$srcdir/postman.sh" "$pkgdir/usr/bin/postman"

  # Install desktop
  install -Dm755 "$srcdir/postman.desktop" "$pkgdir/usr/share/applications/postman.desktop"

  # Install icons & eula
  install -Dm644 "$srcdir/Postman/app/resources/app/assets/icon.png" "$pkgdir/usr/share/icons/hicolor/128x128/apps/postman.png"
  install -Dm644 "$srcdir/EULA.pdf" "$pkgdir/usr/share/licenses/postman/EULA.pdf"
}
