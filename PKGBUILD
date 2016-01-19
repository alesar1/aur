# Contributor: Alexander Mamzikov <av.mamzikov@gmail.com>

pkgname=transgui
pkgver=5.0.1
pkgrel=4
pkgdesc="Feature rich cross platform front-end to remotely control a Transmission Bit-Torrent client daemon via its RPC protocol. Transmission Remote GUI is faster and has more functionality than the built-in Transmission web interface."
arch=('i686' 'x86_64')
url="http://sourceforge.net/projects/transgui"
license=('GPL2')
groups=()
depends=(atk
bzip2
cairo
expat
fontconfig
freetype2
gdk-pixbuf2
glib2
glibc
graphite
gtk2
harfbuzz
libdatrie
libdrm
libffi
libpng
libthai
libx11
libxau
libxcb
libxcomposite
libxcursor
libxdamage
libxdmcp
libxext
libxfixes
libxi
libxinerama
libxrandr
libxrender
libxshmfence
libxxf86vm
mesa
mesa-libgl
pango
pcre
pixman
wayland
zlib
)
makedepends=('lazarus>=1.0')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=(http://sourceforge.net/projects/${pkgname}/files/${pkgver}/${pkgname}-${pkgver}-src.zip
    ${pkgname}.desktop)
noextract=()
md5sums=('471ed1f3f75a0ebcc9d3a0cb72f2a61c'
         '3c94c959db98c86878c57e1ab5019810') #generate with 'makepkg -g'

build() {
  cd "$srcdir/TransGUI"
  make
}

package()
{
  cd "${srcdir}/TransGUI"
  install -D ${pkgname} "${pkgdir}/usr/bin/${pkgname}"
  install -d lang "${pkgdir}/usr/share/${pkgname}/lang"
  install -D -m644 lang/* "${pkgdir}/usr/share/${pkgname}/lang/"
  install -D -m644 transgui.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -D -m644 ../${pkgname}.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -d -m 755 ${pkgdir}/usr/share/doc/${pkgname}
  install -D -m 644 readme.txt history.txt LICENSE.txt ${pkgdir}/usr/share/doc/${pkgname}
}
