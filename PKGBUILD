# Maintainer: Astro Benzene <universebenzene at sina dot com>
# Contributor: Francois Boulogne <fboulogne at april dot org>

pkgbase=python-tifffile
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}" "python-${_pyname}-doc")
pkgver=2022.10.10
pkgrel=1
pkgdesc="Read and write image data from and to TIFF files"
arch=('any')
url="https://github.com/cgohlke/tifffile"
license=('BSD')
makedepends=('python-setuptools'
             'python-sphinx'
             'python-numpy')
#makedepends=('python-setuptools' 'python-wheel' 'python-build' 'python-installer')
checkdepends=('python-pytest' 'python-fsspec' 'python-xarray') # numpy <- xarray
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
sha256sums=('50b61ba943b866d191295bc38a00191c9fdab23ece063544c7f1a264e3f6aa8e')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
#   python -m build --wheel --no-isolation

    msg "Building Docs"
    cd ${srcdir}/${_pyname}-${pkgver}/docs
#   PYTHONPATH="../build/lib" make html
    PYTHONPATH="../build/lib" python make.py
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    # From Gentoo's ebuild
    PYTHONPATH="build/lib" pytest \
        --deselect=tests/test_tifffile.py::test_class_omexml \
        --deselect=tests/test_tifffile.py::test_class_omexml_fail \
        --deselect=tests/test_tifffile.py::test_class_omexml_modulo \
        --deselect=tests/test_tifffile.py::test_class_omexml_attributes \
        --deselect=tests/test_tifffile.py::test_class_omexml_multiimage \
        --deselect=tests/test_tifffile.py::test_write_ome \
        --deselect=tests/test_tifffile.py::test_write_ome_manual \
        --deselect=tests/test_tifffile.py::test_write_3gb \
        --deselect=tests/test_tifffile.py::test_write_bigtiff \
        --deselect=tests/test_tifffile.py::test_write_imagej_raw || warning "Tests failed"
}

package_python-tifffile() {
    depends=('python-numpy>=1.23.3')
    optdepends=('python-matplotlib>=3.5.2: required for plotting'
                'python-imagecodecs>=2022.9.26: required for encoding or decoding LZW, JPEG, etc. compressed segments'
                'python-lxml>=4.9.1: required only for validating and printing XML'
                'python-zarr>=2.13.0: required for opening Zarr stores'
                'python-fsspec: required only for opening ReferenceFileSystem files'
                'python-tifffile-doc: Documentation for Python tifffile')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    install -Dm644 examples/* -t "${pkgdir}/usr/share/doc/${pkgname}/examples"

    python setup.py install --root="${pkgdir}" --optimize=1
#   python -m installer --destdir="${pkgdir}" dist/*.whl
}

package_python-tifffile-doc() {
    pkgdesc="Documentation for Python Photutils module"
    cd ${srcdir}/${_pyname}-${pkgver}/docs

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../LICENSE
    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
