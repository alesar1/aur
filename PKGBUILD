# Maintainer: Ashwin Vishnu <ashwinvis+arch at pm D0T me>

pkgname=textidote-bin
_pkgname=textidote
pkgver=0.8.2
pkgrel=1
pkgdesc="Spelling, grammar and style checking on LaTeX documents"
arch=('any')
url="https://github.com/sylvainhalle/textidote"
license=('GPL')
provides=('textidote')
depends=('java-runtime-headless>=8')
optdepends=('libnotify: Error messages for textidote-desktop')

source=(
  "https://github.com/sylvainhalle/textidote/releases/download/v${pkgver}/textidote_${pkgver}_all.deb"
  "textidote-desktop"
  "textidote.desktop")
sha256sums=('47b74937d338cfb93d16d1016d64da70d0f83294d12663804df9b4017683e37f'
            'feb003c3f2c55096fef7577fc8da9b5f4c489697f4eda21a199d408126524bbb'
            '087ea7481edecff88c27af50766b3691dfbbdee33dc5a9a97fb767fde6711c6a')

prepare() {
 cd "$srcdir"
 bsdtar xf data.tar.xz
 find -name "*~" -delete
 # Remove insecure RPATH
 # chrpath --delete "opt/estmob/sendanywhere/sendanywhere"
}

package() {
  # Create directories
  install -d "$pkgdir"/{etc/bash.completion.d,usr/bin,usr/share/{man/man1,applications},opt/$_pkgname}

  install -Dm644 etc/bash.completion.d/$_pkgname "$pkgdir"/etc/bash.completion.d/
  install -Dm755 usr/local/bin/$_pkgname "$pkgdir"/usr/bin/
  install -D opt/$_pkgname/$_pkgname.{jar,zsh} "$pkgdir"/opt/$_pkgname/
  install -D opt/$_pkgname/${_pkgname}-icon.svg "$pkgdir"/opt/$_pkgname/
  install -D usr/share/man/man1/$_pkgname.1 "$pkgdir"/usr/share/man/man1/

  # Extra command to launch in browser
  install -Dm755 $_pkgname-desktop "${pkgdir}"/usr/bin/

  # Add it to desktop
  install -Dm755 $_pkgname.desktop "${pkgdir}"/usr/share/applications/
}
