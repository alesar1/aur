# Maintainer: Mario Finelli <mario at finel dot li>
# Contributor: Hubert Maraszek <marach5 at gmail dot com>

pkgname=mp3tag
pkgver=3.02
pkgrel=1
pkgdesc="The universal tag editor."
arch=('i686' 'x86_64')
url="https://www.mp3tag.de/en/"
license=('custom')
depends=('wine')
makedepends=('p7zip')
source=(mp3tag
        LICENSE
        mp3tag.desktop
        mp3tag.png
        "https://download.mp3tag.de/${pkgname}v${pkgver/./}setup.exe")
sha256sums=('5f747773cb390d82c78e830d35216fa2ecac91f955b09bd9e197a42c62a14ce8'
            '18967b634e69d8ccb08383d42a49ced3c0b11c632649a15c3a6a55e3a27f62e9'
            'bc0c7b8a7a9f9ee92dfe2f1880ef5d91920473713b5d60e4afa361d69a446798'
            'a3e09f7cda34bc31b3b5b1d7cf2010c3b17847c141ef5a074472eb72f760f6bf'
            '059cb10ad1a7ed163f84d851c60ef612479f58c02b10f9d85bc619ec0a275650')
options=('!strip')

prepare() {
  7z -y -o"$srcdir/$pkgname-$pkgver" x "$srcdir/${pkgname}v${pkgver/./}setup.exe"
}

package() {
  cd "$pkgname-$pkgver"

  install -dm755 "$pkgdir/usr/share/$pkgname"
  cp -a * "$pkgdir/usr/share/$pkgname"
  rm -rf "$pkgdir/usr/share/mp3tag/\$PLUGINSDIR" "$pkgdir/usr/share/mp3tag/\$R0"
  find "$pkgdir/usr/share/$pkgname" -type d -exec chmod 755 "{}" \;
  find "$pkgdir/usr/share/$pkgname" -type f -exec chmod 644 "{}" \;

  install -D -m755 "$srcdir/mp3tag" "$pkgdir/usr/bin/mp3tag"
  install -D -m644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -D -m644 "$srcdir/mp3tag.png" "$pkgdir/usr/share/pixmaps/mp3tag.png"
  install -D -m644 "$srcdir/mp3tag.desktop" "$pkgdir/usr/share/applications/mp3tag.desktop"
}
