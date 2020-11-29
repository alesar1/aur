# Maintainer: Lumaku <lumaku@mailbox.org>
pkgname=python-kaldiio-git
pkgver=2.17.0.r252
pkgrel=1
pkgdesc='Pure Python module for reading and writing kaldi ark files'
arch=('any')
url='https://github.com/nttcslab-sp/kaldiio'
license=('custom:NTT')
depends=('python>=3.7' 'python-pytorch-complex-git' 'python-numpy')
makedepends=('git')
provides=('python-kaldiio')
conflicts=("python-kaldiio-git" "${pkgname}")
source=(
    "${pkgname}::git+${url}")
md5sums=(
    'SKIP')


pkgver() {
    cd "${pkgname}"
    printf "%s.r%s" "$(python setup.py --version)" "$(git rev-list --count HEAD)"
}


build() {
    cd "${pkgname}"
    python setup.py build
}


package() {
    cd "${pkgname}"
    export PYTHONHASHSEED=0
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

