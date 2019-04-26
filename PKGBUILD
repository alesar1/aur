# Contributor: Adam Nielsen <malvineous@shikadi.net>
# Contributor: Vitaliy Berdinskikh ur6lad[at]archlinux.org.ua
# Contributor: Andrea Agosti <cifvts@gmail.com>
# Contributor: Charles Clement <caratorn@gmail.com>
# Contributor: Geraldo Augusto Vecchiato <geraldoav@gmail.com>
# Maintainer: Adam Nielsen <malvineous@shikadi.net>

_pkgname=instantclient-basic
pkgname=oracle-${_pkgname}
pkgver=18.5.0.0.0
pkgrel=1
pkgdesc="Light replacement for the Oracle client (files to run OCI, OCCI and JDBC-OCI programs)"
arch=('x86_64')
url="http://www.oracle.com/technetwork/database/features/instant-client/"
license=('custom:OTN')
depends=('gcc-libs' 'libaio')
replaces=('instantclient-basic' 'instantclient-basiclite')
options=(!strip)

# Fail if retrieval is attempted of any of the manual:// URLs
DLAGENTS+=('manual::/usr/bin/false');

# These are the only files we want to include in the source package
source=(LICENSE
        oracle.sh
        "manual://${_pkgname}-linux.x64-${pkgver}dbru.zip")
md5sums=('2d62e22e4f2d7e6d220fafde0f692a7d'
         '784005aa31cb56bb2303179d98fccd8e'
         '15a3811c765bee079cc0441bf1ac2892')
sha256sums=('f904a30b07ddf7806a33620f93b94c3d315154d26a371ece48695bb3555064a2'
            '36b5ab97950f1667403dd9b59c3cad25d8f9e457702feaece835d1bff7c971c9'
            '9dae6778e2d7e0845d71f3383bafe26fdca0e55fc86f07f1d302dc97cf6d85d7')

msg "Warning: This software cannot be downloaded automatically."
plain "You will need to sign up for an Oracle account and download the software from"
plain "Oracle directly.  Place the downloaded file in the same directory as the"
plain "PKGBUILD and re-run makepkg."
plain ""
plain "The source .zip files can be downloaded from:"
plain ""
plain "  http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html"
plain ""
plain "Alternatively, unofficial prebuilt Arch packages are available by adding the"
plain "following lines to /etc/pacman.conf, if you agree to the Oracle licence[1]:"
plain ""
plain "  [oracle]"
plain "  SigLevel = Optional TrustAll"
plain '  Server = http://linux.shikadi.net/arch/$repo/$arch/'
plain ""
plain "Then run 'pacman -Sys oracle' to see available packages."
plain ""
plain "[1]: http://www.oracle.com/technetwork/licenses/instant-client-lic-152016.html"
plain ""

package() {
	cd "$srcdir/instantclient_18_5/"
	install -d "$pkgdir/usr/bin"
	install -d "$pkgdir/usr/lib"
	install -m 755 -t "$pkgdir/usr/bin" adrci genezi uidrvci
	# Copy files but not symlinks
	install -m 755 -t "$pkgdir/usr/lib" `find . -type f -name '*.so*'`
	install -m 644 -t "$pkgdir/usr/lib" *.jar

	# Copy across the script to set environment variables
	install -Dm755 "$srcdir/oracle.sh" "$pkgdir/etc/profile.d/oracle.sh"

	# create required symlinks
	cd "$pkgdir/usr/lib" || return 1
	local lib link
	for lib in *.so*; do
		link=$lib
		while [[ ${link#*.} != so ]]; do
			link=${link%.*}
			ln -s $lib $link
		done
	done

	install -Dm644 "$srcdir/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/LICENSE" || return 1
}
