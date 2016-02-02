#Maintainer: Michael Straube <m.s.online gmx.de>

pkgname=alterego
# could not find any version number, so using 1.0
pkgver=1.0
pkgrel=1
pkgdesc="You control a hero who has a phantom twin, his alter ego."
url="http://www.retrosouls.net/?page_id=614"
arch=('any')
license=('custom:free')
depends=('mono' 'sdl_mixer')
source=('http://www.retrosouls.net/files/AlterEgo_Linux.tar.gz'
        'alterego.desktop'
        'ae1-150x150.png')
md5sums=('d018fbfdc0b15b8ac090e918c14b58aa'
         '46d530b31311a689932dd2a9025dd2a3'
         'f3ed74ec7da62c8f88f81a7c2012d040')

package() {
  cd "$srcdir/AlterEgo_Linux/AlterEgo"

  mkdir -p "$pkgdir"/usr/{bin,share/games/alterego}
  rm AlterEgo.sh
  cp -r * "$pkgdir/usr/share/games/alterego/"

  # game does not run without world writable bit set :-/
  find ${pkgdir} -type f -exec chmod 666 {} \;

  printf "%s\n%s\n" \
    '#!/bin/bash' \
    'cd /usr/share/games/alterego' \
    'exec mono ./AlterEgo.exe "$@"' \
    > "$pkgdir/usr/bin/alterego"

  chmod 755 "$pkgdir/usr/bin/alterego"

  install -Dm644 "$srcdir/alterego.desktop" "$pkgdir/usr/share/applications/alterego.desktop"
  install -Dm644 "$srcdir/ae1-150x150.png" "$pkgdir/usr/share/pixmaps/alterego.png"
}
