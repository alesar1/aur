# Maintainer: Sergej "winnie" Schmidt <winnie@violentinter.net>

_py="python2"
pkgname=netzob-git
pkgver=r3678.78fe862
pkgrel=5
HOLDVER=1
pkgdesc="Netzob is an opensource tool which supports the expert in its operations of reverse engineering, evaluation and simulation of communication protocols. This package pulls the current version from master branch containing the current version."
arch=('i686' 'x86_64')
url="http://netzob.org"
license=('GPL3')
depends=("impacket" "${_py}" "${_py}-numpy" "${_py}-sphinx" "${_py}-pcapy" "${_py}-bitarray" "${_py}-babel" "${_py}-netaddr" "${_py}-bintrees")
makedepends=("git" "${_py}-setuptools" "${_py}-mock")
conflicts=('netzob')
options=(!emptydirs)
install=
source=(${pkgname%-git}::git+https://dev.netzob.org/git/netzob.git)
provides=('netzob')
sha256sums=('SKIP')
pkgver() {
    cd "netzob"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/netzob"

    msg "Starting build."
    ${_py} setup.py build

    msg "Building docs."
    sphinx-apidoc2 -T -e -f -o doc/documentation/source/developer_guide/API/ src/netzob/
    find doc/documentation/source/developer_guide/API/ -type f -exec sed -i ':a;N;$!ba;s/Subpackages\n-----------\n\n.. toctree::\n/Subpackages\n-----------\n\n.. toctree::\n    :maxdepth: 1\n    /g' {} +
    sphinx-build2 -b html doc/documentation/source/ doc/documentation/build/

}

package() {
    cd "${srcdir}/netzob"

    msg "Starting install."
    ${_py} setup.py install --root="$pkgdir" || return 1

    msg "Installing docs."
    mkdir -p "$pkgdir/usr/share/doc"
    cp -r doc/documentation/build "$pkgdir/usr/share/doc/netzob"

    msg "Install successful. Cleaning up."
    find "$pkgdir" -type d -name .git -exec rm -rf '{}' \;
    find "$pkgdir" -type f -name .gitignore -exec rm -rf '{}' \;
}

