# Contributor: Adam Nielsen <malvineous@shikadi.net>
# Contributor: Vitaliy Berdinskikh <skipper13@archlinux.org.ua>
# Contributor: Andrea Agosti <cifvts@gmail.com>
# Contributor: Viliam Pucik <viliam.pucik@gmail.com>
# Maintainer: Adam Nielsen <malvineous@shikadi.net>

_pkgname=instantclient-odbc
pkgname=oracle-${_pkgname}
pkgver=19.8.0.0.0
_urlver=19800
_unzippath=instantclient_19_8
pkgrel=1
pkgdesc="Additional libraries for enabling ODBC applications with Instant Client"
arch=('x86_64')
url="http://www.oracle.com/technetwork/database/features/instant-client/"
license=('custom:OTN')
depends=(oracle-instantclient-basic=$pkgver)
replaces=('instantclient-odbc')
options=(!strip)

# Fail if retrieval is attempted of any of the manual:// URLs
DLAGENTS+=('manual::/usr/bin/false');

# These are the only files we want to include in the source package
source=(LICENSE
        "https://download.oracle.com/otn_software/linux/instantclient/${_urlver}/${_pkgname}-linux.x64-${pkgver}dbru.zip")
md5sums=('2d62e22e4f2d7e6d220fafde0f692a7d'
         'e6ca4ca73ac613c6c06863d73b9869e0')
sha256sums=('f904a30b07ddf7806a33620f93b94c3d315154d26a371ece48695bb3555064a2'
            '979d191a73d5500f2deafc75dc5bf97d2274a1390ba1ffdb09dca3631f1fe431')

plain "If you run into any problems downloading the files, get the .zip version from"
plain "Oracle and place them in the PKGBUILD directory then re-run makepkg:"
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
	local basedir="$srcdir/${_unzippath}"

	install -d "$pkgdir/usr/lib"
	# Copy files but not symlinks
	install -m 755 -t "$pkgdir/usr/lib" `find "$basedir" -type f -name '*.so*'`

	install -d "$pkgdir/usr/share/oracle"
	install -m 755 -t "$pkgdir/usr/share/oracle" "$basedir/"*.sh

	install -d "$pkgdir/usr/share/doc/oracle"
	install -m 644 -t "$pkgdir/usr/share/doc/oracle" "$basedir/"*README*

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

}
