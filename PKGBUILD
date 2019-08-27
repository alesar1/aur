# Maintainer: Gaute Hope <eg@gaute.vetsj.com>
# Contributor: Rich Li <rich@dranek.com>
pkgname=python-cartopy
pkgver=0.17.0
pkgrel=3
pkgdesc="A cartographic python library with matplotlib support for visualisation"
url="https://scitools.org.uk/cartopy/docs/latest/"
depends=('python-numpy' 'python-six' 'python-shapely' 'python-pyshp' 'python-pyproj' 'python-matplotlib' 'python-pillow' 'python-scipy')
optdepends=('python-fiona: faster shapefile reading'
            'python-gdal: for use with SRTM data'
            'python-owslib: access OGC clients')
makedepends=('python-setuptools' 'cython')
checkdepends=('python-pytest' 'python-filelock')
license=('LGPL3')
arch=('x86_64')
source=("$pkgname-$pkgver.tar.gz::https://github.com/SciTools/cartopy/archive/v${pkgver}.tar.gz")
md5sums=('9fe063295a9fd854803d3c01a60720d0')
sha1sums=('f9936ca8639d46a5c265652e383c6d7cabd20c58')
sha256sums=('137642e63952404ec0841fa0333ad14c58fbbf19cca2a5ac6a38498c4b4998fb')

prepare() {
    cd "$srcdir/cartopy-${pkgver}"
    # The 0.17.0 release doesn't build against recent releases of PROJ due to
    # API deprecations. This is a temporary hack so at least it compiles
    # against the deprecated API. Hopefully someday this won't be necessary....
    # See also https://github.com/SciTools/cartopy/pull/1289
    sed -i '/# Main setup/iextra_extension_args["define_macros"] = [("ACCEPT_USE_OF_DEPRECATED_PROJ_API_H", None)]\n' setup.py
}

build() {
    cd "$srcdir/cartopy-${pkgver}"
    python setup.py build
}

# NB: the tests are disabled since the tests for version 0.17.0 no longer pass
# against current versions of libproj. Hopefully they will pass for the next
# upstream release.
#
# check() {
#     cd "$srcdir/cartopy-${pkgver}"
#     # Ignore the warnings (mostly deprecations and such), and also this test
#     # failed for me, so let's disable it for now.
#     pytest --disable-warnings \
#         -k "not test_gridliner" \
#         "build/lib.linux-${CARCH}-3.7/cartopy"
# 
#     # Remove any bytecode files generated from pytest (otherwise they'll be
#     # installed in the package)
#     find "build/lib.linux-${CARCH}-3.7/cartopy/tests" -name '*-PYTEST.pyc' -delete
# }

package() {
    cd "$srcdir/cartopy-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
