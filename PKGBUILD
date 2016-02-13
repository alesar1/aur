# Maintainer: Your Name <youremail@domain.com>
pkgname=flatcam
_pkgname=FlatCAM
pkgver=8.4.1
pkgrel=1
pkgdesc="Generates CNC gcode from 2D PCB files (Gerber/Excellon/SVG)"
arch=('any')
url="flatcam.org"
license=('MIT')
depends=('python2-simplejson' 'python2-pyqt4' 'python2-scipy' 'python2-matplotlib' 'python2-shapely' 'python2-rtree')

source=("https://bitbucket.org/jpcgt/$pkgname/downloads/$_pkgname-$pkgver.zip"
		"$pkgname"
		"$pkgname.desktop")
md5sums=('c22318217a7c2383e1581487d3fd6404'
         '80700f0bb07c959dc3019d9664472387'
         'e6496ad0b956d83fbe0e28a3b94e6c4f')



build() {
	cd "$_pkgname-$pkgver"
	python2 -O -m py_compile *.py
}


package() {
	install -D -m755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
	install -D -m644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
	cd "$_pkgname-$pkgver"
	install -D -m644 "share/flatcam_icon256.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	
	rm -r *.sh doc FlatCAM_GTK
	mkdir -p "${pkgdir}/opt/$pkgname"
	cp -r * "${pkgdir}/opt/$pkgname"
}
