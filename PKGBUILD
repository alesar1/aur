# Maintainer:  Michael Lass <bevan@bi-co.net>
# Contributor: Yichao Yu <yyc1992@gmail.com>
# Contributor: David Manouchehri <david@davidmanouchehri.com>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=eagle
pkgver=7.6.0
pkgrel=1
pkgdesc="A powerful suite for schematic capture and printed circuit board design (aka eaglecad)"
arch=('i686' 'x86_64')
url="http://www.cadsoft.de/"
license=('custom')
depends=(
  'desktop-file-utils'
  'fontconfig'
  'libcups'
  'libxcursor'
  'libxi'
  'libxrandr'
  'shared-mime-info'
)
options=('!emptydirs')
source=($pkgname.desktop
        $pkgname.sh
        $pkgname.xml)
source_x86_64=($pkgname-$pkgver.run::ftp://ftp.cadsoft.de/$pkgname/program/${pkgver%.*}/$pkgname-lin64-$pkgver.run)
source_i686=($pkgname-$pkgver.run::ftp://ftp.cadsoft.de/$pkgname/program/${pkgver%.*}/$pkgname-lin32-$pkgver.run)
sha256sums=('86307352ad81aa0dee0dfe58ab6799b06200d489a8f6cef77845e772202d20a6'
            '0e38128c87ad72b692e16d5be75b7b21182e4e89caeadfc2bb285588c060176c'
            '293ef717030e171903ba555a5c698e581f056d2a33884868018ab2af96a94a06')
sha256sums_i686=('0f3469e201a192161e0c7f95d3f12a5e51b6d2bd88d00c57a00e00fb3853dc3b')
sha256sums_x86_64=('1a794c90b7fc37180c3a9e45904559083e4479bf91f0f7db02ab6799db74acf2')

package() {
  cd "$srcdir"

  msg2 "Extracting package content (this may take a while)..."
  install -dm755 "$pkgdir/opt"
  sed -e '1,/^__DATA__$/d' $pkgname-$pkgver.run | \
      tar --no-same-owner -xjC "$pkgdir/opt"

  msg2 "Fixing path name and permission..."
  mv "$pkgdir/opt/$pkgname-$pkgver" "$pkgdir/opt/$pkgname"
  chmod -R a-s "$pkgdir/opt/$pkgname/"

  cd "$srcdir"

  msg2 "Installing wrapper scripts..."
  install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$pkgname.desktop" \
          "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 "$pkgname.xml" \
          "$pkgdir/usr/share/mime/packages/$pkgname.xml"
  install -dm755 "$pkgdir"/usr/share/{man/man1,licenses/$pkgname}
  ln -sf /opt/$pkgname/doc/$pkgname.1 \
     "$pkgdir/usr/share/man/man1/$pkgname.1"
  ln -sf /opt/$pkgname/doc/license_en.txt \
     "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  # copy icon
  install -Dm644 "$pkgdir/opt/$pkgname/bin/eagleicon50.png" \
          "$pkgdir/usr/share/pixmaps/eagle.png"
}
