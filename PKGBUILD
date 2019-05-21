pkgbase=ninfs
pkgname=(ninfs ninfs-gui)
pkgver=1.5
pkgrel=1
pkgdesc="FUSE filesystem Python scripts for Nintendo console files"
arch=($CARCH)
license=(MIT)
url='https://github.com/ihaveamac/ninfs'
makedepends=('python-setuptools' 'python-pycryptodomex' 'unzip')
options=(!strip)
_source=("${pkgbase}-${pkgver}-src.zip"{,.asc}"::${url}/releases/download/v${pkgver}/${pkgbase}-${pkgver}-src.zip"{.asc,''})
source=(${_source[@]:1:2})
sha256sums=('e6c5d77cb943f7aa8160f5012c30c7fdd56295f04e8927e5d4116e8e78e230a7'
            'SKIP')
validpgpkeys=('E6284E1064CC2199B304B68990725113CA578EAA')
noextract=("${pkgbase}-${pkgver}-src.zip")

build() {
	unzip "${srcdir}/${pkgbase}-${pkgver}-src.zip" -d "${srcdir}/ninfs"
	cd "${srcdir}/ninfs"
	python setup.py build
}

package_ninfs() {
	depends=("python>=3.6.1" "python-pycryptodomex" "fuse2" "openssl>=1.1")
	conflicts=("fuse-3ds" "fuse-3ds-git" "ninfs-git")
	replaces=("fuse-3ds")
	provides=("fuse-3ds")
	cd "${srcdir}/ninfs"
	python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
	rm -f "$pkgdir/usr/bin/ninfs"
	rm -rf "$pkgdir/usr/share"
}

package_ninfs-gui() {
	depends=("ninfs=$pkgver-$pkgrel" "python-appjar" "tk")
	conflicts=("fuse-3ds-gui-git" "fuse-3ds-gui" "ninfs-gui-git")
	replaces=("fuse-3ds-gui")
	provides=("fuse-3ds-gui")
	install="NinFSGUI.install"
	cd "${srcdir}/ninfs"
	python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
	rm -f "$pkgdir/usr/bin/mount_"*
	rm -rf "$pkgdir/usr/lib"
	PYTHONPATH="$pkgdir/usr:$PYTHONPATH" python -mninfs --install-desktop-entry "$pkgdir/usr/share"
}
