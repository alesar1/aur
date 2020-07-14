# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_pytype_repo="https://github.com/google/pytype"
_pytype_tag=2020.06.26

_cpython_repo="https://github.com/python/cpython"
_cpython_gitcommit="9734024ec65311e33936faa83fb1cb249ef0de9d"

_googletest_repo="https://github.com/google/googletest"
_googletest_gitcommit="e82d320567a45db1a999f9109f2b9a733bc59bb1"

_typeshed_repo="https://github.com/python/typeshed"
_typeshed_gitcommit="5fe6a5ba8b5d362f9339d5fef4d31ba1704c8924"

pkgname=pytype
pkgver="${_pytype_tag}"
pkgrel=1
pkgdesc="Python type inferencer"
arch=('any')
url="https://google.github.io/pytype"
license=('APACHE')
provides=('pytype')
depends=(
  'ninja'
  'python>=3.5'
  'python<3.9'
  'python-attrs'
  'python-importlab>=0.5.1'
  'python-six'
  'python-typed-ast'
  'python-yaml>=3.11'
)
makedepends=(
  'python' 'python-setuptools' 'python-wheel'
  'make' 'gcc' 'cmake'
  'bison>=3.0.2' 'flex>=2.5.35'
  'fakeroot'
)
optdepends=(
  'python2: for target code of Python 2.7 support'
  'python36: for target code of Python 3.6 support'
  'python37: for target code of Python 3.7 support'
)
options=(!emptydirs)
source=(
  "${_pytype_repo}/archive/${pkgver}.tar.gz"
  "cpython-${_cpython_gitcommit:0:7}.zip::${_cpython_repo}/archive/${_cpython_gitcommit}.zip"
  "googletest-${_googletest_gitcommit:0:7}.zip::${_googletest_repo}/archive/${_googletest_gitcommit}.zip"
  "typeshed-${_typeshed_gitcommit:0:7}.zip::${_typeshed_repo}/archive/${_typeshed_gitcommit}.zip"
  'without-ninja-python-distributions.patch'
)
sha256sums=(
  'adcf117f044d76260deb0232544e96476b46123c25f0abdd58ba1a5640a03615'
  'ebc3b63747875586f17b967ad2dae6d2a404adb5814612200217f39074377f9a'
  '891d732c77eec9fb57727cd99990a25455d6d5859b1fde107a332c5e238cc9e7'
  'd80c461ee1de1ee9a8f206043a0a13aa3a96525114f38f210bbe3c5a28a5a2ba'
  'a73a70cd879656d07f3075298ab97412026c0b414031abd9ef84b99c2936e459'
)

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p0 -i ../without-ninja-python-distributions.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  rm -rf googletest/
  ln -s "${srcdir}/googletest-${_googletest_gitcommit}" googletest

  rm -rf cpython/
  ln -s "${srcdir}/cpython-${_cpython_gitcommit}" cpython

  rm -rf typeshed/
  ln -s "${srcdir}/typeshed-${_typeshed_gitcommit}" typeshed

  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -d "${pkgdir}/usr/share/doc/${pkgname}"
  cp -R docs "${pkgdir}/usr/share/doc/${pkgname}/docs"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CHANGELOG "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG"
  install -Dm644 CONTRIBUTING.md "${pkgdir}/usr/share/doc/${pkgname}/CONTRIBUTING.md"
  install -Dm644 AUTHORS "${pkgdir}/usr/share/doc/${pkgname}/AUTHORS"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
}
