# Maintainer: Marcel Unbehaun <f.rostze.ux at gmail dot com>
# previous work:
# Contributor: Anntoin Wilkinson <anntoin gmail com>
# Contributor: Nick B <Shirakawasuna at gmail _dot_com>
# Maintainer: SanskritFritz (gmail)

pkgname=torus-trooper
pkgver=0.22
pkgrel=1
url="http://www.asahi-net.or.jp/~cs8k-cyu/windows/tt_e.html"
pkgdesc="sticky 2D shooter"
license=('custom')
depends=(libbulletml gcc-d sdl sdl_mixer)
arch=('x86_64')
source=(http://deb.debian.org/debian/pool/main/t/$pkgname/torus-trooper_$pkgver.dfsg1.orig.tar.gz
    http://ftp.debian.org/debian/pool/main/t/$pkgname/torus-trooper_$pkgver.dfsg1-12.debian.tar.xz)
md5sums=('a88b2f2b0a6e4abccda657d83385f375'
         'cda3c10835840de4f9f67e8b1bbcc214')

prepare() {
  cd "$srcdir"/tt
  for i in $(cat ../debian/patches/series); do
    patch -p1 <../debian/patches/$i
  done
}

build() {
  cd "$srcdir"/tt
  make
}

package() {
  cd "$srcdir"/tt
  mkdir -p "${pkgdir}/usr/bin/"
  install -Dm 755 ${pkgname} -t "${pkgdir}/usr/bin/"
  mkdir -p "${pkgdir}/usr/share/games/$pkgname"

  find barrage -type f -exec install -D -m 644 {,"${pkgdir}/usr/share/games/$pkgname/"}{} \;
  find images -type f -exec install -D -m 644 {,"${pkgdir}/usr/share/games/$pkgname/"}{} \;
  find sounds -type f -exec install -D -m 644 {,"${pkgdir}/usr/share/games/$pkgname/"}{} \;

  install -Dm 644 "$srcdir/debian/$pkgname.xpm" "$pkgdir/usr/share/pixmaps/$pkgname.xpm"
  install -Dm 644 "$srcdir/debian/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
