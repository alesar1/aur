pkgname=halcyon
pkgver=0.9.26.6031
pkgrel=1
pkgdesc="InWorldz Halcyon 3d virtual reality world simulator"
arch=(any)
url="https://github.com/InWorldz/$pkgname"
license=("BSD")
depends=(mono mariadb sqlite whip-server)
makedepends=(doxygen)
provides=(opensimulator)
source=("https://github.com/InWorldz/$pkgname/archive/v$pkgver.tar.gz"
"$pkgname.sh"
"hc-database.sh")
md5sums=('0ecc6b6518b4602edbfae261c4cb9c26'
         '86977d028c882ee1e9615f4b8d1a68e6'
         'ee63724ab4ed7ba836ea6205689b0029')

build() {
	cd $pkgname-$pkgver
	./runprebuild.sh
	xbuild Halcyon.sln
	doxygen doc/doxygen.conf
}

package() {
	install -Dm755 $pkgname.sh "$pkgdir/usr/bin/$pkgname"
	install -m755 hc-database.sh "$pkgdir/usr/bin/hc-database"
	cd $pkgname-$pkgver
	mkdir -p "$pkgdir/srv/inworldz"
	cp -r bin/* "$pkgdir/srv/inworldz/"
	chmod -R 644 "$pkgdir/srv/inworldz"
	mkdir -p "$pkgdir/usr/share/$pkgname"
	cp -r share/* "$pkgdir/usr/share/$pkgname/"
	chmod -R 644 "$pkgdir/usr/share/$pkgname"
	mkdir -p "$pkgdir/usr/share/doc/$pkgname/bot LSL Functions"
	mkdir -p "$pkgdir/usr/share/doc/$pkgname/html"
	cp -r "doc/bot LSL Functions/"* "$pkgdir/usr/share/doc/$pkgname/bot LSL Functions/"
	cp -r html/* "$pkgdir/usr/share/doc/$pkgname/html/"
	chmod -R 644 "$pkgdir/usr/share/doc/$pkgname"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	cd "$pkgdir/srv/inworldz"
	rm PhysX3*.dll
	rm Prebuild.exe
	rm aperture.exe
	rm cg*.dll
	rm cudart64_32_16.dll
	rm glut32.dll
	rm libapr*.dll
	rm libbulletnet.dll
	rm libcurl.dll
	rm libdb44d.dll
	rm libeay32.dll
	rm *.dylib
	rm *.so.*
	rm libssh2.dll
	rm msvc*.dll
	rm openjpeg*.dll
	rm sqlite3.dll
	rm ssleay32.dll
	rm zlib1.dll
}

# vim:set ts=2 sw=2 et:
