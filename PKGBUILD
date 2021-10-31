# -*- mode: shell-script -*-
# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>
# Contributor: Dylon Edwards <deltaecho at archlinux dot us>

pkgname='python-tensorly'
pkgver=0.6.0
pkgrel=2
pkgdesc="Simple and Fast Tensor Learning in Python"
arch=('any')
url="https://tensorly.org/stable/home.html"
license=('BSD')
depends=(
    python
)
makedepends=(
    python-setuptools
)
optdepends=(
    python-numpy
    python-pytorch
    python-tensorflow
)
checkdepends=(
    python-pytest
    ${optdepends[@]}
)
# skipped backend tests
# - mxnet: somehow some tests fail
# - cupy: needs a GPU for tests
# - jax: build fails (https://github.com/google/jax/issues/7712)
optdepends+=(
    mxnet
    python-cupy
    python-jax
)
changelog="${pkgname}.changelog"
source=("tensorly-${pkgver}.tar.gz::https://github.com/tensorly/tensorly/archive/${pkgver}.tar.gz")
sha256sums=('e36a9124efd34f76fc727b0c45e92655a256231b56897591ee0d451ada279262')

build() {
    cd "tensorly-${pkgver}"
    python setup.py build
}

check() {
    cd "tensorly-${pkgver}"

    for backend in numpy pytorch tensorflow; do
        echo Testing against the $backend backend
        # So many flaky tests...
        # https://github.com/tensorly/tensorly/issues/310
        TENSORLY_BACKEND=$backend pytest -v tensorly \
          -k 'not test_svd and not test_active_set_nnls and not test_tr_tensor and not test_hals_nnls and not validate_tucker_rank and not test_parafac'
    done
}

package() {
    cd "tensorly-${pkgver}"
    python setup.py install --skip-build --root="$pkgdir" --optimize=1
    install -Dm644 LICENSE.txt -t "$pkgdir"/usr/share/licenses/$pkgname
}
