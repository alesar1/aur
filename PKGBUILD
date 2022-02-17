# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>
pkgname=m3dviewer
pkgver=2.0.326
pkgrel=1
pkgdesc='Viewer for mozaik3D animations'
arch=(x86_64)
url='https://www.mozaweb.com/mozaik3D'
license=('unknown')
depends=(glu gtk2)
DLAGENTS=('https::/usr/bin/curl -qgb "" -fLC - --retry 3 --retry-delay 3 -A Mozilla -o %o %u')
source=("https://download.mozaweb.com/m3dviewer/m3dViewer_${pkgver}_x64.tar.gz")
sha256sums=('8df91112fc0cad3fdf66dee5f4d787eab10d9fa0f60981c8b224f5623a058e30')

package() {
	install -Dm644 "usr/share/applications/m3d.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
	install -Dm644 "usr/share/pixmaps/$pkgname.png"     "$pkgdir/usr/share/pixmaps/$pkgname.png"
	install -dm755                                      "$pkgdir/usr/bin"
	ln -sf   "../../opt/mozaik/$pkgname/$pkgname.amd64" "$pkgdir/usr/bin/$pkgname"
	cp -a "opt" "$pkgdir"
}

# vim: ts=2 sw=0 noet
