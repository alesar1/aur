# Maintainer: Black Dragon <blackdrg at i2pmail dot org>
# Contributor: atterratio <atterratio at gmail dot com>

pkgname=imule
pkgver=2.3.3.3
pkgrel=3
pkgdesc="Anonymous P2P file sharing software"
arch=("i686" "x86_64")
url="http://www.imule.i2p/"
license=("GPL")
depends=("wxgtk" "crypto++")
optdepends=("i2p: anonymous routing")
source=("http://echelon.i2p/imule/2.3.3.3/iMule-${pkgver}-src.tbz")
md5sums=("fa2a2347063db98eb77d44fd3d4fcc8a")
export http_proxy=127.0.0.1:4444

build() {
	cd "${srcdir}/iMule-${pkgver}-src"
	sed "s/wxString::wxString/wxString/g" -i src/PrefsUnifiedDlg.cpp
	# See ./configure --help for more options, it may be necessary if you are using KDE or want to install additional utilities.
	./configure --prefix=/usr --disable-debug --enable-optimize --disable-ed2k \
	--enable-imule-gui --enable-imule-daemon --enable-utf8-systray --disable-maintainer-mode
	make
}

check() {
	cd "${srcdir}/iMule-${pkgver}-src"
	make -k check
}

package() {
	cd "${srcdir}/iMule-${pkgver}-src"
	make DESTDIR=${pkgdir} install
	#It's hack. If U know best way to not instal this desktop file tell me.
	rm ${pkgdir}/usr/share/applications/imulegui.desktop
}
