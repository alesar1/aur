# Contributor : chrisl echo archlinux@c2h0r1i2s4t5o6p7h8e9r-l3u4n1a.com|sed 's/[0-9]//g'

pkgname=ares
pkgver=2.4.6.3072
pkgrel=2
pkgdesc="A free open source file sharing program that enables users to share any digital file including images, audio, video, software, documents, etc. (via wine)"
arch=(i686 x86_64)
url="https://aresgalaxy.io/"
license=('GPL')
depends=('wine')
makedepends=(p7zip)
source=(ares.sh ares.desktop ares.xpm https://aresgalaxy.io/aresregular246_installer.exe)
md5sums=('c7bc3239f0a3f6e001942823f882bdcb'
         '22084eb3acd121ef811180f7f238047c'
         'f89b51f21633e02c9017222b33544c1b'
         '17a4d80bd942e53a183aed27136c7337')

noextract=()
options=(!strip)

build() {
  cd $srcdir/
  7z x -o$pkgname aresregular246_installer.exe
}
package() {
  cd $srcdir/

  install -d -m755 $pkgdir/usr/share/
  cp -R $pkgname $pkgdir/usr/share/$pkgname
  find $pkgdir/usr/share/$pkgname -type d -exec chmod 755 "{}" \;
  find $pkgdir/usr/share/$pkgname -type f -exec chmod 644 "{}" \;
  install -d -m755 $pkgdir/usr/bin
  install -d -m755 $pkgdir/usr/share/applications
  install -d -m755 $pkgdir/usr/share/pixmaps

  install -m755 $pkgname.sh $pkgdir/usr/bin/$pkgname
  install -m644 $pkgname.desktop $pkgdir/usr/share/applications
  install -m644 $pkgname.xpm $pkgdir/usr/share/pixmaps
}

