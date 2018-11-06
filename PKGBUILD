# Maintainer: Adrián Pérez de Castro <aperez@igalia.com>
# Maintainer: Alexandre Macabies <web+oss@zopieux.com>
#
pkgname=gn-git
pkgdesc='Meta-build system which generates Ninja build files'
pkgver=r1491.df15af47
pkgrel=1
license=('BSD')
arch=('x86_64' 'i686')
conflicts=('gn-bin')
provides=('gn')
depends=('gcc-libs')
makedepends=('python2' 'ninja' 'git')
url='https://gn.googlesource.com/gn'
source=("gn::git+${url}" gcc-support.patch)
sha512sums=('SKIP'
            '951cc9c43040fa8341e46e44390d9db654a504b3e1cce34a013806c59a29e28ab23cdb47518e96986ec12f8aa2f995da5beb44f981cada9eb9aebe6bc7621f1a')

pkgver () {
	export GIT_DIR="${startdir}/gn"
	printf "r%s.%s" "$(git --bare rev-list --count HEAD)" "$(git --bare rev-parse --short HEAD)"
}

prepare () {
	patch -p1 < gcc-support.patch
}

build () {
	cd gn
	CC=cc CXX=c++ AR=ar python2 build/gen.py --use-lto
	ninja -C out
}

package () {
	install -Dm755 gn/out/gn "${pkgdir}/usr/bin/gn"

	# Documentation
	install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" \
		gn/docs/*.md gn/README.md

	install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}/example" \
		gn/tools/gn/example/*.*
	install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}/example/build" \
		gn/tools/gn/example/build/*.*

	# Vim support
	local item
	for item in autoload ftplugin ftdetect syntax ; do
		install -Dm 644 -t "${pkgdir}/usr/share/vim/vimfiles/${item}" \
			"gn/tools/gn/misc/vim/${item}"/*.vim
	done
		
	# License
	install -m 644 -D gn/LICENSE \
		"${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
