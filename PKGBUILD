# Maintainer: tioguda <tioguda@gmail.com>
# Contributor: Rafael Fontenlle <rafaelff@gnome.org>

pkgname=warsaw-bin
pkgver=1.12.13.8
pkgrel=1
pkgdesc="Banking security tool developed by GAS Tecnologia"
arch=(i686 x86_64)
url="http://www.dieboldnixdorf.com.br/warsaw"
license=('custom')
depends=('procps-ng' 'python2' 'python2-mini-amf' 'python2-unicodecsv' 'python-gpgme' 'python2-pyopenssl' 'openssl' 'nss' 'zenity' 'gdk-pixbuf2' 'pango' 'glib2' 'libx11' 'libstdc++296')
conflicts=('warsaw')
provides=('warsaw')
options=(!strip)
source_i686=(https://cloud.gastecnologia.com.br/gas/diagnostico/warsaw_setup_32.deb)
source_x86_64=(https://cloud.gastecnologia.com.br/gas/diagnostico/warsaw_setup_64.deb)
sha256sums_i686=('f5be8314329edc47de71a377296b76d275255eb56f98a2e34eb32002ba0074cf')
sha256sums_x86_64=('89467d4be8a6cf7b3c0301022519eccd1d5c2ab0a161be931cad9b5863283ac6')

prepare() {
	tar -xJf data.tar.xz
}

package() {
	cd "$srcdir"
	# dump etc files to /etc
	cp -r etc "$pkgdir"
	# dump usr files to /usr
	cp -r usr "$pkgdir"
	# dump lib files to /lib
	cp -r lib "$pkgdir/usr/"
    
	# Enable executable permission for binaries
	chmod +x "$pkgdir/usr/local/bin/warsaw/core"
	chmod +x "$pkgdir/usr/local/bin/warsaw/migratecache"
	chmod +x "$pkgdir/usr/local/bin/warsaw/wsatspi"

	# Set paths in comply with Arch Packaging Standards
	# i.e. Use /usr/bin, /etc, and /tmp
	sed -i 's|/usr/local/bin|/usr/bin|' \
	  "$pkgdir/etc/xdg/autostart/warsaw.desktop"
  
	# Install copyright and license in proper directory
	install -Dm644 "$pkgdir"/usr/share/{doc,licenses}/warsaw/copyright
	rm -rf "$pkgdir/usr/share/doc"
}
