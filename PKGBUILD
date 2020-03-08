# Maintainer: csantosb <csantosb dot inventati dot org>
pkgname=python-fusesoc-git
pkgver=r1200.ed63efa
pkgrel=1
pkgdesc="Coroutine based cosimulation library for writing VHDL and Verilog testbenches in Python"
arch=('any')
url="https://github.com/olofk/fusesoc"
license=('GPLv3')
conflicts=('python-fusesoc')
provides=('python-fusesoc-git')
depends=('python' 'python-edalize-git')

makedepends=('git' 'python-setuptools')
optdepends=('iverilog: for simulating verilog designs'
	    'ghdl: for simulating VHDL designs')

options=(!emptydirs)
source=('git+https://github.com/olofk/fusesoc')
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/fusesoc"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/fusesoc"
    python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1
    install -m 644 -D ./LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"/LICENSE
}