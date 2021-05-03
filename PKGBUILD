# Maintainer: Ivan Zenin <i.zenin@gmx.com>

pkgname=wxbase
pkgver=3.1.5
pkgrel=1
pkgdesc="wxWidgets base libraries for no X install (3.x branch stable version)"
arch=("i686" "x86_64")
url="http://wxwidgets.org"
license=("custom:wxWindows")
provides=("wxbase")
conflicts=("wxgtk" "wxwidgets")
source=("https://github.com/wxWidgets/wxWidgets/releases/download/v${pkgver}/wxWidgets-${pkgver}.tar.bz2")
sha1sums=("725455d6324baa808259b56a42199237327e0638")

build() {
  cd "${srcdir}/wxWidgets-${pkgver}"
  ./configure \
 	  --prefix=/usr \
	  --libdir=/usr/lib \
	  --disable-gui \
	  --disable-compat28 \
	  --enable-unicode \
	  --disable-precomp-headers
  make
}

package() {
  cd "${srcdir}/wxWidgets-${pkgver}"
  make DESTDIR="${pkgdir}" install
  find "${pkgdir}" -type d -name .git -exec rm -r '{}' +
  install -D -m644 docs/licence.txt "${pkgdir}/usr/share/licenses/wxWidgets/LICENSE"
}
