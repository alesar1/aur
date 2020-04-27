# Maintainer: Alex Dewar <a.dewar@sussex.ac.uk>
pkgname=genn_cpu_only
pkgver=4.2.1
pkgrel=1
pkgdesc="GeNN: GPU-enhanced neural networks (version 4; without CUDA backend)"
epoch=2
arch=(x86_64)
url="https://github.com/genn-team/genn"
license=('GPL')
makedepends=(doxygen doxypypy python python-numpy swig)
optdepends=("python: for pygenn" "python-numpy: for pygenn" "spinecreator: for spineml2genn")
options=(staticlibs !emptydirs)
provides=(genn)
conflicts=(genn)
source=("$url/archive/${pkgver//_/-}.tar.gz")
sha256sums=('39af16ab8b79f57b50e0a2796e89c2e1c568ab5c5373830009bf86fa00b6ea72')

# Make sure we aren't building with CUDA support
export CUDA_PATH=

prepare() {
	cd genn-${pkgver//_/-}

	# Set output dir
	sed -i "s|/usr/local|$pkgdir/usr|" Makefile

	# Delete tmp files
	find . -name '*~' -delete
}

build() {
	cd genn-${pkgver//_/-}

	# Generate documentation with doxygen
	msg2 "Generating documentation"
	sh ./makedoc.sh > /dev/null

	# Build libgenn.a etc.
	make

	# Build pygenn
	make DYNAMIC=1 LIBRARY_DIRECTORY=`pwd`/pygenn/genn_wrapper/
	python setup.py build

	# Build SpineML stuff
	cd src/spineml/
	for dname in common simulator standalone_simulator; do
		make -C $dname
	done
	cd generator
	make -f MakefileSingleThreadedCPU
}

package() {
	cd genn-${pkgver//_/-}

	# Install libs and headers
	PREFIX="$pkgdir"/usr/ make install

	# Install documentation
	mkdir -p "$pkgdir"/usr/share/genn/documentation
	cp -rf documentation/html/* "$pkgdir"/usr/share/genn/documentation

	# Copy userproject folder
	cp -R userproject "$pkgdir"/usr/src/genn

	# Install standalone SpineML generator
	install -m755 bin/spineml_* "$pkgdir"/usr/bin

	# Install SpineML2GeNN libs
	install -m644 lib/libspineml_*.a "$pkgdir"/usr/lib

	# Copy SpineML2GeNN headers
	cp -R include/spineml "$pkgdir"/usr/include

	# Install pygenn
	python setup.py install --prefix=/usr --root="$pkgdir"
}
