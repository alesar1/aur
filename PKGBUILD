# Maintainer: Lev Levitsky <levlev at mail dot ru>
pkgname=python-catboost
_name=${pkgname#python-}
_py=cp310
pkgver=1.0.5
pkgrel=1
pkgdesc="Fast, scalable, high performance gradient boosting on decision trees"
arch=('x86_64')
url="https://catboost.ai/"
license=('Apache')
depends=('python>=3.10' 'python-numpy' 'python-six' 'python-graphviz' 'python-plotly')
makedepends=('python-wheel' 'python-pip')
optdepends=('python-ipywidgets: visualization in Jupyter')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/$_py/${_name::1}/$_name/${_name/-/_}-$pkgver-$_py-none-manylinux1_x86_64.whl")
sha256sums=('c52f82389f155b15c8c21ea42cd6dea10c01e561cec6c4f18b1d0460ab04e23e')
noextract=("${_name/-/_}-$pkgver-$_py-none-manylinux1_x86_64.whl")

package() {
    PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps "${_name/-/_}-$pkgver-$_py-none-manylinux1_x86_64.whl"
}

# vim:set ts=2 sw=2 et:
