# Maintainer: Joan Figueras <ffigue at gmail dot com>
# Contributor: Luca Contini <jkd[dot]luca[at]gmail[dot]com>

pkgname=pacmanager-git
_pkgname=${pkgname%-git}
pkgver=4.5.5.8
pkgrel=2
arch=('any')
license=('GPL3')
pkgdesc="Perl Auto Connector PAC Manager. GIT version with fixed FreeRDP interface."
url="https://github.com/perseo22/pacmanager"
depends=('gconf-perl' 'glade-perl' 'openssh' 'perl-crypt-blowfish' 'perl-gnome2-vte' 'perl-expect' 'perl-crypt-rijndael' 'perl-gtk2-ex-simple-list' 'perl-io-stty' 'perl-io-tty' 'perl-net-arp' 'perl-yaml' 'perl-crypt-cbc' 'perl-gtk2-unique' 'perl-socket6' 'uuid')
makedepends=('git')
conflicts=(pacmanager-bin)
source=("git+https://github.com/perseo22/pacmanager.git"
       "0001-xfreerdp-new-interface.patch"
       "0002-xfreerdp-new-interface.patch"
       "0003-xfreerdp-new-interface.patch")
md5sums=('SKIP'
         'd7350164daad682396c3278d6c40bb9d'
         'cc4b26825efcf1d6c2aeea2b92531c40'
         'ac48e3d9ee6b0694a42c123498b06c64')

prepare() {
	cd ${srcdir}/${_pkgname}
	# Apply patches for new FreeRDP interface
	patch -Np1 -i $srcdir/0001-xfreerdp-new-interface.patch
	patch -Np1 -i $srcdir/0002-xfreerdp-new-interface.patch
	# The third patch is done by me
	patch -Np1 -i $srcdir/0003-xfreerdp-new-interface.patch
}

build() {
	cd ${srcdir}/${_pkgname}
	# To ensure Vte is not a problem, we will compile it!
	# Reference: https://sourceforge.net/p/pacmanager/bugs/233/
	wget http://search.cpan.org/CPAN/authors/id/X/XA/XAOC/Gnome2-Vte-0.11.tar.gz
	tar xfz Gnome2-Vte-0.11.tar.gz
	cd Gnome2-Vte-0.11
	perl Makefile.PL
	make
}

package() {
	cd ${srcdir}/${_pkgname}
	mkdir -p $pkgdir/{opt/pac,usr/share/pixmaps,usr/share/man/man1,usr/share/applications,usr/bin,etc/bash_completion.d}
	cp -rp res utils lib $pkgdir/opt/pac/
	cp -p res/pac_bash_completion $pkgdir/etc/bash_completion.d
	cp res/pac64x64.png $pkgdir/usr/share/pixmaps/pac.png
	ln -sf /opt/pac/pac $pkgdir/usr/bin/pac
	cp res/pac.desktop $pkgdir/usr/share/applications/
	gzip -c res/pac.1 > $pkgdir/usr/share/man/man1/pac.1.gz
	cp -p pac $pkgdir/opt/pac/pac
	chmod 755 $pkgdir/opt/pac/pac
	# Copy patched Vte.so
	cp -p Gnome2-Vte-0.11/blib/arch/auto/Gnome2/Vte/Vte.so $pkgdir/opt/pac/lib/ex/vte64/auto/Gnome2/Vte/
}


