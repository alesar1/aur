# Maintainer: Astro Benzene <universebenzene at sina dot com>
# Contributor: Nabil Freij <nabil.freij@gmail.com>

pkgbase=python-glymur
#_pyname=${pkgbase#python-}
_pyname=Glymur
pkgname=('python-glymur')
#'python-glymur-doc')
pkgver=0.10.1
pkgrel=1
pkgdesc="Tools for accessing JPEG2000 files"
arch=('any')
url="https://glymur.readthedocs.org"
license=('MIT')
makedepends=('python-setuptools' 'python-wheel' 'python-build' 'python-installer')
#'python-numpydoc' 'python-sphinx_rtd_theme')
checkdepends=('python-pytest' 'openjpeg2' 'python-numpy' 'python-lxml' 'python-scikit-image' 'python-gdal')
source=("https://files.pythonhosted.org/packages/source/${_pyname::1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('d1d904034b5349bbd48ef1462edd3ca8')

get_pyver() {
    python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))'
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python -m build --wheel --no-isolation

#   msg "Building Docs"
#   cd ${srcdir}/${_pyname}-${pkgver}/docs
#   mkdir source/_static
#   PYTHONPATH="../build/lib" make html
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

#   svn export https://github.com/quintusdias/glymur/trunk/tests/data tests/data
#   Three fits files are missing in pypi package
#   data dir missing in pypi package from 0.9.9
    pytest \
        --deselect=tests/test_jp2box_uuid.py::TestSuite::test__printing__geotiff_uuid__xml_sidecar \
        --deselect=tests/test_jp2k.py::TestJp2k::test_dtype_inconsistent_bitdetph \
        --deselect=tests/test_jp2k.py::TestJp2k::test_dtype_j2k_uint16 || warning "Tests failed"
}

package_python-glymur() {
    cd ${srcdir}/${_pyname}-${pkgver}
    depends=('python-numpy' 'python-lxml' 'python-packaging' 'python-setuptools')
    optdepends=('openjpeg2'
                'python-gdal'
                'python-scikit-image'
                'python-glymur-doc: Documentation for Python Glymur')

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE.txt
    install -D -m644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    python -m installer --destdir="${pkgdir}" dist/*.whl
    rm -r "${pkgdir}/usr/lib/python$(get_pyver)/site-packages/tests"/*
}

#package_python-glymur-doc() {
#    pkgdesc="Documentation for Python Glymur module"
#    cd ${srcdir}/${_pyname}-${pkgver}/docs/build
#
#    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../LICENSE.txt
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
