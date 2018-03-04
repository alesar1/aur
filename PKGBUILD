# Maintainer: Jan Rydzewski <flegmer@gmail.com>

pkgname=(morfeusz2 python2-morfeuszbuilder python2-morfeusz2)
pkgver=20180204
pkgrel=2
pkgdesc="Morphological analyser Morfeusz"
arch=('x86_64')
url='http://sgjp.pl/morfeusz/'
license=('BSD')

makedepends=('python2' 'python2-setuptools' 'swig')

source=("LICENCE"
        "http://sgjp.pl/morfeusz/download/$pkgver/morfeusz-src-$pkgver.tar.gz")
sha256sums=("16c7ca379ef9fb6368c20d0ee71a9c83dd9c55e3b9fc34aade443c33d731d829"
            "663138c8a73f76b442582582f13a1946d4d70c6cb81a235e113126faa5365722")

function prepare {
	# build only python wrapper
	echo "add_subdirectory (python)" > "$srcdir/trunk/morfeusz/wrappers/CMakeLists.txt"
}

function build {
	cd "$srcdir/trunk"
	cmake \
		-D CMAKE_INSTALL_PREFIX=/usr \
		-D SKIP_DICTIONARY_BUILDING=1 \
		-D DEFAULT_DICT_NAME=sgjp \
		-D EMBEDDED_DEFAULT_DICT=0 \
		.
	make libmorfeusz morfeusz_analyzer morfeusz_generator morfeusz_analyzer_old
	make CXX_FLAGS=-std=c++11 test_runner
}

function package_morfeusz2 {
	depends=('gcc-libs')

	cd "$srcdir/trunk"
	make DESTDIR="$pkgdir/" install
	install -D -t "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENCE"
}

function package_python2-morfeuszbuilder {
	pkgdesc="Morfeusz dictionary builder"
	depends=('python2' 'python2-pyparsing')
	arch=('any')

	cd "$srcdir/trunk/fsabuilder"
	python2 setup.py install --root="$pkgdir/" --optimize=1
	install -D -t "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENCE"
}

function package_python2-morfeusz2 {
	pkgdesc="Morfeusz python wrapper"
	depends=('morfeusz2' 'python2')

	cd "$srcdir/trunk/morfeusz/wrappers/python"
	python2 setup.py install --root="$pkgdir/" --optimize=1
	install -D -t "$pkgdir/usr/share/licenses/$pkgname" "$srcdir/LICENCE"
}
