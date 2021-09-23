# Contributor : chrisl echo archlinux@c2h0r1i2s4t5o6p7h8e9r-l3u4n1a.com|tr -d '[0-9]'

pkgname=ares
pkgver=2.5.7.3083
pkgrel=1
pkgdesc="A free open source file sharing program that enables users to share any digital file including images, audio, video, software, documents, etc. (via wine)"
arch=(i686 x86_64)
url="https://aresgalaxy.io/"
license=('GPL')
depends=('wine')
makedepends=(p7zip)
_version=257
_filename="aresregular"$_version"_installer.exe"
source=(ares.sh ares.desktop ares.xpm https://aresgalaxy.io/$_filename)
md5sums=('c7bc3239f0a3f6e001942823f882bdcb'
         '7c3aba1d0d98002f89d3d0eb68ed3703'
         'f89b51f21633e02c9017222b33544c1b'
         '84601a3b742e08b5373e65718144631d')

noextract=()
options=(!strip)

build() {
  cd $srcdir/
  7z x -o $pkgname $_filename
}

package() {
  cd $srcdir/

  install -dm755 $pkgdir/usr/share/
  cp -R $pkgname $pkgdir/usr/share/$pkgname
  find $pkgdir/usr/share/$pkgname -type d -exec chmod 755 "{}" \;
  find $pkgdir/usr/share/$pkgname -type f -exec chmod 644 "{}" \;
  install -dm755 $pkgdir/usr/bin
  install -dm755 $pkgdir/usr/share/applications
  install -dm755 $pkgdir/usr/share/pixmaps

  install -m755 $pkgname.sh $pkgdir/usr/bin/$pkgname
  install -m644 $pkgname.desktop $pkgdir/usr/share/applications
  install -m644 $pkgname.xpm $pkgdir/usr/share/pixmaps
}
