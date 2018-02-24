# Maintainer: Jonathon Fernyhough <jonathon at_manjaro dot_org>
# Contributor: Gaming4JC
# Previous Maintainer: Ionut Biru <ibiru@archlinux.org>

pkgname=gtkhtml4-git
_pkgbasename=gtkhtml
pkgver=latest
pkgrel=1
pkgdesc="A lightweight HTML renderer/editor widget for GTK3"
arch=(i686 x86_64)
license=('GPL')
provides=("${pkgname/-git/}")
conflicts=("${pkgname/-git/}")
depends=('cairo>=1.10.0'
         'enchant>=2.0'
         'gnome-common>=3.2.0'
         'gnome-icon-theme>=2.22'
         'gtk3>=3.2.0'
         'iso-codes>=0.49')
makedepends=('intltool')
url='https://github.com/GNOME/gtkhtml'
source=("${pkgname/-git/}::git+https://github.com/GNOME/${_pkgbasename}.git"
        'enchant-2.patch')
sha256sums=('SKIP'
            '2b78f071f7893e19618959443f3775bd435941a37ea9198b2fe72b596c205891')

prepare() {
	cd "${pkgname/-git/}"
	patch -Np0 < ../enchant-2.patch
}

build() {
	cd "${pkgname/-git/}"
	./autogen.sh  --prefix=/usr --sysconfdir=/etc \
		--libexecdir=/usr/lib/gtkhtml4 \
		--localstatedir=/var --disable-static
	./configure
	make
}

package() {
	cd "${pkgname/-git/}"
	make DESTDIR="$pkgdir" install
}

