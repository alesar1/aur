# Maintainer: Astro Benzene <universebenzene at sina dot com>
# Contributor: Francois Boulogne <fboulogne at april dot org>

pkgname=python-tifffile
pkgver=2020.9.22
_pyname=${pkgname#python-}
pkgrel=1
pkgdesc="Read and write image data from and to TIFF files"
arch=('any')
url="https://github.com/cgohlke/tifffile"
license=('BSD')
makedepends=('python-setuptools')
depends=('python-numpy>=1.18.5')
optdepends=('python-matplotlib>=3.2.2: required only for plotting'
            'python-imagecodecs>=2020.5.30: required only for encoding or decoding LZW, JPEG, etc'
            'python-lxml>=4.5.2: required only for validating and printing XML')
#checkdepends=('python-pytest')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
sha256sums=('505a0ddf372697e8dacd3a8bc486f7143df44772b0fd72ca56486b6b46cbe494')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

#check() {
#    cd ${srcdir}/${_pyname}-${pkgver}
#
#    PYTHONPATH="build/lib" pytest
#}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}

    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1
}

# vim:ts=2:sw=2:et:
