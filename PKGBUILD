# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=pytype
pkgver=2018.11.06
pkgrel=1
pkgdesc="Python type inferencer"
arch=('any')
url="https://github.com/google/pytype"
license=('APACHE')
provides=('pytype')
depends=('python-importlab>=0.4'
         'python-yaml>=3.11'
         'ninja')
makedepends=('python' 'python-setuptools' 'python-wheel'
             'make' 'gcc' 'cmake'
             'bison>=3.0.2' 'flex>=2.5.35')
optdepends=('python36: Python versions > 3.6 of the target code are not yet supported')
options=(!emptydirs)
source=("https://github.com/google/pytype/archive/${pkgver}.tar.gz"
        "cpython-9734024.zip::https://github.com/python/cpython/archive/9734024ec65311e33936faa83fb1cb249ef0de9d.zip"
        "googletest-e82d320.zip::https://github.com/google/googletest/archive/e82d320567a45db1a999f9109f2b9a733bc59bb1.zip"
        "typeshed-9ee4582.zip::https://github.com/python/typeshed/archive/9ee458226c212acc2691f014d2a5575f33160d6d.zip"
        'without-ninja-python-distributions.patch'
        )
sha256sums=('5dbb1ee60453f836d0592d719a3ea253fe7f359ab5057fad4d5bbe37aa824565'
            'ebc3b63747875586f17b967ad2dae6d2a404adb5814612200217f39074377f9a'
            '891d732c77eec9fb57727cd99990a25455d6d5859b1fde107a332c5e238cc9e7'
            '6e634f400fcbe30ac6f5f8e476eef8b3cb8ae7d801e01b81bab04826c6d2402e'
            '3bff9fe87a283d37b929cec814a384a723b8f7c805a79981869357323dcaebb7'
            )

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p0 -i ../without-ninja-python-distributions.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  rm -rf googletest/
  ln -s "${srcdir}/googletest-e82d320567a45db1a999f9109f2b9a733bc59bb1" googletest

  rm -rf cpython/
  ln -s "${srcdir}/cpython-9734024ec65311e33936faa83fb1cb249ef0de9d" cpython

  rm -rf typeshed/
  ln -s "${srcdir}/typeshed-9ee458226c212acc2691f014d2a5575f33160d6d" typeshed

  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CHANGELOG "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG"
  install -Dm644 CONTRIBUTING.md "${pkgdir}/usr/share/doc/${pkgname}/CONTRIBUTING.md"
  install -Dm644 DESCRIPTION.rst "${pkgdir}/usr/share/doc/${pkgname}/DESCRIPTION.rst"
  install -Dm644 AUTHORS "${pkgdir}/usr/share/doc/${pkgname}/AUTHORS"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
}
