# Maintainer: lestb <tkhdlstfl dot l plus aur at gmail dot com>

_pkgname=PyHamcrest
pkgbase=${_pkgname,,}
pkgname=(python{2,}-hamcrest-git)
pkgver=1.8.0.r5.gf2786ca
pkgrel=1
pkgdesc='A framework for writing matcher objects, allowing you to declaratively define "match" rules'
arch=('any')
url="https://github.com/hamcrest/PyHamcrest"
license=('BSD')
makedepends=(python{2,}-setuptools)
source=("git+https://github.com/hamcrest/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
    cd "${_pkgname}"
    git describe --tags --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g;s/^V//'
}

_package() {
    pybin=$1
    depends=(${pybin})
    cd "${srcdir}/${_pkgname}"
    ${pybin} setup.py install --root="${pkgdir}" --optimize=1
    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

for _name in "${pkgname[@]}"; do
    _splitname=(${_name//-/ }) # For retriving the python version needed
    eval "package_${_name}() { _package ${_splitname[0]}; }"
done
