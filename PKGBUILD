# Maintainer: Sameer Puri <aur@purisa.me>
pkgname=python-or-tools
pkgver=9.2
pkgrel=1
pkgdesc="Google's Operations Research tools"
arch=('x86_64' 'i686' 'aarch64' 'armv7h')
url="https://github.com/google/or-tools"
license=('Apache2')
depends=('python>=3.6' 'swig' 'python-protobuf>=3.19.1' 'absl-py>=0.13' 'python-numpy>=1.13.3')
makedepends=('cmake' 'wget' 'lsb-release' 'automake' 'python-wheel' 'python-pip' 'git')
optdepends=('cplex: CPLEX solver support')
options=(!emptydirs)
source=("https://github.com/google/or-tools/archive/v${pkgver}.tar.gz")
b2sums=('acfdc58991dcfc476ea7a448788a2a32250b0e8dcc9017e082746f12a06b203859b8d2f55c14542f58798c9fbecfc2daa3dd4f3b9d7c9557974469a273698afa')

build() {
    cd "${srcdir}/or-tools-${pkgver}"
    if [ `pacman -Qi cpelx &>/dev/null` ]; then
        cmake -S. -Bbuild -DBUILD_PYTHON:BOOL=ON -DUSE_CPLEX:BOOL=ON -DCPLEX_ROOT=/usr/lib/cplex
    else
	cmake -S. -Bbuild -DBUILD_PYTHON:BOOL=ON
    fi
    cmake --build build
}

package() {
    cd "${srcdir}/or-tools-${pkgver}"
    /usr/bin/pip --quiet install --root="$pkgdir" \
        --no-deps --ignore-installed --no-warn-script-location \
        "$(find -name 'ortools*whl')"
}
